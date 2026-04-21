
const NavBar = ({ tweaks }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  const links = [
    { id: 'hero', label: 'Ana Sayfa' },
    { id: 'services', label: 'Hizmetlerimiz' },
    { id: 'projects', label: 'Projelerimiz' },
    { id: 'catalog', label: 'Katalog' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'contact', label: 'İletişim' },
  ];

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean);
      let current = 'hero';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'linear-gradient(135deg, #F5F3F0 0%, #FAFAF8 50%, #F0EEEB 100%)',
        borderBottom: `2px solid ${gold}`,
        transition: 'all 0.4s ease',
        padding: '0 40px',
        height: 70,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 2px 16px rgba(45,45,48,0.08)',
      }}>
        {/* Logo */}
        <div onClick={() => scrollTo('hero')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: 60, minWidth: 120, filter: 'brightness(1.2)' }}>
          <img src="/image/logo.png" alt="Adem Tok Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* Center links */}
        <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: activeSection === l.id ? gold : 'transparent',
              border: `1px solid ${activeSection === l.id ? gold : 'rgba(45,45,48,0.3)'}`,
              cursor: 'pointer',
              fontFamily: 'Montserrat, sans-serif', fontSize: 10,
              letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600,
              color: activeSection === l.id ? dark : '#3A3A3C',
              padding: '8px 16px', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { if (activeSection !== l.id) { e.target.style.borderColor = gold; e.target.style.color = dark; } }}
            onMouseLeave={e => { if (activeSection !== l.id) { e.target.style.borderColor = 'rgba(45,45,48,0.3)'; e.target.style.color = '#3A3A3C'; } }}
            >{l.label}</button>
          ))}
        </div>

        {/* Right CTA */}
        <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="tel:+902121234567" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#3A3A3C', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: 13, transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = gold}
            onMouseLeave={e => e.currentTarget.style.color = '#3A3A3C'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={gold}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            +90 212 123 45 67
          </a>
          <button onClick={() => scrollTo('contact')} style={{
            background: gold, color: dark, border: 'none', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700,
            letterSpacing: 1.5, textTransform: 'uppercase', padding: '10px 20px',
            transition: 'all 0.3s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.target.style.background = '#d4b77d'; e.target.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.target.style.background = gold; e.target.style.transform = 'translateY(0)'; }}
          >Ücretsiz Keşif</button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 5, padding: 8,
        }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: menuOpen && i===1 ? 'transparent' : dark,
              transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              transition: 'all 0.3s',
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: dark,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.4s',
      }}>
        {links.map(l => (
          <button key={l.id} onClick={() => scrollTo(l.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 700,
            color: activeSection === l.id ? gold : 'white',
          }}>{l.label}</button>
        ))}
        <button onClick={() => { scrollTo('contact'); }} style={{
          background: gold, color: dark, border: 'none', cursor: 'pointer',
          fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 700,
          letterSpacing: 2, textTransform: 'uppercase', padding: '14px 36px', marginTop: 20,
        }}>Ücretsiz Keşif Al</button>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

Object.assign(window, { NavBar });
