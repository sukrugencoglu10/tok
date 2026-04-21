
const GallerySection = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const bg = tweaks?.bgColor || '#F8F6F2';
  const [filter, setFilter] = React.useState('Tümü');
  const [lightbox, setLightbox] = React.useState(null);
  const [lbIdx, setLbIdx] = React.useState(0);

  const tabs = ['Tümü', 'Konut', 'Ticari', 'Tadilat', 'Dekorasyon'];

  const projects = [
    { title: 'Boğaz Manzaralı Villa', location: 'Sarıyer, İstanbul', year: 2023, category: 'Konut', h: 320, color1: '#2a3040', color2: '#3a4050' },
    { title: 'Loft Ofis Tasarımı', location: 'Maslak, İstanbul', year: 2023, category: 'Ticari', h: 240, color1: '#1a2030', color2: '#2a3040' },
    { title: 'Klasik Daire Tadilat', location: 'Nişantaşı, İstanbul', year: 2022, category: 'Tadilat', h: 280, color1: '#302a20', color2: '#403a30' },
    { title: 'Modern Mutfak', location: 'Beşiktaş, İstanbul', year: 2023, category: 'Dekorasyon', h: 240, color1: '#203028', color2: '#304038' },
    { title: 'Rezidans Kompleksi', location: 'Ataşehir, İstanbul', year: 2022, category: 'Konut', h: 260, color1: '#282030', color2: '#383040' },
    { title: 'Butik Otel Lobi', location: 'Sultanahmet, İstanbul', year: 2021, category: 'Ticari', h: 300, color1: '#302018', color2: '#402810' },
    { title: 'Bahçe Evi Yenileme', location: 'Büyükada, İstanbul', year: 2023, category: 'Tadilat', h: 220, color1: '#183020', color2: '#284030' },
    { title: 'Yatak Odası Tasarımı', location: 'Kadıköy, İstanbul', year: 2022, category: 'Dekorasyon', h: 260, color1: '#201828', color2: '#302238' },
  ];

  const filtered = filter === 'Tümü' ? projects : projects.filter(p => p.category === filter);

  const openLb = (idx) => { setLbIdx(idx); setLightbox(filtered); };
  const prevLb = () => setLbIdx(i => (i - 1 + lightbox.length) % lightbox.length);
  const nextLb = () => setLbIdx(i => (i + 1) % lightbox.length);

  React.useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') prevLb();
      if (e.key === 'ArrowRight') nextLb();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, lbIdx]);

  return (
    <section id="projects" style={{ background: bg, padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="Projelerimiz" title="Tamamlanan Projeler" sub="Her proje bir hikaye — müşterilerimizin hayallerini gerçeğe dönüştürdüğümüz eserler." gold={gold} dark={dark} />

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginTop: 48, marginBottom: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              background: filter === t ? gold : 'transparent',
              color: filter === t ? dark : '#888',
              border: `1px solid ${filter === t ? gold : '#ddd'}`,
              fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2,
              textTransform: 'uppercase', fontWeight: 700, padding: '10px 24px',
              cursor: 'pointer', transition: 'all 0.3s',
            }}>{t}</button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div style={{ columns: '3 300px', gap: 12 }}>
          {filtered.map((p, i) => (
            <div key={p.title + i} style={{ breakInside: 'avoid', marginBottom: 12, cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              onClick={() => openLb(i)}
              onMouseEnter={e => e.currentTarget.querySelector('.proj-overlay').style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.querySelector('.proj-overlay').style.opacity = '0'}
            >
              <ProjectThumb project={p} gold={gold} />
              <div className="proj-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(transparent 30%, rgba(0,0,0,0.85))',
                opacity: 0, transition: 'opacity 0.35s',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px 20px',
              }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, color: gold, textTransform: 'uppercase', marginBottom: 6 }}>{p.category}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: '#fff', marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>{p.location} · {p.year}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, color: gold, display: 'flex', alignItems: 'center', gap: 6 }}>
                  PROJEYİ İNCELE <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', padding: '60px 20px' }}
          onClick={() => setLightbox(null)}>
          <button onClick={e => { e.stopPropagation(); prevLb(); }} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: 48, height: 48, fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <div style={{ maxWidth: 1000, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32 }} onClick={e => e.stopPropagation()}>
            <div style={{ background: lightbox[lbIdx].color1, minHeight: 500, position: 'relative', overflow: 'hidden' }}>
              <ProjectThumb project={lightbox[lbIdx]} gold={gold} full />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 3, color: gold, textTransform: 'uppercase' }}>{lightbox[lbIdx].category}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: '#fff', margin: 0 }}>{lightbox[lbIdx].title}</h3>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                <div>📍 {lightbox[lbIdx].location}</div>
                <div>📅 {lightbox[lbIdx].year}</div>
                <div>🏷 {lightbox[lbIdx].category}</div>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                Bu proje, müşterimizin vizyonunu hayata geçirmek için tasarlanmıştır. Kaliteli malzemeler ve ustalıkla tamamlanan bu eser, Adem Tok farkını yansıtmaktadır.
              </p>
              <button style={{ background: gold, color: dark, border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, padding: '14px 0', alignSelf: 'flex-start', paddingRight: 32, paddingLeft: 32 }}>
                Benzer Proje İste
              </button>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{lbIdx + 1} / {lightbox.length}</div>
            </div>
          </div>
          <button onClick={e => { e.stopPropagation(); nextLb(); }} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: 48, height: 48, fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: 28, cursor: 'pointer' }}>✕</button>
        </div>
      )}
    </section>
  );
};

const ProjectThumb = ({ project: p, gold, full }) => (
  <svg width="100%" height={full ? '100%' : p.h} style={{ display: 'block', minHeight: full ? 500 : p.h }} viewBox={`0 0 400 ${p.h || 300}`} preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id={`pg${p.title.replace(/\s/g,'')}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={p.color1}/>
        <stop offset="100%" stopColor={p.color2}/>
      </linearGradient>
    </defs>
    <rect width="400" height={p.h || 300} fill={`url(#pg${p.title.replace(/\s/g,'')})`}/>
    {[0,1,2,3,4,5].map(i => <rect key={i} x={40+i*60} y={20} width={40} height={p.h ? p.h-40 : 260} fill={gold} opacity="0.04" rx="2"/>)}
    {[0,1,2,3].map(i => <rect key={i} x={0} y={i * (p.h||300)/4} width={400} height={1} fill="rgba(255,255,255,0.05)"/>)}
    <text x="50%" y="48%" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="14" fill="rgba(255,255,255,0.25)">{p.title}</text>
    <text x="50%" y="58%" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="7" fill={gold} opacity="0.4" letterSpacing="2">{p.location?.toUpperCase()}</text>
  </svg>
);

Object.assign(window, { GallerySection });
