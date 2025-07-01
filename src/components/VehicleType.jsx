import { useEffect, useState } from 'react';
import axios from 'axios';  
import Brand from './Brand';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const VehicleType = () => {
  const { type } = useParams();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/api/brands`);
        const filteredBrands = response.data.docs.filter(
          brand =>
            brand.vehicleType &&
            brand.vehicleType.name &&
            brand.vehicleType.name.toLowerCase() === type.toLowerCase()
        ).sort((a,b)=>a.name.localeCompare(b.name));
        setBrands(filteredBrands);
      } catch (error) {
        console.error('Error fetching brands:', error);
      } finally {
        setTimeout(()=>setLoading(false),1000);
      }
    };

    fetchBrands();
  }, [type, brands.length]);

  if (loading) {
    return <Loading />;
  }

  if (brands.length === 0) {
    return <div className='brands-container'><p>No Vehicles in this category</p></div>;
  }


  return (
    <div className='brands-container'>
      {brands.map(brand => (
        <Brand key={brand.id} brand={brand} />
      ))}
    </div>
  );
};

export default VehicleType;
