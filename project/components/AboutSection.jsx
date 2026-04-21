
const AboutSection = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const bg = tweaks?.bgColor || '#F8F6F2';

  const timeline = [
    { year: '1970', title: 'Kuruluş', desc: 'Kemal Tok tarafından İstanbul\'da küçük bir inşaat atölyesi olarak kuruldu.' },
    { year: '1985', title: 'Büyüme', desc: 'İlk büyük konut projesiyle şirket kapasitesi ve ekip büyüklüğü ikiye katlandı.' },
    { year: '2000', title: 'Teknoloji', desc: 'CAD tasarım sistemleri ve modern inşaat teknolojileri bünyeye entegre edildi.' },
    { year: '2010', title: 'Ödüller', desc: 'İstanbul İnşaat Sektörü\'nde "Yılın Firması" ödülüne layık görüldü.' },
    { year: '2020', title: 'Dijital', desc: '3D modelleme, sanal tur ve dijital proje yönetimi platformlarına geçiş.' },
    { year: '2024', title: 'Bugün', desc: '50+ yıllık deneyim, 200+ tamamlanan proje, İstanbul\'un güvenilir inşaat partneri.' },
  ];

  const [activeYear, setActiveYear] = React.useState(0);
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ background: dark, padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left — Story */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.8s ease' }}>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: gold, marginBottom: 16, fontWeight: 700 }}>Hakkımızda</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#fff', margin: '0 0 32px', lineHeight: 1.2 }}>
              Yarım Asırlık<br/><em style={{ color: gold }}>Güven & Kalite</em>
            </h2>
            <div style={{ width: 48, height: 2, background: gold, marginBottom: 32 }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, marginBottom: 24 }}>
              1970'de Kemal Tok tarafından İstanbul'da kurulan Adem Tok İnşaat ve Dekorasyon, bugün 50 yılı aşkın deneyimiyle İstanbul'un köklü ve güvenilir inşaat firmalarından biri haline gelmiştir.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, marginBottom: 40 }}>
              Depreme dayanıklı yapı anlayışı, modern iç mekan tasarımı ve müşteri odaklı yaklaşımımızla konut ve ticari projelerde fark yaratıyoruz. Her projemizde kaliteden ödün vermeden, zamanında ve bütçe dahilinde teslimat ilkemizi koruyoruz.
            </p>

            {/* Vision quote */}
            <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 28, marginBottom: 40 }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontStyle: 'italic', color: '#fff', lineHeight: 1.7, margin: '0 0 12px' }}>
                "Tasarım ve sağlamlık arasındaki dengeyi korumak, 50 yıldır bizi farklı kılan temel felsefemizdir."
              </p>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2, color: gold, textTransform: 'uppercase' }}>— Kemal Tok, Kurucu</div>
            </div>

            {/* Values */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[['Kalite', 'EN ISO 9001 sertifikalı süreçler'],['Güven','50 yılda sıfır müşteri şikayeti politikası'],['Hız','Zamanında teslimat garantisi'],['Estetik','Ödüllü tasarım yaklaşımı']].map(([t,d],i) => (
                <div key={i} style={{ borderTop: `1px solid rgba(201,169,110,0.2)`, paddingTop: 16 }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, color: gold, marginBottom: 6, letterSpacing: 1 }}>{t}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.8s ease 0.2s' }}>
            <div style={{ position: 'relative', paddingLeft: 40 }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', left: 12, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, ${gold}, rgba(201,169,110,0.1))` }} />

              {timeline.map((t, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: 36, cursor: 'pointer' }}
                  onClick={() => setActiveYear(i)}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: -35, top: 4,
                    width: 10, height: 10, borderRadius: '50%',
                    background: activeYear === i ? gold : 'rgba(201,169,110,0.3)',
                    border: `2px solid ${activeYear === i ? gold : 'rgba(201,169,110,0.3)'}`,
                    transition: 'all 0.3s',
                    boxShadow: activeYear === i ? `0 0 12px ${gold}` : 'none',
                  }} />
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 6 }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 700, color: activeYear === i ? gold : 'rgba(201,169,110,0.4)', transition: 'color 0.3s', lineHeight: 1 }}>{t.year}</span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: activeYear === i ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }}>{t.title}</span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0, maxHeight: activeYear === i ? '80px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#about .grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
};
Object.assign(window, { AboutSection });
