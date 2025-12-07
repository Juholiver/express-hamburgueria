import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, toggleCart, removeFromCart }) => {
  // Calcula o valor total do carrinho
  const total = cartItems.reduce((sum, item) => sum + item.valor, 0);

  return (
    <div className="cart-modal-overlay" onClick={toggleCart}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cart-close-button" onClick={toggleCart}>
          &times;
        </button>
        <h2>Seu Carrinho</h2>
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <p className="cart-empty-message">Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <span className="cart-item-name">{item.nome}</span>
                <span className="cart-item-price">
                  {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <button 
                  className="cart-item-remove-button" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>
                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <button className="checkout-button">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
