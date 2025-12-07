import React from 'react';
import './Footer.css';
// Ícones simples para as redes sociais (você pode substituir por SVGs ou bibliotecas como react-icons)
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer id="contato" className="site-footer">
      <div className="footer-container">
        
        {/* Coluna 1: Sobre a Loja */}
        <div className="footer-section about-us">
          <h3>BURGER EXPRESS</h3> {/* Usei Express para combinar com os exemplos anteriores */}
          <p>
            Os melhores hambúrgueres artesanais da cidade. Feitos com amor e ingredientes frescos.
          </p>
        </div>

        {/* Coluna 2: Contato */}
        <div className="footer-section contact-info">
          <h3>Contato</h3>
          <p>Rua dos Hambúrgueres, 123 - São Paulo</p>
          <p>(11) 98765-4321</p>
          <p>contato@burgerexpress.com</p>
        </div>

        {/* Coluna 3: Horário de Funcionamento */}
        <div className="footer-section operating-hours">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Quinta: 18h - 00h</p>
          <p>Sexta e Sábado: 18h - 02h</p>
          <p>Domingo: 18h - 23h</p>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div className="footer-section social-media">
          <h3>Siga-nos</h3>
          <div className="social-buttons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Direitos Autorais (Copyright) */}
      <div className="footer-bottom">
        <p>© 2025 Burger Express. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;