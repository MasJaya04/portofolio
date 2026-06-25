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
    <section id="experience" className="border-t border-border/50 bg-background py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Pengalaman <span className="text-[var(--color-accent)]">Kerja</span>
          </h2>
          <p className="text-muted-foreground">Perjalanan karir profesional dan latar belakang pendidikan saya.</p>
        </div>

        <div className="relative ml-4 border-l border-border md:mx-auto md:w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative mb-10 ml-8 md:w-1/2 md:odd:ml-0 md:odd:pr-8 md:odd:text-right md:even:ml-auto md:even:pl-8"
            >
              <div className="absolute -left-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background text-[var(--color-accent)] border-[var(--color-accent-border)] shadow-[0_0_18px_var(--color-accent-soft)] md:group-even:-left-[1.1rem] md:group-odd:left-auto md:group-odd:-right-[1.1rem]">
                {exp.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              </div>

              <div className="rounded-2xl border border-border/60 bg-[var(--color-surface)] p-6 text-left shadow-[var(--shadow-soft)] backdrop-blur-sm transition-colors hover:bg-[var(--color-surface-strong)]">
                <span className="mb-2 block text-sm font-medium text-[var(--color-accent)]">{exp.date}</span>
                <h3 className="mb-1 text-xl font-bold">{exp.title}</h3>
                <h4 className="mb-4 text-md text-muted-foreground">{exp.company}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
