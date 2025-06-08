import { MessagesSquare, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-10 text-center">
          Entre em Contato
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+5571993083681"
              className="flex items-center justify-start p-5 bg-[#25D366] border border-[#25D366] rounded-lg shadow-sm hover:bg-[#1E8E49] transition-all duration-300 ease-in-out group text-white"
            >
              <MessagesSquare className="h-6 w-6 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-sm">(71) 99308-3681</p>
              </div>
            </a>
            <a
              href="mailto:flaviamenezes.couto@gmail.com"
              className="flex items-center justify-start p-5 bg-[#1a365d] border border-[#1a365d] rounded-lg shadow-sm hover:bg-[#112a4e] transition-all duration-300 ease-in-out group text-white"
            >
              <Mail className="h-6 w-6 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">E-mail</h3>
                <p className="text-sm">flavia.menezes.couto@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;