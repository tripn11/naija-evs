import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import greenEarth from '../assets/green earth.jpg';
import charging from '../assets/car.jpg';
import acceleration from '../assets/acceleration.jpg';
import elegance from '../assets/interior.jpg';
import { Link } from 'react-router-dom';

const Home = () => { 
  return (
    <main>
        <section>
            <img src={hero1} alt="Hero 1" />        
            <img src={hero2} alt="Hero 2" />
            <img src={hero3} alt="Hero 3" />
            <h2>Drive the Future Today</h2>
            <p>Experience the thrill of electric driving with our range 
                of high performance EVs. Sustainable, stylish and ready for 
                you. </p>
            <Link to="/cars"><button>Explore Models</button></Link>
            <button>Book a Test Drive</button>
        </section>

        <section>
            <h2>Why EVs?</h2>
            <div>
                <div>
                    <h3>Zero Emissions</h3>
                    <p>Reduce your carbon footprint and 
                        contribute to a cleaner planet.</p>
                    <img src={greenEarth} alt="Green Earth" />
                </div>
                <div>
                    <h3>Cost-Effective</h3>
                    <p>Save on fuel and maintenance costs by charging with 
                        the sun.</p>
                    <img src={charging} alt="Charging" />
                </div>
                <div>
                    <h3>Performance</h3>
                    <p>Enjoy instant torque and smooth acceleration with 
                        electric motors.</p>
                    <img src={acceleration} alt="Performance" />
                </div>

                <div>
                    <h3>Elegance</h3>
                    <p>Experience silent comfort and striking aesthetics that
                         turn heads wherever you go.</p>
                    <img src={elegance} alt="Elegance" />
                </div>
            </div>
        </section>

        <section>
            <h1>Featured Brands</h1>
        </section>
    </main>
  );
};

export default Home;