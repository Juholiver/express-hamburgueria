import React, { useState } from 'react';
import './Header.css'; // Importa o arquivo CSS
import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  cartCount: number;
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Previne a navegação para #carrinho
    toggleCart();
    if (isMenuOpen) {
      toggleMenu(); // Fecha o menu de navegação se estiver aberto (mobile)
    }
  };

  return (
    <header className="header-hamburgueria">
      <div className="logo-container">
        {/* Você pode substituir este emoji por uma imagem <img> real do seu logo */}
        <span className="logo-icon">🍔</span>
        <h1 className="nome-loja">Burger Express</h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir Menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`header-nav ${isMenuOpen ? 'is-active' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
          <li><a href="#cardapio" onClick={toggleMenu}>Cardápio</a></li>
          <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
          <li><a href="#carrinho" className="carrinho" onClick={handleCartClick}>🛒 ({cartCount})</a></li>
        </ul>
      </nav>
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;