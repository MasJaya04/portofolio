import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Award, Cpu } from 'lucide-react';

const skills = [
  { name: 'Web & Mobile Dev', icon: Layout, desc: 'React JS, React Native, Express JS, Laravel, CodeIgniter, Alpine JS' },
  { name: 'Backend & DB', icon: Database, desc: 'PostgreSQL, MySQL, Sequelize ORM, REST API, Socket.IO' },
  { name: 'Programming Languages', icon: Code2, desc: 'JavaScript (ES6+), PHP, Python' },
  { name: 'IT Infrastructure', icon: Server, desc: 'Mikrotik, LAN/WAN, Server Local, Hardware Troubleshooting' },
  { name: 'IoT & Robotics', icon: Cpu, desc: 'Sensor, Aktuator, Logika Program, Mikrokontroler' },
  { name: 'Achievements', icon: Award, desc: 'Juara 1 Lomba Robotic, Juara 2 Web Design, Oracle DB Basic' },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border/50 bg-background py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Tentang <span className="text-[var(--color-accent)]">Saya</span>
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Saya adalah seorang Full Stack Developer yang berpengalaman membangun aplikasi web dan mobile end-to-end. Memiliki latar belakang kuat di bidang Infrastruktur IT dan Pendidikan Informatika (D3 Manajemen Informatika dari STMIK Bani Saleh, 2022).
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Saya menguasai seluruh siklus pengembangan perangkat lunak (SDLC), mulai dari perancangan arsitektur database, integrasi sistem real-time, hingga deployment ke production. Fokus utama saya adalah menciptakan solusi teknologi yang dapat meningkatkan efisiensi operasional perusahaan.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Selain di dunia development, saya juga memiliki pengalaman mengelola infrastruktur jaringan sekolah (Mikrotik, Server) dan pernah menjadi pembina/pelatih Robotic yang berhasil membawa tim meraih Juara 1 tingkat sekolah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-border/60 bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm transition-colors hover:bg-[var(--color-surface-strong)]"
                >
                  <Icon className="mb-4 text-[var(--color-accent)]" size={32} />
                  <h3 className="mb-2 text-sm font-semibold">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground">{skill.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
