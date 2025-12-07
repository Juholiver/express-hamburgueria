import React from 'react';
import './HeroSection.css'; // Importa o arquivo CSS

// Importe a imagem que você deseja usar. 
// Certifique-se de ter uma imagem na pasta src/assets/ ou em algum URL público.
// Vou usar um URL placeholder para demonstração.
const imagemFundoUrl = "./hambhero.jpg"; // Substitua pelo caminho correto da sua imagem
const HeroSection = () => {
  return (
    <div 
      id="inicio"
      className="hero-container" 
      
    >
      <div className="hero-overlay"></div> {/* Overlay escuro para melhorar a leitura do texto */}
      <div className="hero-content">
        <h1 className="hero-title">Burger Express</h1>
        <p className="hero-slogan">
           Melhores hambúrgueres da cidade 
        </p>
        <button 
          className="hero-button"
          onClick={() => {
            // Adicione a lógica para rolar até a seção de cardápio ou navegar para outra página
            console.log('Botão Cardápio clicado!');
            // Exemplo: window.location.href = '#cardapio';
          }}
        >
          Ver Cardápio
        </button>
      </div>
    </div>
  );
};

export default HeroSection;