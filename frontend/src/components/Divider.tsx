'use client';

import { type FC, useEffect, useRef } from 'react';

interface DividerProps {
    className?: string;
    index?: number;
    speed?: number;
}

const Divider: FC<DividerProps> = ({ className = '', index = 1, speed = 0.15 }) => {
    const formattedIndex = index.toString().padStart(2, '0');
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            if (!containerRef.current || !imgRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if element is roughly in view (with some buffer)
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
                // Calculate distance from center of viewport
                const centerY = windowHeight / 2;
                const elementCenterY = rect.top + rect.height / 2;
                const distFromCenter = elementCenterY - centerY;

                // Move image based on distance (parallax effect)
                // When element is below center (positive dist), move it down (positive offset) -> moves slower than scroll
                // When element is above center (negative dist), move it up (negative offset)
                const yOffset = distFromCenter * speed;

                imgRef.current.style.transform = `translateY(${yOffset}px)`;
            }
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll);

        // Initial positioning
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, [speed]);

    let art = `/dividers/art-${formattedIndex}.webp`;
    let artWidth = 'max-w-6xl';

    if (formattedIndex === '01') {
        art = '/dividers/girl-fire.gif';
        artWidth = 'max-w-3xl';
    }
    if (formattedIndex === '02') {
        art = '/dividers/art-02.webp';
        artWidth = 'max-w-3xl';
    }
    if (formattedIndex === '03') {
        art = '/dividers/villagers-senkasti.webp';
        artWidth = 'max-w-6xl';
    }
    if (formattedIndex === '04') {
        art = '/dividers/art-03.webp';
        artWidth = 'max-w-7xl';
    }
    if (formattedIndex === '05') {
        artWidth = 'max-w-xl';
    }
    return (
        <div ref={containerRef} className={`w-full flex justify-center items-center ${className}`}>
            <img
                ref={imgRef}
                src={art}
                alt="Section Divider"
                className={`w-full ${artWidth} h-auto object-contain opacity-90 select-none will-change-transform`}
            />
        </div>
    );
};

export default Divider;
