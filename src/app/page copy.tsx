export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Red BG - fixed position background */}
      <div className="fixed inset-0 z-[-1] bg-[url('/red_bg.png')] bg-cover bg-center bg-no-repeat" />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center relative z-10 text-center space-y-16">

        {/* Header Section */}
        <section className="space-y-6 animate-fade-in-down">
          <h2 className="tracking-[0.2em] text-lg md:text-xl uppercase font-bold font-secondary">
            Everything for Playing
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold gold-gradient-text leading-tight">
            ZERO LEVEL HEROES
          </h1>
          <p className="text-xl font-secondary italic">
            in one 40-page rules expansion
          </p>
        </section>

        {/* Main Logo */}
        <section className="w-full flex justify-center py-4">
          <div className="w-full max-w-xl md:max-w-3xl filter drop-shadow-[0_0_15px_rgba(201,162,39,0.2)]">
             <img src="/logo_st_black.png" alt="Sickle & Torch Logo" className="w-full h-auto invert" />
          </div>
        </section>

        {/* Covers Section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start pt-8">

          {/* 5E Column */}
          <div className="flex flex-col items-center space-y-6 group">
            <h3 className="text-2xl md:text-3xl font-bold text-center px-2 leading-tight">
              PLAY OUT YOUR <span className="text-[var(--color-gold-primary)] block mt-2 text-4xl">5E</span> CHARACTER’S BACKSTORY
            </h3>
            <div className="w-full max-w-sm aspect-[3/4] relative shadow-2xl transform group-hover:scale-110 transition-transform duration-500 mt-4">
               <img src="/00_cover_5E.png" alt="5E Edition Cover" className="object-cover w-full h-full opacity-90 group-hover:opacity-100" />
            </div>
          </div>

          {/* Shadowdark Column */}
          <div className="flex flex-col items-center space-y-6 group md:-mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center px-2 leading-tight">
              RUN AN UNFORGETTABLE <span className="text-[var(--color-gold-primary)] block mt-2 text-4xl">SHADOWDARK</span> GAUNTLET
            </h3>
            <div className="w-full max-w-sm aspect-[3/4] relative shadow-2xl transform group-hover:scale-110 transition-transform duration-500 z-10 mt-4">
               <img src="/00_cover_shadowdark.png" alt="Shadowdark Edition Cover" className="object-cover w-full h-full opacity-90 group-hover:opacity-100" />
            </div>
          </div>

          {/* DCC Column */}
          <div className="flex flex-col items-center space-y-6 group">
            <h3 className="text-2xl md:text-3xl font-bold text-center px-2 leading-tight">
              HAVE EVEN MORE FUN WITH YOUR <span className="text-[var(--color-gold-primary)] block mt-2 text-4xl">DCC</span> FUNNEL!
            </h3>
            <div className="w-full max-w-sm aspect-[3/4] relative shadow-2xl transform group-hover:scale-110 transition-transform duration-500 mt-4">
               <img src="/00_cover_DCC.png" alt="DCC Edition Cover" className="object-cover w-full h-full opacity-90 group-hover:opacity-100" />
            </div>
          </div>

        </section>


        {/* Description */}
        <section className="max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed font-secondary text-gray-300">
            <span className="text-[var(--color-gold-primary)] font-bold">Sickle & Torch</span> is a rules expansion for <span className="text-white font-bold">5e</span>, <span className="text-white font-bold">Shadowdark</span> and <span className="text-white font-bold">Dungeon Crawl Classics</span> that focuses on 0-level commoners on their paths towards becoming heroic level 1 characters.
          </p>
        </section>

      </main>

      {/* Bailiff & Adventures Section - Full width, outside main for sticky effect */}
      <section className="relative w-full min-h-[150vh] md:min-h-[200vh]">
        {/* Sticky Bailiff Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/bailiff.png"
              alt="The Bailiff"
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
        </div>

        {/* Scrolling Content Over Bailiff */}
        <div className="relative z-10">
          <div className="h-[40vh]" />

          <div className="flex flex-col items-center justify-center px-6 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-secondary italic text-[var(--color-gold-primary)] mb-6">
                Potential replay value: INCALCULABLE.
              </p>
              <h2 className="text-5xl md:text-7xl font-bold uppercase text-white leading-none mb-3">
                Four Adventures
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold uppercase gold-gradient-text leading-none">
                Endless Scenarios
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with rest of content */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center relative z-10 text-center space-y-16">

        {/* Kickstarter */}
        <section className="bg-[var(--color-void-panel)] p-8 w-full rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-[var(--color-gold-dim)]">Coming to Kickstarter</p>
            {/* Placeholder for Kickstarter Logo */}
            <div className="bg-white text-black px-3 py-1 font-bold rounded text-xs tracking-tighter">
              KICKSTARTER
            </div>
            <h2 className="text-3xl font-bold text-white">February 2026</h2>
          </div>
        </section>

        {/* Join the Mob / Newsletter */}
        <section className="w-full space-y-6">
          <h2 className="text-4xl font-bold gold-gradient-text uppercase tracking-wide">
            Join The Mob
          </h2>
          <form className="flex flex-col md:flex-row gap-2 max-w-md mx-auto w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black border border-[var(--color-gold-dim)] px-4 py-3 text-white focus:border-[var(--color-gold-primary)] focus:outline-none font-secondary"
            />
            <button className="btn-fantasy px-8 py-3 font-bold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </section>

        {/* Socials */}
        <section className="flex flex-col items-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]">Follow us</p>
          <div className="flex space-x-6 text-[var(--color-gold-primary)]">
            {/* Text placeholders for logos as requested */}
            <a href="#" className="hover:text-white transition-colors font-bold border border-[var(--color-gold-dim)] px-2 py-1 text-xs rounded">KS</a>
            <a href="#" className="hover:text-white transition-colors font-bold border border-[var(--color-gold-dim)] px-2 py-1 text-xs rounded">FB</a>
            <a href="#" className="hover:text-white transition-colors font-bold border border-[var(--color-gold-dim)] px-2 py-1 text-xs rounded">TW</a>
          </div>
        </section>

      </div>

      {/* Crowd Footer Section */}
      <footer className="w-full relative mt-12">
        {/* Text overlaid on top of crowd */}
        <div className="flex items-start justify-center pt-8">
          <h2 className="text-6xl md:text-9xl w-full text-center font-bold uppercase tracking-tighter gold-gradient-text">
            JOIN THE MOB
          </h2>
        </div>
        <div className="relative">
          <img
            src="/crowd.png"
            alt="The Mob"
            className="w-full h-auto object-cover"
          />
        </div>
      </footer>
    </div>
  );
}
