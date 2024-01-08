import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import Carousel from './Carousel';
import Footer from './Footer';
import Endpage from './Endpage';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Hero/>
      <Cards/>
      <Carousel/>
      <Footer/>
      <Endpage/> 
    

    </div>
  );
}

export default App;
