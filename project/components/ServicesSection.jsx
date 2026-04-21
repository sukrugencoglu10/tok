
const ServicesSection = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const bg = tweaks?.bgColor || '#F8F6F2';

  const services = [
    {
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="5" y="20" width="30" height="16" rx="1" stroke={gold} strokeWidth="1.5"/><path d="M10 20V14a10 10 0 0120 0v6" stroke={gold} strokeWidth="1.5"/><rect x="17" y="26" width="6" height="10" fill={gold} opacity="0.3"/><line x1="14" y1="24" x2="14" y2="32" stroke={gold} strokeWidth="1.5"/><line x1="26" y1="24" x2="26" y2="32" stroke={gold} strokeWidth="1.5"/></svg>,
      title: 'İnşaat',
      desc: 'Depreme dayanıklı, modern mühendislik standartlarında konut ve ticari yapı inşaatı. Temel kazıdan anahtar teslime kadar tam hizmet.',
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="6" width="28" height="28" rx="2" stroke={gold} strokeWidth="1.5"/><path d="M6 14h28M14 6v28" stroke={gold} strokeWidth="1.5"/><circle cx="25" cy="25" r="5" stroke={gold} strokeWidth="1.5"/><path d="M25 22v3l2 2" stroke={gold} strokeWidth="1.2"/></svg>,
      title: 'Dekorasyon',
      desc: 'Kişiye özel modern iç mekan tasarımı. Renk danışmanlığı, mobilya seçimi, aydınlatma ve malzeme uygulamalarında tam çözüm.',
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke={gold} strokeWidth="1.5"/><path d="M20 13v7l5 3" stroke={gold} strokeWidth="1.5" strokeLinecap="round"/><circle cx="20" cy="20" r="2" fill={gold}/></svg>,
      title: 'Ücretsiz Keşif',
      desc: 'Uzman ekibimiz yerinde ölçüm yaparak ihtiyaçlarınızı analiz eder ve şeffaf fiyatlandırma ile kapsamlı proje teklifi sunar.',
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 32L20 8l12 24H8z" stroke={gold} strokeWidth="1.5"/><line x1="14" y1="22" x2="26" y2="22" stroke={gold} strokeWidth="1.5"/><line x1="20" y1="16" x2="20" y2="28" stroke={gold} strokeWidth="1.5" strokeDasharray="2 2"/></svg>,
      title: 'Tadilat',
      desc: 'Mevcut yapıların yenilenmesi, güçlendirme ve modernizasyonu. Konut ve iş yeri tadilatında hızlı ve temiz çalışma garantisi.',
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="10" width="28" height="22" rx="2" stroke={gold} strokeWidth="1.5"/><path d="M13 10V7M27 10V7" stroke={gold} strokeWidth="1.5" strokeLinecap="round"/><rect x="11" y="18" width="8" height="7" rx="1" fill={gold} opacity="0.2" stroke={gold} strokeWidth="1"/><rect x="21" y="18" width="8" height="7" rx="1" fill={gold} opacity="0.2" stroke={gold} strokeWidth="1"/></svg>,
      title: 'Proje Yönetimi',
      desc: 'Süreç takibi, tedarikçi yönetimi ve kalite kontrol ile projenizi zamanında ve bütçe dahilinde teslim ediyoruz.',
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 6L34 14v12L20 34 6 26V14L20 6z" stroke={gold} strokeWidth="1.5"/><path d="M20 6v28M6 14l14 8 14-8" stroke={gold} strokeWidth="1.2" strokeDasharray="3 2"/></svg>,
      title: 'Dış Cephe',
      desc: 'Bina cephe kaplama, ısı yalıtımı, ses yalıtımı ve estetik dönüşüm uygulamaları. ETICS sistemi ve mantolama uzmanı.',
    },
  ];

  const [hovered, setHovered] = React.useState(null);
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} style={{ background: bg, padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="Hizmetlerimiz" title="Uçtan Uca İnşaat & Tasarım" sub="Temel inşaattan iç dekorasyona, her aşamada yanınızdayız." gold={gold} dark={dark} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginTop: 60 }} className="svc-grid">
          {services.map((s, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: '#fff', padding: '48px 36px',
                borderBottom: hovered === i ? `3px solid ${gold}` : '3px solid transparent',
                boxShadow: hovered === i ? '0 20px 60px rgba(0,0,0,0.1)' : '0 2px 20px rgba(0,0,0,0.04)',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                opacity: visible ? 1 : 0,
                transitionDelay: visible ? `${i * 0.08}s` : '0s',
                cursor: 'pointer',
              }}>
              <div style={{ marginBottom: 24 }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: dark, margin: '0 0 12px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.8, margin: '0 0 24px' }}>{s.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#8B7A3E', fontWeight: 700 }}>
                Detaylı Bilgi
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B7A3E" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width: 1024px) {
          #services .svc-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media(max-width: 768px) {
          #services .svc-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media(max-width: 640px) {
          #services {
            padding: 40px 16px !important;
          }
          #services .svc-grid > div {
            padding: 32px 20px !important;
          }
          #services h3 {
            font-size: 18px !important;
          }
          #services p {
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
};

const SectionHeader = ({ label, title, sub, gold, dark, center = true }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 8 }}>
    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#8B7A3E', marginBottom: 16, fontWeight: 700 }}>{label}</div>
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: dark, margin: '0 0 16px', lineHeight: 1.2 }}>{title}</h2>
    {sub && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#888', maxWidth: 560, margin: center ? '0 auto' : '0', lineHeight: 1.7 }}>{sub}</p>}
    <div style={{ width: 48, height: 2, background: '#8B7A3E', margin: center ? '24px auto 0' : '24px 0 0' }} />
  </div>
);

Object.assign(window, { ServicesSection, SectionHeader });
