import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TestDrive = () => {
  const location = useLocation();
  const { model, year } = location.state || {};
  const [customer, setCustomer] = useState({ name: '', phone: '', datetime: '' });
  const navigate = useNavigate();

  if (!model) return <div>Vehicle data not found.</div>;

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit test drive logic here
    alert(`Test drive booked for ${customer.datetime}!`);
    navigate(-1);
  };

  return (
    <div>
      <h2>
        You are booking a test drive for: {model} ({year})
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Date & Time:
            <input
              type="datetime-local"
              name="datetime"
              value={customer.datetime}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default TestDrive;