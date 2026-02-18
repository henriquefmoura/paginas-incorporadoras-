import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    phone: '',
    city: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com backend/CRM
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', role: '', phone: '', city: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="cta-form" className="py-32 bg-[#008F39]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
            Transforme sua cadeia de suprimentos em vantagem competitiva.
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white p-10 md:p-14 space-y-6"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-[#008F39] rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3">Solicitação enviada com sucesso!</h3>
              <p className="text-gray-600">
                Nossa equipe corporativa entrará em contato em breve.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700 tracking-wide uppercase">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 focus:border-[#008F39] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-2 text-gray-700 tracking-wide uppercase">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 focus:border-[#008F39] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm mb-2 text-gray-700 tracking-wide uppercase">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 focus:border-[#008F39] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700 tracking-wide uppercase">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 focus:border-[#008F39] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm mb-2 text-gray-700 tracking-wide uppercase">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 focus:border-[#008F39] focus:outline-none transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#008F39] text-white py-5 px-8 hover:bg-[#007530] transition-colors duration-300 mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg tracking-wide uppercase">
                  Solicitar Avaliação do Meu Empreendimento
                </span>
              </motion.button>
            </>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-white/80 text-sm"
        >
          <p>
            Ao enviar este formulário, você concorda em ser contatado pela equipe B2B da Leroy Merlin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
