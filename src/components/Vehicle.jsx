import { useLocation, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Vehicle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const vehicle = location.state?.vehicle;
  const [images, setImages] = useState([]); 
  const [currentImage, setCurrentImage] = useState(0);
  const [overview, setOverview] = useState([])

  useEffect (()=>{
    setImages([...vehicle.images])
    const keys = Object.keys(vehicle.overview)
    .map(each=>{
      const capitalized = each.charAt(0).toUpperCase()+each.slice(1)
      return capitalized.replace("_"," ")
    })

    setOverview(keys)
  },[])

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

  const imageChanger = (action) => {
    if(action==='next') {
      setCurrentImage(prev=>(prev+1) % images.length)
    }else {
      if(currentImage===0) {
        setCurrentImage(images.length-1)
      }else {
        setCurrentImage(prev => (prev-1) % images.length)
      }
    }
  }

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
    <div className='vehicle'>
      <div>
        {vehicle.images && 
          <img src={
              `${import.meta.env.VITE_API_URL}${images[currentImage]?.url}`
            }
            alt={`${vehicle.model}`}
          />
        }
        <ion-icon name="chevron-forward-outline" id='next' onClick={()=>imageChanger('next')}></ion-icon>
        <ion-icon name="chevron-back-outline" id='prev' onClick={imageChanger}></ion-icon>
        <div className='guide'>{images.map((_,index) => <div className={currentImage===index?'active':''}></div>)}</div>
      </div>
      <h3 className='model'>{vehicle.year} {vehicle.model}</h3>
      <div className='price'>{vehiclePrice}</div>
      <div className='overview'>
        <h3>Overview</h3>
        <div>
          {Object.keys(vehicle.overview)
          .map((each, index) =>
          (<div key={each}>
            <span>{overview[index]}</span>
            <span>{typeof(vehicle.overview[each])==='string'?
            vehicle.overview[each].charAt(0).toUpperCase() + vehicle.overview[each].slice(1):vehicle.overview[each]}</span>
          </div>))}
        </div>
      </div>
      <div>
        <button onClick={handleTestDrive}>Book a Test Drive</button>
        <button onClick={handleOrderNow}>Order Now</button>
      </div>
    </div>
  );
};

export default Vehicle;