import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import ThemeToggle from './ToggleTheme';

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
      } dark:bg-primary-dark`} // Fundo da Navbar: light=white, dark=primary-dark
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Scale className="h-10 w-10 text-secondary" />
            <div>
              <h1 className="text-xl font-serif font-bold tracking-wider text-primary dark:text-secondary">
                FLÁVIA MENEZES
              </h1>
              <p className="text-xs font-medium tracking-wider text-secondary">
                ADVOCACIA E CONSULTORIA
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary hover:text-secondary transition-colors font-medium dark:text-secondary dark:hover:text-primary-light"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-primary dark:text-secondary" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 py-4 px-2 bg-white dark:bg-primary-dark rounded-md shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-primary hover:text-secondary transition-colors font-medium py-2 dark:text-secondary dark:hover:text-primary-light"
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