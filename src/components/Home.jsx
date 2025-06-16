import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import { Link } from 'react-router-dom';

const Home = () => { 
  return (
    <main>
      <img src={hero1} alt="Hero 1" />
      <img src={hero2} alt="Hero 2" />
      <img src={hero3} alt="Hero 3" />
      <h2>Drive the Future Today</h2>
      <p>
        Experience the thrill of electric driving with our range of high performance EVs.
        Sustainable, stylish and ready for you.
      </p>
      <Link to="/cars">
        <button>Explore Models</button>
      </Link>
      <button>Book a Test Drive</button>
    </main>
  );
};

export default Home;