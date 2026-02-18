import { motion } from 'motion/react';
import { AlertTriangle, Package, TrendingDown, Clock, Users } from 'lucide-react';

const challenges = [
  {
    icon: Users,
    text: 'Falta de padronização entre empreendimentos',
  },
  {
    icon: Package,
    text: 'Múltiplos fornecedores fragmentados',
  },
  {
    icon: AlertTriangle,
    text: 'Ruptura de estoque',
  },
  {
    icon: TrendingDown,
    text: 'Impacto do retrabalho na margem',
  },
  {
    icon: Clock,
    text: 'Gestão complexa de cronogramas',
  },
];

export function ChallengeSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-1 bg-[#008F39] mb-6" />
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              Quando o fornecimento não acompanha o crescimento, o risco aumenta.
            </h2>
          </motion.div>

          {/* Right Column - Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 border-l-2 border-gray-200 pl-6 py-2"
              >
                <challenge.icon className="w-6 h-6 text-[#008F39] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{challenge.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
