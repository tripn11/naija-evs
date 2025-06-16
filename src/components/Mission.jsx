import greenEarth from '../assets/green earth.jpg';
import charging from '../assets/car.jpg';
import acceleration from '../assets/acceleration.jpg';
import elegance from '../assets/interior.jpg';

const Mission = () => {
  return (
    <main>
      <section>
        <h2>Why We Chose Electric</h2>
        <p>
          Our journey into electric mobility wasn't just a business move — it was a
          conscious decision rooted in sustainability, innovation, and a desire to shape a cleaner, smarter future.
        </p>
      </section>

      <section>
        <article>
          <img src={greenEarth} alt="Green Earth" />
          <h3>Zero Emissions</h3>
          <p>Reduce your carbon footprint and help build a healthier planet for future generations.</p>
        </article>

        <article>
          <img src={charging} alt="Charging" />
          <h3>Cost-Effective</h3>
          <p>Forget fuel queues. EVs cost less to run, especially when charged with solar power.</p>
        </article>

        <article>
          <img src={acceleration} alt="Performance" />
          <h3>Instant Performance</h3>
          <p>Feel the thrill of instant torque and responsive acceleration — every ride is a smooth rush.</p>
        </article>

        <article>
          <img src={elegance} alt="Elegance" />
          <h3>Elegant by Design</h3>
          <p>EVs combine silence and sophistication with interiors and designs that command attention.</p>
        </article>
      </section>
    </main>
  );
};

export default Mission;
// This component is responsible for displaying the mission and values of the electric vehicle company.
