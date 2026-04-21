
const MobileTopBar = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';

  return (
    <>
      <div id="mobile-top-bar" style={{
        background: dark,
        padding: '12px 20px',
        borderBottom: `1px solid ${gold}`,
        display: 'none'
      }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
          <a href="tel:+905354925883" onClick={() => { if (window.gtag) window.gtag('event', 'phone_click', { event_category: 'engagement', event_label: 'Mobil Top Bar Telefon' }); }} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = gold}
          onMouseLeave={e => e.currentTarget.style.color = '#fff'}
          >
            <span>📞</span>
            <span>+90 535 492 58 83</span>
          </a>
          <a href="mailto:info@ademtok.com" onClick={() => { if (window.gtag) window.gtag('event', 'email_click', { event_category: 'engagement', event_label: 'Mobil Top Bar Email' }); }} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = gold}
          onMouseLeave={e => e.currentTarget.style.color = '#fff'}
          >
            <span>📧</span>
            <span>info@ademtok.com</span>
          </a>
        </div>
      </div>

      <style>{`
        @media screen and (max-width: 768px) {
          #mobile-top-bar {
            display: flex !important;
          }
        }
        @media screen and (max-width: 900px) {
          #mobile-top-bar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

Object.assign(window, { MobileTopBar });
