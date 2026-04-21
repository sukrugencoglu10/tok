
const FooterSection = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#F5F3F0', borderTop: '1px solid rgba(201,169,110,0.2)', padding: '64px 40px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 1.5fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(0,0,0,0.1)' }} className="footer-grid">

          {/* Col 1 — Logo + tagline */}
          <div>
            <img src="/image/logo.png" alt="Adem Tok Logo" style={{ height: 50, objectFit: 'contain', marginBottom: 20 }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#666', lineHeight: 1.8, marginBottom: 24, maxWidth: 260 }}>
              Tasarım & Sağlamlık — Kaliteden Ödün Vermeden. 1970'den bu yana İstanbul'un güvenilir inşaat partneri.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((s, i) => (
                <a key={i} href="#" style={{ width: 34, height: 34, background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.background = gold}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                ><SocialIcon name={s} color="#1C1C1E" size={14} /></a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: gold, marginBottom: 20, fontWeight: 700 }}>Hızlı Linkler</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['hero','Ana Sayfa'],['services','Hizmetler'],['projects','Projeler'],['catalog','Katalog'],['about','Hakkımızda'],['contact','İletişim']].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#666', textAlign: 'left', padding: 0, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => e.currentTarget.style.color = gold}
                  onMouseLeave={e => e.currentTarget.style.color = '#666'}
                >
                  <span style={{ color: gold, opacity: 0.5 }}>›</span> {label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: gold, marginBottom: 20, fontWeight: 700 }}>Hizmetler</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['İnşaat','Dekorasyon','Tadilat','Dış Cephe','Proje Yönetimi','Ücretsiz Keşif'].map(s => (
                <button key={s} onClick={() => scrollTo('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#666', textAlign: 'left', padding: 0, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => e.currentTarget.style.color = gold}
                  onMouseLeave={e => e.currentTarget.style.color = '#666'}
                >
                  <span style={{ color: gold, opacity: 0.5 }}>›</span> {s}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: gold, marginBottom: 20, fontWeight: 700 }}>İletişim</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '📞', text: '+90 212 123 45 67' },
                { icon: '📧', text: 'info@ademtok.com.tr' },
                { icon: '📍', text: 'Levent, Beşiktaş\nİstanbul' },
                { icon: '🕐', text: 'Pzt–Cmt 08:00–18:00' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 13 }}>{c.icon}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#666', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 12, flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#999' }}>
            © 2024 Adem Tok İnşaat ve Dekorasyon. Tüm hakları saklıdır.
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#999' }}>
            Designed with <span style={{ color: gold }}>♥</span> — İstanbul
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media(max-width: 640px) {
          footer {
            padding: 40px 20px 0 !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding-bottom: 24px !important;
          }
          .footer-grid > div > div:nth-child(2) {
            gap: 6px !important;
          }
          .footer-grid > div:nth-child(2) > div:nth-child(2),
          .footer-grid > div:nth-child(3) > div:nth-child(2) {
            gap: 6px !important;
          }
          .footer-grid > div:nth-child(4) > div:nth-child(2) {
            gap: 8px !important;
          }
        }
      `}</style>
    </footer>
  );
};
Object.assign(window, { FooterSection });
