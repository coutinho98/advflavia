import { Scale } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a365d] text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Scale className="h-6 w-6 text-[#c9a55c] mr-2" />
            <span className="font-serif font-bold">FLÁVIA MENEZES</span>
          </div>
          <p className="text-sm text-gray-300">
            &copy; {year} Flávia Menezes. Todos os direitos reservados. OAB/BA 83.569
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;