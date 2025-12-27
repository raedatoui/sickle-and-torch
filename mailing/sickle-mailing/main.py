import json
import os
import requests
from dotenv import load_dotenv
from firebase_functions import https_fn, logger
from firebase_admin import initialize_app
from email_validator import validate_email, EmailNotValidError

load_dotenv()

initialize_app()

MAILGUN_API_KEY = os.getenv('MAILGUN_API_KEY')
DOMAIN = 'sickleandtorch.com'
MAILGUN_BASE_URL = 'https://api.mailgun.net/v3'
MAILING_LIST = 'mob@sickleandtorch.com'


@https_fn.on_call(
    region='us-central1',
    service_account=os.getenv('SERVICE_ACCOUNT'),
    enforce_app_check=True
)
def join_the_mob(req: https_fn.CallableRequest):
    # 2. Get JSON payload
    data = req.data
    if not data or 'email' not in data:
        logger.error(f"Missing 'email' field in request. Data: {data}")
        raise https_fn.HttpsError(
            message='Missing \'email\' field',
            code=https_fn.FunctionsErrorCode.INVALID_ARGUMENT
        )
    # 3. Sanitize and Validate Email
    raw_input = str(data['email']).strip()

    try:
        # check_deliverability=False avoids DNS lookups (faster, less timeouts)
        # Set to True if you want to ensure the domain actually exists.
        valid = validate_email(raw_input, check_deliverability=False)

        # valid.email is the normalized form (e.g. converts user@GMAIL.com to user@gmail.com)
        clean_email = valid.normalized

    except EmailNotValidError as e:
        # This catches "random code", missing @, invalid chars, etc.
        logger.error(f"Invalid email address: {raw_input}. Error: {e}")
        raise https_fn.HttpsError(
            message=f'Invalid email address: {str(e)}',
            code=https_fn.FunctionsErrorCode.INVALID_ARGUMENT
        )

    # 4. Check if email exists in mailing list and add if not
    try:
        # Check if email exists in the mailing list
        check_url = f'{MAILGUN_BASE_URL}/lists/{MAILING_LIST}/members/{clean_email}'
        check_resp = requests.get(
            check_url,
            auth=('api', MAILGUN_API_KEY),
            timeout=10
        )
        logger.info(f"Check member response: {check_resp.status_code} {check_resp.text}")

        if check_resp.status_code == 404:
            # Email doesn't exist, add to mailing list
            add_url = f'{MAILGUN_BASE_URL}/lists/{MAILING_LIST}/members'
            add_resp = requests.post(
                add_url,
                auth=('api', MAILGUN_API_KEY),
                data={
                    'address': clean_email,
                    'subscribed': True
                },
                timeout=10
            )
            logger.info(f"Add member response: {add_resp.status_code} {add_resp.text}")

            if add_resp.status_code != 200:
                logger.error(f"Failed to add member: {add_resp.text}")
                raise https_fn.HttpsError(
                    message=f'Failed to add email to mailing list: {add_resp.text}',
                    code=https_fn.FunctionsErrorCode.INTERNAL
                )
            # 5. Send notification email to admin
            # loreplay_fwd = requests.post(
            #     f'{MAILGUN_BASE_URL}/{DOMAIN}/messages',
            #     auth=('api', MAILGUN_API_KEY),
            #     data={
            #         'from': 'Sickle & Torch <mob@sickledandtorch.com>',
            #         'to': 'loreplaypress@gmail.com',
            #         'subject': 'New Mobster!',
            #         'text': clean_email
            #     },
            #     timeout=60  # Good practice to add timeouts
            # )
            # logger.info(f"Admin notification response: {loreplay_fwd.status_code} {loreplay_fwd.text}")
            #
            # if loreplay_fwd.status_code != 200:
            #     logger.error(f"Failed to notify admin: {loreplay_fwd.text}")
            #     raise https_fn.HttpsError(
            #         message=f'Failed to notify loreplaypress: {loreplay_fwd.text}',
            #         code=https_fn.FunctionsErrorCode.INTERNAL
            #     )

            # confirmation email to user
            mailgun_resp = requests.post(
                f'{MAILGUN_BASE_URL}/{DOMAIN}/messages',
                auth=('api', MAILGUN_API_KEY),
                data={"from": "Sickle & Torch <mob@sickleandtorch.com>",
                      "to": clean_email,
                      "subject": "You joined the Mob!",
                      "template": "sickle & torch mob",
                      "h:X-Mailgun-Variables": '{"test": "test"}'})

            logger.info(f"User confirmation response: {mailgun_resp.status_code} {mailgun_resp.text}")

            if mailgun_resp.status_code != 200:
                logger.error(f"Failed to send confirmation to user: {mailgun_resp.text}")
                # raise https_fn.HttpsError(
                #     message=f'Failed to notify user: {mailgun_resp.text}',
                #     code=https_fn.FunctionsErrorCode.INTERNAL
                # )
                return {
                    'status': mailgun_resp.status_code,
                    'response': json.loads(mailgun_resp.text)
                }

            # 6. Return success/fail from Mailgun
            return {
                'status': mailgun_resp.status_code,
                'response': json.loads(mailgun_resp.text)
            }


        elif check_resp.status_code != 200:
            logger.error(f"Error checking mailing list: {check_resp.text}")
            raise https_fn.HttpsError(
                message=f'Error checking mailing list: {check_resp.text}',
                code=https_fn.FunctionsErrorCode.INTERNAL
            )
        else:
            # Email already exists in the list
            logger.info(f"Email {clean_email} already subscribed.")
            return {
                'message': 'Email already subscribed'
            }

    except requests.exceptions.RequestException as e:
        logger.error(f"Mailgun connection failed: {e}")
        raise https_fn.HttpsError(
            message=f'Mailgun connection failed: {str(e)}',
            code=https_fn.FunctionsErrorCode.INTERNAL
        )
