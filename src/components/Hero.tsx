import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import img from '../img/flaviamenezes.jpg';

const Hero = () => {
  return (
    <section id="hero" className="py-20 pt-32 bg-gradient-to-br from-warm-100 via-warm-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={img}
                  alt="Advogada Flávia Menezes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30 dark:to-transparent" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl text-center font-serif text-slate-800 dark:text-white mb-6 lg:text-left transition-colors duration-400">
                Flávia Menezes
                <span className="block text-warm-600 dark:text-amber-400 text-2xl md:text-3xl mt-2 transition-colors duration-400">
                  Advogada
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 text-center lg:text-left leading-relaxed transition-colors duration-400">
                Com experiência comprovada em defesa dos direitos do consumidor, ofereço soluções
                jurídicas eficazes e personalizadas.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://wa.me/message/MU6MHF3LAQN7A1"
                target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-[#25D366] to-[#1E8E49] hover:from-[#1E8E49] hover:to-[#128C7E] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg gap-3 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaWhatsapp className="h-6 w-6 relative z-10" />
                <span className="relative z-10">Entre em contato</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;