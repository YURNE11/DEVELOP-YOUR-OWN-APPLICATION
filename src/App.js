import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/caroussel/Carousel';
import GridExample from './items/item';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <GridExample />
     <Footer />
    </div>
  );
}

export default App;