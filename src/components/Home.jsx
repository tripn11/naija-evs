import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/home/hero1.jpg';
import hero2 from '../assets/home/hero2.jpg';
import hero3 from '../assets/home/hero3.jpg';
import Loading from './Loading';

const images = [hero1, hero2, hero3];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const promises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; 
      });
    });

    Promise.all(promises).then(() => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [loaded]);

  if (!loaded) return <Loading />;

  return (
    <main className="home-hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${images[current]})`,
        }}
      >
        <div className="dark-overlay"></div>
      </div>
      <h2>Drive the Future Today</h2>
      <p>
        Experience the thrill of electric driving with our range of high performance EVs.
        Sustainable, stylish and ready for you.
      </p>
      <Link to="#" className="button-link">
      {/* <Link to="/vehicles/cars" className="button-link"> */}
        Explore Models
      </Link>
    </main>
  );
};

export default Home;
