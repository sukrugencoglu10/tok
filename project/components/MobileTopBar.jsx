
const MobileTopBar = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const TOPBAR_BG = '#2D2A26';

  return (
    <>
      <div id="top-bar" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100,
        background: TOPBAR_BG,
        borderBottom: `1px solid rgba(201,169,110,0.25)`,
        height: 36,
        display: 'flex', alignItems: 'center',
        padding: '0 40px',
      }}>
        {/* Desktop: sağa hizalı */}
        <div className="topbar-desktop" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="tel:+905354925883"
            onClick={() => { if (window.gtag) window.gtag('event', 'phone_click', { event_category: 'engagement', event_label: 'Top Bar Telefon' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = gold}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill={gold}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            +90 535 492 58 83
          </a>
          <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
          <a href="mailto:info@ademtok.com"
            onClick={() => { if (window.gtag) window.gtag('event', 'email_click', { event_category: 'engagement', event_label: 'Top Bar Email' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = gold}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill={gold}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            info@ademtok.com
          </a>
        </div>

        {/* Mobile: ortalı */}
        <div className="topbar-mobile" style={{ display: 'none', width: '100%', justifyContent: 'center', gap: 20 }}>
          <a href="tel:+905354925883"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill={gold}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            +90 535 492 58 83
          </a>
          <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.15)', alignSelf: 'center' }} />
          <a href="mailto:info@ademtok.com"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill={gold}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            info@ademtok.com
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .topbar-desktop { display: none !important; }
          .topbar-mobile { display: flex !important; }
          #top-bar { padding: 0 16px; }
        }
      `}</style>
    </>
  );
};

Object.assign(window, { MobileTopBar });
