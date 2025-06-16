import { useNavigate } from 'react-router-dom';

const VehicleWrap = ({ vehicle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/vehicles/${vehicle.vehicleType.name}/${vehicle.model}`,
       { state: { vehicle } });
  };
  return (
    <div onClick={handleClick}>
      <img
        src={
          `${import.meta.env.VITE_API_URL}${vehicle.images[0]?.thumbnailURL}`}
        alt={vehicle.name}
        loading="lazy"
      />
      <h3>{vehicle.model}</h3>
      <p>{vehicle.year}</p>
    </div>
  );
};

export default VehicleWrap;