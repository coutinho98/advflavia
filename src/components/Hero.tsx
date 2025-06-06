import { ArrowRight } from 'lucide-react';
import img from '../img/flaviamenezes.jpg'

const Hero = () => {
  return (
    <section id="hero" className="py-20 pt-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={img}
                alt="Advogada Flávia Menezes"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-6">
              Flávia Menezes
              <span className="block text-[#c9a55c] text-2xl md:text-3xl mt-2">
                Advogada
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              Especialista em Direito do Consumidor, com mais de 1 ano de experiência
              defendendo seus direitos com excelência e dedicação.
            </p>

           {/*  <a
              href="tel:+5511987654321"
              className="inline-flex items-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg gap-2 group"
            >
              Fale Comigo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;