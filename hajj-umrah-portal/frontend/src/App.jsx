import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import AdminReviews from './components/AdminReviews';
// import AdminPackages from './pages/AdminPackages';
// import AdminServices from './pages/AdminServices';
// import AdminReviews from './components/AdminReviews';
import AdminVideos from './components/AdminVideos';

import Footer from './components/Footer';
import './App.css';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="reviews" element={<AdminReviews />} />
          <Route path="videos" element={<AdminVideos />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
