import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-warm-100 via-warm-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 dark:text-white transition-colors duration-400">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors duration-400">
            Estou sempre disponível para esclarecer suas dúvidas e oferecer a melhor solução jurídica.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="tel:+5571993083681"
              className="group flex items-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-warm-200/50 dark:border-slate-600/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#1E8E49] rounded-lg mr-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                <FaWhatsapp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-800 dark:text-white transition-colors duration-400">WhatsApp</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-400">(71) 99308-3681</p>
              </div>
            </a>

            <a
              href="mailto:advocaciaflaviamenezes@gmail.com"
              className="group flex items-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-warm-200/50 dark:border-slate-600/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 rounded-lg mr-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif font-bold text-lg text-slate-800 dark:text-white transition-colors duration-400">E-mail</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-400 truncate">advocaciaflaviamenezes@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;