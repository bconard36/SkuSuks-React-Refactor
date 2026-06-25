import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavMenu from './NavMenu';
import Footer from './Footer';
import PreOrder from './PreOrder';
import NewDrops from './NewDrops';
import Donate from './Donate';
import Contact from './Contact';
import Apparel from './Apparel';
import Accessories from './Accessories';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <main>
          <div className="content">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/apparel" element={ <Apparel /> } />
              <Route path="/accessories" element={ <Accessories /> } />
              <Route path="/preorder" element={ <PreOrder /> } />
              <Route path="/newdrops" element={ <NewDrops /> } />
              <Route path="/contact" element={ <Contact /> } />
              <Route path="/donate" element={ <Donate /> } />
            </Routes>
          </div>
        </main>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
