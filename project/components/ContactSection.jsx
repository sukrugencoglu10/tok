
const ContactSection = ({ tweaks }) => {
  const gold = tweaks?.accentColor || '#C9A96E';
  const dark = tweaks?.primaryColor || '#1C1C1E';
  const bg = tweaks?.bgColor || '#F8F6F2';

  const [form, setForm] = React.useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Ad soyad zorunludur';
    if (!form.phone.trim()) e.phone = 'Telefon zorunludur';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Geçerli e-posta giriniz';
    if (!form.service) e.service = 'Hizmet seçiniz';
    if (!form.message.trim()) e.message = 'Mesaj zorunludur';
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    // GA4 Event: Form Submission
    if (window.gtag) window.gtag('event', 'form_submission', { event_category: 'engagement', event_label: 'Keşif Talep Formu', form_name: 'free_inspection' });
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1800);
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '14px 16px', fontFamily: 'Inter, sans-serif', fontSize: 14,
    border: `1px solid ${errors[field] ? '#e05' : '#ddd'}`,
    background: '#fff', color: dark, outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  });

  const contacts = [
    { icon: '📞', label: 'Telefon', value: '+90 535 492 58 83\n+90 542 681 56 64', href: 'tel:+905354925883' },
    { icon: '📧', label: 'E-posta', value: 'info@ademtok.com\nbilgi@ademtok.com', href: 'mailto:info@ademtok.com' },
    { icon: '📍', label: 'Adres', value: 'Yenigun Mahallesi\n15 Temmuz Bulvarı No: 37\nAdapazarı / SAKARYA', href: 'https://maps.google.com' },
    { icon: '📠', label: 'Tel - Fax', value: '+90 264 274 41 41\n+90 544 810 06 56', href: 'tel:+902642744141' },
    { icon: '🕐', label: 'Çalışma Saatleri', value: 'Pzt–Cmt: 08:00–18:00\nPazar: Kapalı', href: null },
  ];

  return (
    <section id="contact" style={{ background: dark, padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label="İletişim" title="Projenizi Konuşalım" sub="Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin." gold={gold} dark="#fff" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, marginTop: 64 }} className="contact-grid">

          {/* Left — Contact info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(201,169,110,0.1)', border: `1px solid rgba(201,169,110,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: gold, marginBottom: 4 }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', lineHeight: 1.6, display: 'block', whiteSpace: 'pre-line' }}
                        onMouseEnter={e => e.currentTarget.style.color = gold}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                      >{c.value}</a>
                    ) : (
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, display: 'block', whiteSpace: 'pre-line' }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: 48 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: gold, marginBottom: 16 }}>Sosyal Medya</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((s, i) => (
                  <a key={i} href="#" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.borderColor = gold; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <SocialIcon name={s} color="rgba(255,255,255,0.7)" size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div style={{ background: 'rgba(201,169,110,0.1)', border: `1px solid ${gold}`, padding: 48, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, color: '#fff', margin: '0 0 12px' }}>Talebiniz Alındı!</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>En geç 24 saat içinde sizi arayacağız. Ücretsiz keşif için teşekkür ederiz.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',service:'',message:'' }); }} style={{ marginTop: 24, background: 'none', border: `1px solid ${gold}`, color: gold, fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', padding: '12px 28px', cursor: 'pointer' }}>Yeni Talep Gönder</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { key: 'name', label: 'Ad Soyad', placeholder: 'Adınız ve soyadınız', type: 'text' },
                  { key: 'phone', label: 'Telefon', placeholder: '+90 5XX XXX XX XX', type: 'tel' },
                  { key: 'email', label: 'E-posta', placeholder: 'ornek@email.com', type: 'email' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: errors[f.key] ? '#f05' : 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                      onChange={e => { setForm(v => ({ ...v, [f.key]: e.target.value })); setErrors(v => ({ ...v, [f.key]: null })); }}
                      style={inputStyle(f.key)} />
                    {errors[f.key] && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#f05', marginTop: 4 }}>{errors[f.key]}</div>}
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: errors.service ? '#f05' : 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 6 }}>Hizmet Türü</label>
                  <select value={form.service} onChange={e => { setForm(v => ({ ...v, service: e.target.value })); setErrors(v => ({ ...v, service: null })); }} style={{ ...inputStyle('service'), appearance: 'none' }}>
                    <option value="">Hizmet seçiniz...</option>
                    {['İnşaat', 'Dekorasyon', 'Tadilat', 'Dış Cephe', 'Ücretsiz Keşif', 'Diğer'].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.service && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#f05', marginTop: 4 }}>{errors.service}</div>}
                </div>
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: errors.message ? '#f05' : 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 6 }}>Mesaj</label>
                  <textarea rows={4} placeholder="Projeniz hakkında kısaca bilgi veriniz..." value={form.message}
                    onChange={e => { setForm(v => ({ ...v, message: e.target.value })); setErrors(v => ({ ...v, message: null })); }}
                    style={{ ...inputStyle('message'), resize: 'vertical', fontFamily: 'Inter, sans-serif' }} />
                  {errors.message && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#f05', marginTop: 4 }}>{errors.message}</div>}
                </div>
                <button type="submit" disabled={sending} style={{
                  background: sending ? '#a0845a' : gold, color: dark, border: 'none', cursor: sending ? 'wait' : 'pointer',
                  fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase',
                  padding: '18px 0', marginTop: 8, transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => { if (!sending) e.currentTarget.style.background = '#d4b77d'; }}
                onMouseLeave={e => { if (!sending) e.currentTarget.style.background = gold; }}
                >{sending ? 'Gönderiliyor...' : 'Ücretsiz Keşif Talep Et'}</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media(max-width: 640px) {
          #contact {
            padding: 60px 20px !important;
          }
          .contact-grid {
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

const SocialIcon = ({ name, color, size = 20 }) => {
  const icons = {
    Instagram: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill={color}/></svg>,
    Facebook: <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
    LinkedIn: <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 100-4 2 2 0 000 4z"/></svg>,
    YouTube: <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1C1C1E"/></svg>,
  };
  return icons[name] || null;
};

Object.assign(window, { ContactSection, SocialIcon });
