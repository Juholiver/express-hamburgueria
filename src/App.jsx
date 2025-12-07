import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Header from './components/Header.jsx';
import './App.css'; 

import BurguerClassic from './assets/img/BurguerClassic.jpg';
import BurguerBacon from './assets/img/BurguerBacon.jpg';
import hambhero from './assets/img/hambhero.jpg';
import BurguerBBQ from './assets/img/BurguerBBQ.jpg';
import VeganoBurguer from './assets/img/VeganoBurguer.jpg';
import sobrenos from './assets/img/sobrenos.jpg';


// Dados de exemplo para seus hambúrgueres
const produtos = [
  {
    id: 1,
    nome: "Classic Burger",
    descricao: "Hambúrguer artesanal 180g, queijo cheddar, alface, tomate e molho especial.",
    valor: 28.00,
    imageUrl: BurguerClassic
  },
  {
    id: 2,
    nome: "Bacon Master",
    descricao: "Hambúrguer 180g, bacon crocante, cebola caramelizada, queijo suíço e maionese defumada",
    valor: 32.00,
    imageUrl: BurguerBacon
  },
  {
    id: 3,
    nome: "Double Smash",
    descricao: "Dois hambúrgueres smash 120g cada, queijo cheddar, picles, cebola e molho especial",
    valor: 35.00,
    imageUrl: hambhero
  }
  ,
  {
    id: 4,
    nome: "BBQ Burger",
    descricao: "Hambúrguer 200g, cebola crispy, queijo cheddar, bacon e molho barbecue artesanal",
    valor: 34.00,
    imageUrl: BurguerBBQ
  },
  {
    id: 5,
    nome: "Veggie Deluxe",
    descricao: "Hambúrguer vegetariano, queijo prato, rúcula, tomate seco e maionese verde",
    valor: 26.00,
    imageUrl: VeganoBurguer
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.nome} foi adicionado ao carrinho!`);
  };

  const removeFromCart = (idToRemove) => {
    const index = cart.findIndex(item => item.id === idToRemove);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} toggleCart={toggleCart} />
      <HeroSection />
      <div id="cardapio" className="cardapio">
        <h2 className='title-cardapio'>Nosso Cardápio</h2>
        <p className='subtitle-cardapio'>Hambúrgueres artesanais feitos com ingredientes frescos</p>
      </div>
      <main>
        <div className="product-list-container">
          {/* Mapeia a lista de produtos para renderizar um ProductCard para cada item */}
          {produtos.map(produto => (
            <ProductCard
              key={produto.id}
              product={produto} 
              addToCart={addToCart} 
            />
          ))}
        </div>
        <div id="sobre-nos" className='sobre-nos'>
          <div className='sobre-nos-content'>
            <img src={sobrenos} alt="Sobre Nós" className='imagem-sobre-nos'/>
            <div>
              <h2 className='sobre-nos-title'>Sobre Nós</h2>
              <p className='sobre-nos-text'>Há mais de 10 anos servindo os melhores hambúrgueres artesanais da cidade. Nossa paixão é criar experiências gastronômicas únicas com ingredientes frescos e de alta qualidade.
                Cada hambúrguer é preparado com carne selecionada, pão artesanal e molhos exclusivos desenvolvidos pelos nossos chefs.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {isCartOpen && (
        <Cart 
          cartItems={cart} 
          toggleCart={toggleCart}
          removeFromCart={removeFromCart} 
        />
      )}
    </div>
  );
}

export default App;