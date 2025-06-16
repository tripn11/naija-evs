import { useLocation, useNavigate} from 'react-router-dom';

const Vehicle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const vehicle = location.state?.vehicle;

  if (!vehicle) return <div>Vehicle data not found.</div>;

  const handleOrderNow = () => {
    navigate(`/order/${vehicle.id}`, {
      state: {
        model: vehicle.model,
        year: vehicle.year,
        price: vehicle.price,
      },
    });
  };

  const handleTestDrive = () => {
    navigate(`/test-drive/${vehicle.id}`, {
      state: {
        model: vehicle.model,
        year: vehicle.year,
      },
    });
  };

  return (
    <div>
      <div>
        {vehicle.images && vehicle.images.map((img, idx) => (
          <img
            key={idx}
            src={
              `${import.meta.env.VITE_API_URL}${img.url}`
            }
            alt={`${vehicle.name} ${idx + 1}`}
          />
        ))}
      </div>
      <h2>{vehicle.name} ({vehicle.year})</h2>
      <p><strong>Description:</strong> {vehicle.description}</p>
      <p><strong>Price:</strong> ${vehicle.price}</p>
      <div>
        <button onClick={handleOrderNow}>Order Now</button>
        <button onClick={handleTestDrive}>Book a Test Drive</button>
      </div>
    </div>
  );
};

export default Vehicle;