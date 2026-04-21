
const ProjectSlider = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const bg = tweaks?.bgColor || '#D8CEC2';

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const projects = [
    { title: 'Modern Konut Projesi', image: '#F5F3F0' },
    { title: 'Ticari Merkez Tasarımı', image: '#F5F3F0' },
    { title: 'Dekorasyon & Tadilat', image: '#F5F3F0' },
    { title: 'Dış Cephe Uygulaması', image: '#F5F3F0' },
    { title: 'İç Mekan Tasarımı', image: '#F5F3F0' },
  ];

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section style={{ background: '#F5F3F0', padding: '0', overflow: 'hidden' }} className="project-slider">
      <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 60vw, 500px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Slider Container */}
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {/* Slides */}
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: project.image,
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              {/* Project Title */}
              <div style={{
                background: 'rgba(0,0,0,0.6)',
                width: '100%',
                padding: '40px',
                textAlign: 'center',
              }}>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(24px, 4vw, 42px)',
                  fontWeight: 700,
                  color: '#fff',
                  margin: 0,
                  letterSpacing: 1,
                }}>
                  {project.title}
                </h2>
              </div>
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="slider-arrow slider-arrow-left"
            style={{
              position: 'absolute',
              left: 'clamp(12px, 3vw, 30px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              color: '#fff',
              width: 'clamp(40px, 10vw, 50px)',
              height: 'clamp(40px, 10vw, 50px)',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 'clamp(18px, 5vw, 28px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.target.style.background = gold; e.target.style.color = dark; }}
            onMouseLeave={e => { e.target.style.background = 'rgba(0,0,0,0.5)'; e.target.style.color = '#fff'; }}
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="slider-arrow slider-arrow-right"
            style={{
              position: 'absolute',
              right: 'clamp(12px, 3vw, 30px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              color: '#fff',
              width: 'clamp(40px, 10vw, 50px)',
              height: 'clamp(40px, 10vw, 50px)',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 'clamp(18px, 5vw, 28px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.target.style.background = gold; e.target.style.color = dark; }}
            onMouseLeave={e => { e.target.style.background = 'rgba(0,0,0,0.5)'; e.target.style.color = '#fff'; }}
          >
            ›
          </button>

          {/* Dots */}
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 12,
            zIndex: 10,
          }}>
            {projects.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? 32 : 12,
                  height: 5,
                  background: index === currentIndex ? gold : 'rgba(255,255,255,0.4)',
                  borderRadius: 3,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width: 640px) {
          .project-slider > div > div > div[style*="background"] {
            padding: 24px !important;
          }
          .project-slider h2 {
            font-size: clamp(18px, 4vw, 32px) !important;
          }
          .slider-arrow {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { ProjectSlider });
