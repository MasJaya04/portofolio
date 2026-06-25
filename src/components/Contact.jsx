import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const emailJsConfig = {
  serviceId: (import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '').trim(),
  templateId: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '').trim(),
  publicKey: (import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '').trim(),
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({
        type: 'error',
        message: 'Semua field wajib diisi.',
      });
      return;
    }

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus({
        type: 'error',
        message: 'Konfigurasi EmailJS belum lengkap.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({
      type: '',
      message: '',
    });

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setStatus({
        type: 'success',
        message: 'Pesan berhasil dikirim ke email Anda.',
      });
    } catch (error) {
      const errorMessage = typeof error?.text === 'string' && error.text
        ? error.text
        : typeof error?.message === 'string' && error.message
          ? error.message
          : 'Pesan gagal dikirim. Periksa konfigurasi EmailJS lalu coba lagi.';

      setStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border/50 bg-muted/10 py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Hubungi <span className="text-[var(--color-secondary-accent)]">Saya</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 md:col-span-2"
          >
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <div className="rounded-lg p-3 text-[var(--color-accent)] bg-[var(--color-accent-soft)]">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">nurjayapux@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <div className="rounded-lg p-3 text-[var(--color-secondary-accent)] bg-[var(--color-secondary-soft)]">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Lokasi</h3>
                <p className="text-sm text-muted-foreground">Bekasi, Jawa Barat</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <div className="rounded-lg p-3 text-[var(--color-success)] bg-[var(--color-success-soft)]">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Telepon / WhatsApp</h3>
                <p className="text-sm text-muted-foreground">0822-1052-5194</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl border border-border/60 bg-[var(--color-surface-strong)] p-8 shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Nama</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="rounded-lg border border-border bg-[var(--color-input)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Nama Anda" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="rounded-lg border border-border bg-[var(--color-input)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="email@contoh.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium">Subjek</label>
                <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} className="rounded-lg border border-border bg-[var(--color-input)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Penawaran Pekerjaan" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Pesan</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" className="resize-none rounded-lg border border-border bg-[var(--color-input)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Halo Nurjaya..."></textarea>
              </div>
              {status.message ? (
                <p className={status.type === 'success' ? 'text-sm text-[var(--color-success)]' : 'text-sm text-red-500'}>
                  {status.message}
                </p>
              ) : null}
              <button type="submit" disabled={isSubmitting} className="mt-2 rounded-lg bg-foreground py-4 font-semibold text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
