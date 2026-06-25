import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Web Developer',
    company: 'Naturalva Herba Indonesia | Cikarang',
    date: 'Sep 2025 - Sekarang',
    description: 'Mengembangkan Aplikasi KPI & Asset Perusahaan berbasis Web dan Android (React JS, Express JS, React Native). Mengintegrasikan API pihak ketiga (GreatDay, Payment Gateway) dan membangun sistem otentikasi JWT & PostgreSQL.',
    type: 'work',
  },
  {
    id: 2,
    title: 'Guru Informatika & IT Support',
    company: 'SMA YADIKA 8 Jatimulya | Bekasi',
    date: 'Jul 2022 - Sep 2025',
    description: 'Mengelola infrastruktur jaringan sekolah (Mikrotik, Router, Switch). Memelihara perangkat keras dan server lokal untuk sistem ujian online. Mengajar kurikulum Informatika berfokus pada literasi digital.',
    type: 'work',
  },
  {
    id: 3,
    title: 'Pelatih Robotic',
    company: 'SMA YADIKA 8 Jatimulya | Bekasi',
    date: 'Jul 2022 - Sep 2025',
    description: 'Mengajar konsep dasar robotic dan coding (sensor, aktuator). Membimbing siswa dalam perakitan robot sederhana hingga meraih Juara 1 Tingkat Yadika & Pamor.',
    type: 'work',
  },
  {
    id: 4,
    title: 'Full Stack Programmer (Freelance)',
    company: 'Proyek Independen/Kontrak | Bekasi',
    date: 'Mar 2022 - Jul 2022',
    description: 'Membangun sistem pemesanan makanan berbasis Laravel dengan Socket.IO dan integrasi API Text-to-Speech. Mengembangkan aplikasi trading dengan CodeIgniter 3.',
    type: 'work',
  },
  {
    id: 5,
    title: 'D3 Manajemen Informatika',
    company: 'STMIK Bani Saleh',
    date: 'Lulus Tahun 2022',
    description: 'Fokus pada pengembangan perangkat lunak dan manajemen sistem informasi.',
    type: 'education',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pengalaman <span className="text-blue-400">Kerja</span>
          </h2>
          <p className="text-muted-foreground">
            Perjalanan karir profesional dan latar belakang pendidikan saya.
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:mx-auto md:w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-8 relative md:w-1/2 md:odd:ml-0 md:even:ml-auto md:even:pl-8 md:odd:pr-8 md:odd:text-right group"
            >
              <div className="absolute -left-10 md:group-odd:-right-[1.1rem] md:group-odd:left-auto md:group-even:-left-[1.1rem] w-8 h-8 rounded-full bg-background border-2 border-blue-400 flex items-center justify-center text-blue-400 mt-1 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                {exp.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              </div>
              
              <div className="bg-muted/10 hover:bg-muted/30 border border-border/50 p-6 rounded-2xl transition-colors text-left">
                <span className="text-sm font-medium text-blue-400 mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <h4 className="text-md text-muted-foreground mb-4">{exp.company}</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
