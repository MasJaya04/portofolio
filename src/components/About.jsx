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
    <section id="about" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tentang <span className="text-blue-400">Saya</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Saya adalah seorang Full Stack Developer yang berpengalaman membangun aplikasi web dan mobile end-to-end. Memiliki latar belakang kuat di bidang Infrastruktur IT dan Pendidikan Informatika (D3 Manajemen Informatika dari STMIK Bani Saleh, 2022).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Saya menguasai seluruh siklus pengembangan perangkat lunak (SDLC), mulai dari perancangan arsitektur database, integrasi sistem real-time, hingga deployment ke production. Fokus utama saya adalah menciptakan solusi teknologi yang dapat meningkatkan efisiensi operasional perusahaan.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Selain di dunia development, saya juga memiliki pengalaman mengelola infrastruktur jaringan sekolah (Mikrotik, Server) dan pernah menjadi pembina/pelatih Robotic yang berhasil membawa tim meraih Juara 1 tingkat sekolah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors"
                >
                  <Icon className="text-blue-400 mb-4" size={32} />
                  <h3 className="font-semibold mb-2 text-sm">{skill.name}</h3>
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
