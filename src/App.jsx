import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Suspense, lazy } from 'react';

const Cars = lazy(() => import('./components/Cars'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cars />
            </Suspense>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
