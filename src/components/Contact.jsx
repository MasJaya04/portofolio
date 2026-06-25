import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi <span className="text-purple-400">Saya</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">nurjayapux@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Lokasi</h3>
                <p className="text-muted-foreground text-sm">Bekasi, Jawa Barat</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-400 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telepon / WhatsApp</h3>
                <p className="text-muted-foreground text-sm">0822-1052-5194</p>
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
            <form className="bg-card border border-border/50 p-8 rounded-2xl flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Nama</label>
                  <input type="text" id="name" className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Nama Anda" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input type="email" id="email" className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="email@contoh.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium">Subjek</label>
                <input type="text" id="subject" className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Penawaran Pekerjaan" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Pesan</label>
                <textarea id="message" rows="4" className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none" placeholder="Halo Nurjaya..."></textarea>
              </div>
              <button type="button" className="bg-foreground text-background font-semibold py-4 rounded-lg hover:bg-foreground/90 transition-colors mt-2">
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
