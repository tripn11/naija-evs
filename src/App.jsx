import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Mission from './components/Mission';
import VehicleType from './components/VehicleType';
import Vehicle from './components/Vehicle';
import Support from './components/Support';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';


const App = () => {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/maintenance" element={<ContactForm />} /> 
          <Route path="/support/installation" element={<ContactForm />} />
          <Route path="/support/faq" element={<FAQ />} />
          <Route path="/vehicles/:type" element={<VehicleType />} />
          <Route path="/vehicles/:type/:name" element={<Vehicle />} />
          <Route path="/order" element={<ContactForm />} />
          <Route path="/test-drive" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
