import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1666137270524-5131ac07314d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwb3JnYW5pemVkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTQzNTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Obra organizada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-1 bg-[#008F39] mb-8" />
            
            <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1] text-white">
              Grandes empreendimentos exigem decisões ainda maiores.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              A Leroy Merlin estrutura o fornecimento do seu empreendimento com escala, governança e previsibilidade.
            </p>

            <motion.button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 bg-[#008F39] text-white px-10 py-5 hover:bg-[#007530] transition-all duration-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg tracking-wide uppercase">
                Solicitar Avaliação do Empreendimento
              </span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
