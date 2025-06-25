import hero1 from '../assets/home/hero1.jpg';
import hero2 from '../assets/home/hero2.jpg';
import hero3 from '../assets/home/hero3.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const images = [hero1, hero2, hero3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home-hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${images[current]})`,
        }}
      ><div className='dark-overlay'></div></div>
      <h2>Drive the Future Today</h2>
      <p>
        Experience the thrill of electric driving with our range of high performance EVs.
        Sustainable, stylish and ready for you.
      </p>
      <Link to="/vehicles/cars" className='button-link'>Explore Models</Link>
    </main>
  );
};

export default Home;