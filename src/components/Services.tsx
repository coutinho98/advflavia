import { ShieldCheck, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Direito do Consumidor',
    description:
      'Resolução de problemas com produtos e serviços, incluindo cancelamento de contratos e indenizações.',
    features: ['Cancelamento de contratos', 'Indenizações', 'Defesa do consumidor']
  },
  {
    icon: <Scale className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Direito Civil',
    description:
      'Indenizações, responsabilidade civil e defesa em processos civis.',
    features: ['Responsabilidade civil', 'Contratos', 'Processos civis']
  },
  {
    icon: <AlertCircle className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Direito Bancário',
    description:
      'Resolução de problemas com bancos, financiamentos e revisão de contratos.',
    features: ['Revisão de contratos', 'Problemas bancários', 'Financiamentos']
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-warm-100 via-warm-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white transition-colors duration-400">
            Áreas de Atuação
            <span className="block text-warm-600 dark:text-amber-400 text-2xl md:text-3xl mt-2 transition-colors duration-400">
              Especializada
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto transition-colors duration-400">
            Ofereço serviços jurídicos especializados com foco na defesa dos seus direitos,
            sempre com atendimento personalizado e soluções eficazes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-warm-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-warm-50/50 to-amber-100/30 dark:from-slate-700/30 dark:to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 space-y-6">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warm-100 to-amber-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {service.icon}
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-white transition-colors duration-400">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-400">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



