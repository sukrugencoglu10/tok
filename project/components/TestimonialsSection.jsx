
const TestimonialsSection = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const bg = tweaks?.bgColor || '#F8F6F2';
  const [idx, setIdx] = React.useState(0);

  const testimonials = [
    { name: 'Mehmet Yılmaz', project: 'Villa İnşaatı — Sarıyer', stars: 5, text: 'Adem Tok ekibi hayallerimizin ötesinde bir villa teslim etti. Süreç boyunca her aşamada bilgilendirildik, hiçbir sürprizle karşılaşmadık. 50 yıllık deneyim her detayda hissediliyor.' },
    { name: 'Ayşe Kaya', project: 'Daire Tadilat — Beşiktaş', stars: 5, text: 'Komple daire tadilatımızı 6 haftada teslim ettiler. Temiz çalışma, kaliteli malzeme ve nezaket... Her şey mükemmeldi. Tüm arkadaşlarıma kesinlikle tavsiye ediyorum.' },
    { name: 'Emre Demir', project: 'Ofis Dekorasyonu — Maslak', stars: 5, text: 'Yeni ofisimizin tasarımı ve uygulaması için Adem Tok\'u seçtik. Sunulan 3D tasarımlar bizim görsel hayal gücümüzü aştı. Rakip tekliflerle kıyaslanmaz profesyonellik.' },
    { name: 'Fatma Arslan', project: 'Mutfak Yenileme — Kadıköy', stars: 5, text: 'Mutfağımız tanınmaz hale geldi! Ölçülere göre özel üretim dolaplar, modern aydınlatma ve kaliteli tezgah. Fiyat-performans olarak da çok başarılar.' },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" style={{ background: bg, padding: '100px 40px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader label="Referanslar" title="Müşterilerimiz Ne Diyor?" gold={gold} dark={dark} />

        <div style={{ marginTop: 60, position: 'relative', minHeight: 280 }}>
          {testimonials.map((t, i) => (
            <div key={i} onClick={() => setIdx((i + 1) % testimonials.length)} style={{
              position: i === 0 ? 'relative' : 'absolute',
              top: 0, left: 0, right: 0,
              opacity: idx === i ? 1 : 0,
              transform: idx === i ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
              pointerEvents: idx === i ? 'all' : 'none',
              background: '#fff',
              padding: '48px 52px',
              boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
              cursor: 'pointer',
            }}>
              {/* Quote mark */}
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 80, color: gold, opacity: 0.15, lineHeight: 0.8, marginBottom: 20, userSelect: 'none' }}>"</div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {[...Array(t.stars)].map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill={gold}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#555', lineHeight: 1.85, margin: '0 0 32px', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: dark, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: gold, fontWeight: 700 }}>{t.name[0]}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 700, color: dark, letterSpacing: 0.5 }}>{t.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#999', marginTop: 2 }}>{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 32, alignItems: 'center' }}>
          {testimonials.map((_, i) => (
            <span key={i} onClick={() => setIdx(i)} style={{
              display: 'inline-block',
              width: idx === i ? 24 : 6, height: 6, borderRadius: 3,
              background: idx === i ? gold : '#ccc',
              cursor: 'pointer',
              transition: 'all 0.3s',
              flexShrink: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { TestimonialsSection });
