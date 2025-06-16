import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { model, year, price } = location.state || {};
  const [customer, setCustomer] = useState({ name: '', phone: '' });

  if (!model) return <div>Vehicle data not found.</div>;

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit order logic here
    alert('Order placed!');
    navigate(-1);
  };

  return (
    <div>
      <h3>
        You are ordering: {model} ({year}) at  ${price} Naira.
      </h3>
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
        <button type="submit">Order Now</button>
      </form>
    </div>
  );
};

export default Order;