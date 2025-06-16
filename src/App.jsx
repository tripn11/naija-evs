import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Mission from './components/Mission';
import VehicleType from './components/VehicleType';
import Vehicle from './components/Vehicle';
import Order from './components/Order';
import TestDrive from './components/TestDrive';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vehicles/:type" element={<VehicleType />} />
        <Route path="/vehicles/:type/:name" element={<Vehicle />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/test-drive/:id" element={<TestDrive />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
