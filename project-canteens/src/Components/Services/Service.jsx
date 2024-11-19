import React, { useEffect, useState } from 'react';
import { db, ref, onValue } from '../../config/Firebase';
import './Service.css';

const Service = () => {
  const [data, setData] = useState(null); // State untuk menyimpan data
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  useEffect(() => {
    const serviceRef = ref(db, 'service'); // Path database sesuai struktur Firebase

    const unsubscribe = onValue(
      serviceRef,
      (snapshot) => {
        const serviceData = snapshot.val(); // Ambil data dari snapshot
        if (serviceData) {
          setData(serviceData); // Simpan data ke state
        } else {
          setError('No data found');
        }
        setLoading(false); // Matikan status loading
      },
      (errorObject) => {
        console.error('Firebase error:', errorObject); // Debugging jika ada error
        setError('Failed to load data.');
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Membersihkan listener saat komponen unmount
  }, []);

  // Jika masih loading
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Jika terjadi error
  if (error) {
    return <div className="error">{error}</div>;
  }

  // Jika data kosong
  if (!data) {
    return <div className="no-data">No data available</div>;
  }

  return (
    <>
      <div className="service">
        <h1>
          Why <span>Canteen's</span>
        </h1>
        <div className="boxes">
          {/* Easy to Order */}
          <div className="box">
            <img
              src={data.easyToOrder || ''}
              alt="Easy to Order"
              style={{ display: data.easyToOrder ? 'block' : 'none' }}
            />
            <h3>Easy To Order</h3>
          </div>
          {/* Fastest Delivery */}
          <div className="box">
            <img
              src={data.fastestDelivery || ''}
              alt="Fastest Delivery"
              style={{ display: data.fastestDelivery ? 'block' : 'none' }}
            />
            <h3>Fastest Delivery</h3>
          </div>
          {/* Best Quality */}
          <div className="box">
            <img
              src={data.bestQuality || ''}
              alt="Best Quality"
              style={{ display: data.bestQuality ? 'block' : 'none' }}
            />
            <h3>Best Quality</h3>
          </div>
        </div>
        <div className="container-s">
          <div>
            <img src={data.aboutImage || ''} alt="About" />
          </div>
          <div className="about-text" id="about">
            <h2>{data.header}</h2>
            <h4>{data.aboutText}</h4>
            <p>
            Our commitment is to deliver an easy, fast, and high-quality dining experience. With a wide variety of delicious menu options, we are here to make your special moments even better.
            </p>
            <div className="count-boxes">
              <div className="count-box">
                <h5>{data.happyCustomers}</h5>
                <h3>Happy Customer</h3>
              </div>
              <div className="count-box">
                <h5>{data.awards}</h5>
                <h3>Award Win</h3>
              </div>
              <div className="count-box">
                <h5>{data.foodMenu}</h5>
                <h3>Food Menu</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
