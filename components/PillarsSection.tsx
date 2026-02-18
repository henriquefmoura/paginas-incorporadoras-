import { motion } from 'motion/react';
import { Building2, Truck, Award } from 'lucide-react';

const pillars = [
  {
    icon: Building2,
    title: 'Escala e Portfólio Completo',
    description: 'Atendimento de ponta a ponta com infraestrutura nacional e mix completo de produtos.',
  },
  {
    icon: Truck,
    title: 'Logística Planejada por Fase',
    description: 'Entregas sincronizadas com o cronograma da obra, eliminando desperdício e estoque parado.',
  },
  {
    icon: Award,
    title: 'Condições Corporativas Estruturadas',
    description: 'Negociação por volume com governança, previsibilidade e transparência total.',
  },
];

export function PillarsSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-12 h-1 bg-[#008F39] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl">
            Menos variáveis. Mais previsibilidade.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-10 border border-gray-200 hover:border-[#008F39] transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#008F39]/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-[#008F39]" />
              </div>
              <h3 className="text-xl mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
