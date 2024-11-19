import React, { useEffect, useState } from 'react';
import './Service.css';

const Service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ambil data atau lakukan hal lain tanpa Firebase
    const fetchData = () => {
      // Misalnya, menggunakan fetch atau data statis
      const serviceList = [
        { name: "Service 1", description: "Description of service 1" },
        { name: "Service 2", description: "Description of service 2" }
      ];
      setData(serviceList);
    };

    fetchData();
  }, []);

  return (
    <div className="service-container">
      {data.map((service, index) => (
        <div key={index} className="service">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
