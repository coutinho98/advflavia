import { ShieldCheck, Scale, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-[#c9a55c]" />,
    title: 'Direito do Consumidor',
    description:
      'Resolução de problemas com produtos e serviços, incluindo cancelamento de contratos e indenizações.',
  },
  {
    icon: <Scale className="h-12 w-12 text-[#c9a55c]" />,
    title: 'Direito Civil',
    description:
      'Indenizações, responsabilidade civil e defesa em processos civis.',
  },
  {
    icon: <AlertCircle className="h-12 w-12 text-[#c9a55c]" />,
    title: 'Direito Bancário',
    description:
      'Resolução de problemas com bancos, financiamentos e revisão de contratos.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-12 text-center">
          Áreas de Atuação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



