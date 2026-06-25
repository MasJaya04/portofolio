import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aplikasi KPI & Asset Perusahaan',
    description: 'Aplikasi berbasis Web dan Android untuk manajemen aset dan metrik KPI. Terintegrasi dengan API pihak ketiga seperti GreatDay dan sistem Payment Gateway.',
    tags: ['React JS', 'Express JS', 'React Native', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Affiliate Monitoring System',
    description: 'Aplikasi untuk analisis profit dengan fitur unggulan parsing data Excel secara mandiri tanpa bergantung pada dependensi API eksternal.',
    tags: ['Node.js', 'React', 'Data Parsing'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Sistem Pemesanan Makanan Real-time',
    description: 'Aplikasi web pemesanan makanan dengan pembaruan real-time menggunakan Socket.IO dan integrasi API Text-to-Speech untuk aksesibilitas.',
    tags: ['Laravel', 'Socket.IO', 'MySQL', 'TTS API'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Aplikasi Trading Dashboard',
    description: 'Sistem pemantauan harga pasar yang mengintegrasikan data pergerakan nilai secara real-time untuk memudahkan analisis.',
    tags: ['CodeIgniter 3', 'Real-time API', 'PHP'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/50 bg-muted/10 py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Portofolio <span className="text-[var(--color-secondary-accent)]">Proyek</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Berikut adalah beberapa proyek utama yang pernah saya bangun, mencakup aplikasi enterprise, integrasi real-time, hingga sistem monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-[var(--color-surface)] shadow-[var(--shadow-soft)] backdrop-blur-sm transition-colors hover:bg-[var(--color-surface-strong)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-6 flex-grow text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2.5 py-1 text-xs font-medium text-[var(--color-accent)] border-[var(--color-accent-border)] bg-[var(--color-accent-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
