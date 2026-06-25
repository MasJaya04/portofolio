import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Github = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const Linkedin = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[128px] -z-10 bg-[var(--color-accent-soft)]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-[128px] -z-10 bg-[var(--color-secondary-soft)]" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="mb-8 inline-block rounded-full border border-border bg-[var(--color-surface)] px-4 py-2 text-sm font-medium shadow-[var(--shadow-soft)] backdrop-blur-sm">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary-accent)] bg-clip-text text-transparent">
            Nurjaya
          </span>
          <br />
          Full Stack Programmer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground"
        >
          Membangun aplikasi web dan mobile end-to-end dengan fokus pada peningkatan efisiensi operasional dan pengalaman pengguna yang luar biasa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-medium text-background shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            Lihat Portfolio <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-border bg-[var(--color-surface)] px-8 py-4 font-medium backdrop-blur-sm transition-colors hover:bg-muted"
          >
            Hubungi Saya
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a
            href="https://github.com/MasJaya04"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent p-2 transition-colors hover:border-border hover:bg-[var(--color-surface)] hover:text-foreground"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nur-jaya-713682316/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent p-2 transition-colors hover:border-border hover:bg-[var(--color-surface)] hover:text-foreground"
          >
            <Linkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
