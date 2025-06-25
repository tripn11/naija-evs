import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const validatePhone = (phone) => /^\+?\d{7,15}$/.test(phone);

export default () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    location: '',
  });

  const props = location.state


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(form.phone)) {
      setError('Please enter a valid phone number');
      return;
    }
    setLoading(true);

    let message;

    if (props.purpose === 'place an order' || props.purpose === 'book a test drive') {
      message = `${form.name} wants to ${props.purpose} for ${props.carModel} on ${form.date} at ${form.time}.\n\nPhone: ${form.phone}\nEmail: ${form.email}`;
    } else {
      message = `${form.name} wants to ${props.purpose} at ${form.location} on ${form.date} at ${form.time}.\n\nPhone: ${form.phone}\nEmail: ${form.email}`;
    }

    try {
      await axios.post("https://formspree.io/f/mldnoneb", {
        name: form.name,
        email: form.email,
        message,
      }, {
        headers: { 'Accept': 'application/json' }
      });

      setSuccess(true);
      setForm({ name: '', phone: '', email: '', date: '', time: '', location: '' });
    } catch (err) {
      setError("Submission failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="classic-form" onSubmit={handleSubmit}>
      <h2>{props.purpose.replace(/\b\w/g, c => c.toUpperCase())}</h2>

      <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <input type="time" name="time" value={form.time} onChange={handleChange} required />

      {(props.purpose === 'install a charger' || props.purpose === 'request maintenance') && (
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      )}

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Thank you! We will get back to you soon.</p>}

      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
    </form>
  );
}
