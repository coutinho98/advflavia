import { Plane, CircleDollarSign, ShoppingCart, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Plane className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Problemas com Voos',
    description:
      '',
    features: [
      'Problemas com Voos',
      'Atraso superior a 4 horas',
      'Perda de conexão por atraso ou cancelamento',
      'Negaram seu embarque (overbooking)',
      'Bagagem extraviada, perdida ou danificada']
  },
  {
    icon: <CircleDollarSign className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Nome Negativado Indevidamente',
    description:
      '',
    features: [
      'Nunca teve vínculo com a empresa e teve o nome negativado',
      'Pagou a dívida, mas seu nome permaneceu no cadastro',
      'Foi negativado por um serviço cancelado',
      'Pagou há mais de 5 dias e seu nome não foi removido do SPC/Serasa'
    ]
  },
  {
    icon: <ShoppingCart className="h-12 w-12 text-warm-600 dark:text-amber-400" />,
    title: 'Compras Online',
    description:
      '',
    features: [
      'Produto comprado online ou na loja e não foi entregue',
      'Veio errado, com defeito ou é falsificado',
      'Empresa dificultando o uso da garantia',
      'Produto parado na assistência há mais de 30 dias',
      'Recusa em trocar ou devolver item com defeito',
      'Eletrodoméstico novo com defeito e sem assistência adequada',
      'Técnico não comparece para avaliar o problema'
    ]
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
            Atuo com foco na resolução de conflitos e na proteção dos seus direitos, especialmente nas relações de consumo. Cada caso é tratado com atenção individualizada e estratégias jurídicas alinhadas às suas necessidades.
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



