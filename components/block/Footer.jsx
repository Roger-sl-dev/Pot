export default function Footer() {
    return (
      <footer className=" bg-black border-t border-white text-gray-300 py-5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 ">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sobre</h3>
            <p className="text-sm leading-relaxed">
              Desenvolvedor focado em criar soluções digitais personalizadas, modernas e escaláveis. De sites a sistemas sob medida.
            </p>
          </div>
  
          
        
  
          {/* Contato / Redes */}
          <div className="  ">
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="text-sm space-y-2">
              <li>Email: <a href="mailto:contato@seudominio.com" className="hover:text-white">contato@seudominio.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/5514991152236" className="hover:text-white">(14) 99115-2236</a></li>
              <li className="pt-2 flex space-x-4">
                <a href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</a>
                <a href="https://github.com" target="_blank" className="hover:text-white">GitHub</a>
                <a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="mt-10 text-center text-sm  text-gray-300">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </footer>
    );
  }
  