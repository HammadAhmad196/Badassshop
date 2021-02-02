import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from './components/Features';
import Offers from './components/Offers';
import Wholesales from './components/Wholesales';
import Blogs from './components/Blogs';
import Chairs from './components/Chairs';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';

function App() {
  return (
    <div className="App bg-gray-200">
       <Navigation />
        <Home />
       <Features />
         <Wholesales /> 
        <Offers />
        <Chairs /> 
        <Blogs />   
         <Footer  />
        <Footer1   />  
    </div>
  );
}

export default App;
