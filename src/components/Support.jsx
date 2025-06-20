import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div>
      <h1>Support</h1>
      <p>How can we assist you today?</p>
      <ul>
        <li>
          <Link to="/support/installation">Software Services</Link>
        </li>
        <li>
          <Link to="/support/charging-station">Charging Station Installation</Link>
        </li>
        <li>
          <Link to="/support/collision-repair">Collision Repair</Link>
        </li> 
        <li>
          <Link to="/support/payment">Payment Plans</Link>
        </li>
         <li>
          <Link to="/support/faq">Frequently Asked Questions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Support;
