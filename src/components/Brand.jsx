import { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleWrap from './VehicleWrap';
import LoadingPage from './Loading'; 

const Brand = ({ brand }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(
          `${apiUrl}/api/vehicles?where[brand][equals]=${brand.id}`
        );
        setVehicles(response.data.docs); 
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [brand.id]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!vehicles.length) {
    return null;
  }

  return (
    <div>
      <h2>{brand.name}</h2>
      {vehicles.map(vehicle => (
        <VehicleWrap key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default Brand;

