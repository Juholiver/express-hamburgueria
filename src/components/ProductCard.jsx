import React from 'react';
import './ProductCard.css'; 

// O componente recebe o objeto do produto e a função do carrinho
const ProductCard = ({ product, addToCart }) => {

  const { nome, descricao, valor, imageUrl } = product; // Desestrutura para facilitar o uso

  return (
    <div className="product-card">
      {/* Imagem do produto */}
      <img src={imageUrl || 'via.placeholder.com'} 
           alt={nome} 
           className="product-image" />
      
      <div className="card-content">
        {/* Nome do produto */}
        <h3 className="product-name">{nome}</h3>
        
        {/* Descrição do produto */}
        <p className="product-description">{descricao}</p>
        
        <div className="card-footer">
          {/* Valor do produto formatado para Reais (BRL) */}
          <span className="product-price">
            {valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          
          {/* Botão chama a função do componente pai */}
          <button 
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Adicionar 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
