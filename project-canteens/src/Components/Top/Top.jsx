import React, { useEffect, useState } from 'react';
import './Top.css';
import { db, ref, onValue } from '../../config/Firebase'; 

const Top = () => {
  const [topData, setTopData] = useState({
    title: '',
    subtitle: '',
    images: [],
  });

  useEffect(() => {
    const topRef = ref(db, 'top');
    onValue(topRef, (snapshot) => {
      if (snapshot.exists()) {
        setTopData(snapshot.val());
      } else {
        console.log('No data available');
      }
    });
  }, []);

  return (
    <div className="top">
      <div className="top-head">
        <h1>
          <span>{topData.title.split(' ')[0]}</span> {topData.title.split(' ').slice(1).join(' ')}
        </h1>
        <h4>{topData.subtitle}</h4>
      </div>
      <div className="top-slider" id="focility">
        {topData.images.map((image, index) => (
          <div className="slider" key={index}>
            <img src={image} alt={`Top Collection ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;