import './App.css'
import Header from './components/header'
import Footer from './components/Footer'


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} toggleCart={toggleCart}/>
      <Footer />
    </div>
  )
}

export default App
