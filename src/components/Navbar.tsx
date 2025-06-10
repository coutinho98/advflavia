import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import ThemeToggle from './ToggleTheme'; // Certifique-se de que o caminho está correto

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      } dark:bg-gray-900 dark:text-white`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* mudar a logo depois */}
          <a href="#" className="flex items-center space-x-2">
            <Scale className="h-10 w-10 text-[#c9a55c]" />
            <div>
              <h1 className="text-xl font-serif font-bold tracking-wider text-[#1a365d] dark:text-gray-200">
                FLÁVIA MENEZES
              </h1>
              <p className="text-xs font-medium tracking-wider text-[#c9a55c]">
                ADVOCAÇÃO E CONSULTORIA
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8"> 
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1a365d] hover:text-[#c9a55c] transition-colors font-medium dark:text-gray-200 dark:hover:text-[#c9a55c]"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4"> 
            <ThemeToggle /> 
            <button
              className="text-[#1a365d] dark:text-gray-200" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 py-4 px-2 bg-white dark:bg-gray-800 rounded-md shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#1a365d] hover:text-[#c9a55c] transition-colors font-medium py-2 dark:text-gray-200 dark:hover:text-[#c9a55c]" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;