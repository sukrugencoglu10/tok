
const StatsBar = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const stats = [
    { value: 50, suffix: '+', label: 'Yıl Deneyim' },
    { value: 200, suffix: '+', label: 'Tamamlanan Proje' },
    { value: 100, suffix: '%', label: 'Müşteri Memnuniyeti' },
    { value: 50, suffix: '+', label: 'Uzman Ekip' },
  ];
  const [counts, setCounts] = React.useState(stats.map(() => 0));
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        stats.forEach((s, i) => {
          let start = 0;
          const duration = 1800;
          const step = s.value / (duration / 16);
          const timer = setInterval(() => {
            start = Math.min(start + step, s.value);
            setCounts(prev => { const n = [...prev]; n[i] = Math.floor(start); return n; });
            if (start >= s.value) clearInterval(timer);
          }, 16);
        });
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  return (
    <section id="stats" ref={ref} style={{ background: '#5D4B3C', padding: '4px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            textAlign: 'center', padding: '32px 20px',
            borderRight: i < 3 ? '1px solid rgba(201,169,110,0.2)' : 'none',
            position: 'relative',
          }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px,5vw,58px)', fontWeight: 700, color: gold, lineHeight: 1 }}>
              {counts[i]}{s.suffix}
            </div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:700px){
          #stats > div > div { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
};
Object.assign(window, { StatsBar });
