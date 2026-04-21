
const CatalogSection = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const bg = tweaks?.bgColor || '#F8F6F2';
  const [filter, setFilter] = React.useState('Tümü');
  const [modal, setModal] = React.useState(null);

  const tabs = ['Tümü', 'İç Mekan', 'Dış Mekan', 'Özel Projeler'];

  const catalogs = [
    { title: 'AdemTok Ana Katalog', subtitle: 'Siyah Kapak — 2024', category: 'Tümü', pages: 120, featured: true, color: '#1C1C1E', accent: gold },
    { title: 'Banyo Koleksiyonu', subtitle: 'Modern & Klasik', category: 'İç Mekan', pages: 48, color: '#2a3a4a', accent: '#a8c4d4' },
    { title: 'Mutfak Tasarımları', subtitle: 'Fonksiyonel Estetik', category: 'İç Mekan', pages: 56, color: '#3a2a1a', accent: '#d4a88a' },
    { title: 'Salon & Yaşam', subtitle: 'Premium İç Mekan', category: 'İç Mekan', pages: 64, color: '#2a3a2a', accent: '#a8d4a8' },
    { title: 'Dış Cephe Sistemleri', subtitle: 'ETICS & Kaplama', category: 'Dış Mekan', pages: 40, color: '#2a2a3a', accent: '#a8a8d4' },
    { title: 'Peyzaj & Bahçe', subtitle: 'Dış Mekan Tasarımı', category: 'Dış Mekan', pages: 36, color: '#1a3a2a', accent: '#88c4a8' },
    { title: 'Villa Projeleri', subtitle: 'Özel Tasarım', category: 'Özel Projeler', pages: 80, color: '#3a1a1a', accent: '#d4a8a8' },
    { title: 'Kurumsal Mekanlar', subtitle: 'Ofis & Ticari', category: 'Özel Projeler', pages: 52, color: '#1a1a3a', accent: '#a8a8e4', hidden: true },
  ];

  const filtered = (filter === 'Tümü' ? catalogs : catalogs.filter(c => c.category === filter || c.featured)).filter(c => !c.hidden);

  return (
    <section id="catalog" style={{ background: dark, padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="Kataloglarımız" title="Ürün & Proje Katalogları" sub="Tüm hizmetlerimizi ve ürün seçkimizi detaylı kataloglarımızda inceleyin." gold={gold} dark="#fff" />

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginTop: 48, marginBottom: 48, flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              background: filter === t ? gold : 'transparent',
              color: filter === t ? dark : 'rgba(255,255,255,0.6)',
              border: `1px solid ${filter === t ? gold : 'rgba(255,255,255,0.2)'}`,
              fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2,
              textTransform: 'uppercase', fontWeight: 700, padding: '10px 24px',
              cursor: 'pointer', transition: 'all 0.3s',
            }}>{t}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="cat-grid">
          {filtered.map((c, i) => (
            <div key={i} style={{
              gridColumn: c.featured ? 'span 2' : 'span 1',
              gridRow: c.featured ? 'span 1' : 'span 1',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              background: c.color,
              aspectRatio: c.featured ? '2/1.1' : '1/1.3',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}
            onClick={() => setModal(c)}
            onMouseEnter={e => { e.currentTarget.querySelector('.cat-overlay').style.opacity = '1'; }}
            onMouseLeave={e => { e.currentTarget.querySelector('.cat-overlay').style.opacity = '0'; }}
            >
              <CatalogCover cat={c} gold={gold} />
              <div className="cat-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0.7)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16,
                opacity: 0, transition: 'opacity 0.3s',
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: '#fff', textAlign: 'center', padding: '0 20px' }}>{c.title}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{c.pages} Sayfa</div>
                <button style={{ background: gold, color: dark, border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, padding: '10px 24px' }}>
                  Katalog İncele
                </button>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '24px 20px 20px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: c.accent, marginBottom: 4 }}>{c.category === 'Tümü' ? 'Ana Katalog' : c.category}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: c.featured ? 20 : 15, fontWeight: 700, color: '#fff' }}>{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}
          onClick={() => setModal(null)}>
          <div style={{ background: '#1a1a1c', maxWidth: 700, width: '100%', padding: 48, position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: 24, cursor: 'pointer' }}>✕</button>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 3, color: gold, textTransform: 'uppercase', marginBottom: 12 }}>Katalog Önizleme</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: '#fff', margin: '0 0 8px' }}>{modal.title}</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>{modal.subtitle} · {modal.pages} Sayfa</p>
            <div style={{ background: modal.color, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
              <CatalogCover cat={modal} gold={gold} />
              <div style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>PDF Önizleme Alanı<br/>Katalog dosyası yüklendiğinde burada görünür</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{ flex: 1, background: gold, color: dark, border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, padding: '14px 0' }}>
                PDF İndir
              </button>
              <button style={{ flex: 1, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', padding: '14px 0' }}>
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @media(max-width: 1024px) {
          #catalog .cat-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media(max-width: 800px) {
          #catalog .cat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #catalog {
            padding: 60px 20px !important;
          }
        }
        @media(max-width: 640px) {
          #catalog .cat-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          #catalog {
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

const CatalogCover = ({ cat, gold }) => (
  <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="300" fill={cat.color}/>
    <rect x="30" y="30" width="340" height="240" fill="none" stroke={cat.accent} strokeWidth="0.5" opacity="0.4"/>
    <rect x="40" y="40" width="320" height="220" fill="none" stroke={cat.accent} strokeWidth="0.3" opacity="0.2"/>
    {[0,1,2,3,4].map(i => <line key={i} x1="0" y1={60*i} x2="400" y2={60*i} stroke={cat.accent} strokeWidth="0.3" opacity="0.1"/>)}
    <text x="50%" y="42%" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="18" fill="white" fontWeight="700">{cat.title}</text>
    <text x="50%" y="55%" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="8" fill={cat.accent} letterSpacing="3">{cat.subtitle?.toUpperCase()}</text>
    <line x1="160" y1="165" x2="240" y2="165" stroke={cat.accent} strokeWidth="1"/>
    <text x="50%" y="78%" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="2">ADEM TOK İNŞAAT</text>
  </svg>
);

Object.assign(window, { CatalogSection });
