import { motion } from 'motion/react';

const applications = [
  {
    title: 'Empreendimentos residenciais',
    image: 'https://images.unsplash.com/photo-1673977597041-7e6512719d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MTQzNTA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Condomínios verticais',
    image: 'https://images.unsplash.com/photo-1630981108113-3f78a75c3ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmlzZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MTQzNTA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Loteamentos',
    image: 'https://images.unsplash.com/photo-1559329146-807aff9ff1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTQyMzkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Retrofit',
    image: 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBhcmNoaXRlY3R1cmUlMjBtZWV0aW5nJTIwYmx1ZXByaW50fGVufDF8fHx8MTc3MTQzNTA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ApplicationSection() {
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
          <h2 className="text-4xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Não fornecemos apenas materiais. Estruturamos o abastecimento do seu empreendimento.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white border border-gray-200 hover:border-[#008F39] transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl">{app.title}</h3>
              </div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#008F39] transition-all duration-500 group-hover:h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
