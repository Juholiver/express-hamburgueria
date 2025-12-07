import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} toggleCart={toggleCart}/>
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App
