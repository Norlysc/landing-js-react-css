import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logoPaxo-removebg-preview.png" alt="Logo de la empresa" />
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <nav className={`menu ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
        <a href="#services">Servicios</a>
        <a href="#reviews">Reseñas</a>
        <a href="#success-cases">Casos de Éxito</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
