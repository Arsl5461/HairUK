
import FeM from './component/FeM';
import {Routes,Route} from "react-router-dom"
import Estimation from './component/Estimation';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
   <Route path="/calculator" element={<FeM/>}/>
    <Route path="/price" element={<Estimation/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/about" element={<About/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
