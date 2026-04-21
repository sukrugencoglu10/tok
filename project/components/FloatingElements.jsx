
const FloatingElements = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const [showTop, setShowTop] = React.useState(false);
  const [cookieDismissed, setCookieDismissed] = React.useState(() => localStorage.getItem('at_cookie') === '1');

  React.useEffect(() => {
    const onScroll = () => {
      // Mobil cihazlarda scroll to top butonunu gizle
      const isMobile = window.innerWidth <= 768;
      setShowTop(isMobile ? false : window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp FAB */}
      <a href="https://wa.me/905321234567" target="_blank" rel="noopener"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 900,
          width: 52, height: 52, borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          animation: 'waPulse 2.5s ease-in-out infinite',
          textDecoration: 'none', transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed', bottom: 88, left: 24, zIndex: 900,
          width: 44, height: 44, background: dark,
          border: `1px solid ${gold}`, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.35s',
          pointerEvents: showTop ? 'all' : 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.background = gold}
        onMouseLeave={e => e.currentTarget.style.background = dark}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

      {/* Cookie banner */}
      {!cookieDismissed && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 800,
          background: 'rgba(28,28,30,0.97)', borderTop: `1px solid rgba(201,169,110,0.2)`,
          padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
          backdropFilter: 'blur(12px)',
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
            Bu web sitesi deneyiminizi iyileştirmek için çerezler kullanmaktadır.{' '}
            <a href="#" style={{ color: gold, textDecoration: 'none' }}>Gizlilik politikası</a>
          </p>
          <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
            <button onClick={() => { setCookieDismissed(true); localStorage.setItem('at_cookie','1'); }} style={{ background: gold, color: dark, border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, padding: '10px 24px' }}>Kabul Et</button>
            <button onClick={() => { setCookieDismissed(true); localStorage.setItem('at_cookie','1'); }} style={{ background: 'transparent', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', padding: '10px 20px' }}>Reddet</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 4px 32px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.1); }
        }
      `}</style>
    </>
  );
};
Object.assign(window, { FloatingElements });
