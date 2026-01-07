import { AlertCircle, ArrowRight, CheckCircle, Scale, Stethoscope } from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Liminares e Urgências Médicas',
    features: [
      'Cirurgias e Exames Negados',
      'Internação e Home Care',
      'Medicamentos de Alto Custo',
      'Tratamentos de Câncer e TEA'
    ],
    cta: 'Resolver Negativa Agora'
  },
  {
    icon: <Scale className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Revisão de Abusividades',
    features: [
      'Reajustes de Mensalidade',
      'Cancelamento Unilateral do Plano',
      'Erro Médico e Indenizações',
      'Reembolso de Despesas Médicas'
    ],
    cta: 'Consultar meus Direitos'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-warm-100 via-warm-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-6">
          <h2 className=" text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white transition-colors duration-400">
            Especialista em direito à saúde e defesa do paciente
          </h2>
          <p className=" text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto transition-colors duration-400">
            Atuação jurídica estratégica para garantir o acesso imediato a tratamentos, cirurgias e medicamentos negados pelos planos de saúde. 
            <br /><br />  
            Protegendo sua vida com agilidade e rigor técnico.
          </p>

          <div className="inline-flex items-center justify-center space-x-2 bg-red-50 dark:bg-red-900/20 px-6 py-3 rounded-full border border-red-100 dark:border-red-800/30">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <span className=" text-red-700 dark:text-red-300 font-semibold text-sm md:text-base">
              Atendimento prioritário para casos de urgência e emergência.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-warm-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-warm-50/50 to-amber-100/30 dark:from-slate-700/30 dark:to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 space-y-6 flex-grow">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warm-100 to-amber-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {service.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative p-8 pt-0">
                <a
                  href="https://wa.me/message/MU6MHF3LAQN7A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-slate-800 dark:bg-[#c9a55c] text-white dark:text-slate-900 py-3 rounded-xl font-bold hover:bg-warm-600 dark:hover:bg-amber-500 transition-colors duration-300"
                >
                  <span>{service.cta}</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;