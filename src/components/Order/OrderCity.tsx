import { useState } from 'react';
import { mapPoints } from '../../assets/mapMock/map';

const OrderCity = () => {
  const [city, setCity] = useState('');

  return (
    <div>
      <select value={city} onChange={(e) => setCity(e.target.value)} className="text-red-300">
        <option selected>Select a city</option>
        {mapPoints.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderCity;
