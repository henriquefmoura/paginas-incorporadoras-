import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const models = [
  {
    name: 'CORE',
    tagline: 'Eficiência máxima. Controle absoluto de custo.',
    features: [
      'Padronização técnica validada',
      'Materiais essenciais por tipologia',
      'Negociação por volume',
      'Entregas programadas por fase',
    ],
    cta: 'Solicitar proposta CORE',
    highlighted: false,
  },
  {
    name: 'VALUE',
    tagline: 'Equilíbrio entre custo, percepção e valorização.',
    features: [
      'Portfólio ampliado de acabamentos',
      'Opções controladas de diferenciação',
      'Suporte técnico na especificação',
      'Condições comerciais estruturadas',
    ],
    cta: 'Estruturar no modelo VALUE',
    highlighted: true,
  },
  {
    name: 'SIGNATURE',
    tagline: 'Diferenciação estratégica para alto padrão.',
    features: [
      'Curadoria premium',
      'Planejamento logístico avançado',
      'Condições comerciais por projeto',
      'Atendimento B2B dedicado',
    ],
    cta: 'Solicitar avaliação SIGNATURE',
    highlighted: false,
  },
];

export function ModelsSection() {
  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="w-12 h-1 bg-[#008F39] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-6">
            Estruture o fornecimento do seu empreendimento com inteligência.
          </h2>
          <div className="text-xl text-gray-600 space-y-1">
            <p>Sem improviso.</p>
            <p>Sem fragmentação.</p>
            <p>Sem risco desnecessário.</p>
          </div>
        </motion.div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`border-2 p-10 transition-all duration-300 ${
                model.highlighted
                  ? 'border-[#008F39] bg-[#008F39]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl mb-3">{model.name}</h3>
                <p className="text-gray-600 leading-relaxed">{model.tagline}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#008F39] mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full flex items-center justify-center gap-2 py-4 px-6 transition-all duration-300 ${
                  model.highlighted
                    ? 'bg-[#008F39] text-white hover:bg-[#007530]'
                    : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                <span>{model.cta}</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="text-xl text-gray-700 space-y-2 mb-10">
            <p>Um único parceiro.</p>
            <p>Múltiplos empreendimentos.</p>
            <p>Total previsibilidade.</p>
          </div>

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
    </section>
  );
}
