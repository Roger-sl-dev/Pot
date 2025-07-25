import { useState } from "react";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#projetos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        role="navigation"
        className="backdrop-blur-lg border m-6 border-white rounded-lg shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="size-16">
            <img src={Logo} alt="Logo da empresa" className="h-full w-auto" />
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-6 text-xl font-semibold text-white">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-lime-300 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md rounded-b-lg px-6 pb-4 transition-all duration-300">
            <ul className="space-y-3 text-gray-700 font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
