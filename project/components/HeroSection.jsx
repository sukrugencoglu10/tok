
const HeroSection = ({ tweaks }) => {
  const [offsetY, setOffsetY] = React.useState(0);
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';

  React.useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        transform: `translateY(${offsetY * 0.4}px)`,
        transition: 'none',
      }}>
        <HeroPlaceholder />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(45,42,38,0.78) 0%, rgba(45,42,38,0.48) 60%, rgba(45,42,38,0.65) 100%)' }} />
      </div>

      {/* Gold accent line */}
      <div style={{ position: 'absolute', left: 60, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, transparent, ${gold}, transparent)`, opacity: 0.4 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 820, padding: '0 40px' }} className="fade-in-up">
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: gold, marginBottom: 24 }}>
          İstanbul · Kuruluş 1970
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: '0 0 24px' }}>
          Hayalinizdeki Mekanı<br/>
          <em style={{ color: gold, fontStyle: 'italic' }}>İnşa Ediyoruz</em>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 44, maxWidth: 580, margin: '0 auto 44px' }}>
          1970'den bu yana kalite, güven ve estetik — depreme dayanıklı yapılar ve modern iç mekan tasarımında İstanbul'un köklü firması.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('projects')} style={{
            background: gold, color: dark, border: 'none', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 700,
            letterSpacing: 2, textTransform: 'uppercase', padding: '16px 36px',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4b77d'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 32px rgba(201,169,110,0.4)`; }}
          onMouseLeave={e => { e.currentTarget.style.background = gold; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >Projelerimizi İncele</button>
          <button onClick={() => scrollTo('contact')} style={{
            background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.5)', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600,
            letterSpacing: 2, textTransform: 'uppercase', padding: '16px 36px',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.color = gold; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; }}
          >Ücretsiz Keşif Al</button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => scrollTo('stats')}>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 3, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Keşfet</span>
        <div style={{ width: 1, height: 50, background: `linear-gradient(to bottom, transparent, ${gold})`, animation: 'scrollPulse 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes scrollPulse { 0%,100%{opacity:0.4;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }
        .fade-in-up { animation: fadeInUp 1.2s ease forwards; }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
};

const HeroPlaceholder = () => (
  <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, objectFit: 'cover' }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="heroGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(201,169,110,0.08)" strokeWidth="1"/>
      </pattern>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#32323A"/>
        <stop offset="50%" stopColor="#423C34"/>
        <stop offset="100%" stopColor="#32323A"/>
      </linearGradient>
    </defs>
    <rect width="1440" height="900" fill="url(#heroGrad)"/>
    <rect width="1440" height="900" fill="url(#heroGrid)"/>
    {/* Architectural silhouettes */}
    <rect x="200" y="400" width="120" height="500" fill="rgba(201,169,110,0.06)"/>
    <rect x="340" y="320" width="90" height="580" fill="rgba(201,169,110,0.05)"/>
    <rect x="450" y="280" width="140" height="620" fill="rgba(201,169,110,0.07)"/>
    <rect x="610" y="200" width="160" height="700" fill="rgba(201,169,110,0.06)"/>
    <rect x="790" y="350" width="100" height="550" fill="rgba(201,169,110,0.05)"/>
    <rect x="910" y="260" width="130" height="640" fill="rgba(201,169,110,0.07)"/>
    <rect x="1060" y="380" width="110" height="520" fill="rgba(201,169,110,0.05)"/>
    <rect x="1190" y="300" width="150" height="600" fill="rgba(201,169,110,0.06)"/>
    {/* Windows */}
    {[220,260,300,360,400,470,530,590,630,690,750,830,870,930,990,1080,1120,1210,1270,1330].map((x,i) => (
      <rect key={i} x={x} y={280 + (i%5)*80} width={16} height={22} fill="rgba(201,169,110,0.18)" rx="1"/>
    ))}
    {/* Horizon glow */}
    <ellipse cx="720" cy="850" rx="600" ry="200" fill="rgba(201,169,110,0.04)"/>
    <text x="50%" y="92%" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="11" fill="rgba(201,169,110,0.3)" letterSpacing="4">İNŞAAT PROJESİ GÖRSELİ</text>
  </svg>
);

Object.assign(window, { HeroSection });
