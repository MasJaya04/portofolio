import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

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
    <section id="projects" className="py-24 bg-muted/10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portofolio <span className="text-purple-400">Proyek</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Berikut adalah beberapa proyek utama yang pernah saya bangun, mencakup aplikasi enterprise, integrasi real-time, hingga sistem monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-border transition-colors flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
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
