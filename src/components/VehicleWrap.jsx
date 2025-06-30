import { useNavigate } from 'react-router-dom';

const VehicleWrap = ({ vehicle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/vehicles/${vehicle.vehicle_type.name}/${vehicle.model}`,
       { state: { vehicle } });
  };

  const formatNaira = (price) => {
    const numericPrice = parseFloat(price);

    if (isNaN(numericPrice)) {
      return 'Invalid Price';
    }

    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits:0,
    });

    return formatter.format(numericPrice);
  }

  const vehiclePrice = formatNaira(vehicle.price);

  return (
    <div onClick={handleClick} className='vehicle-wrap'>
      <img
        src={vehicle.images[0]?.thumbnailURL}
        alt={vehicle.name}
        loading="lazy"
      />
      <div>
        <span>{`${vehicle.year} ${vehicle.model}`}</span>
        <span>{vehiclePrice}</span>
      </div>
    </div>
  );
};

export default VehicleWrap;