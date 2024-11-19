import React, { useEffect, useState } from 'react';
import './Trending.css';
import { db, ref, onValue } from '../../config/Firebase';
import toast from 'react-hot-toast';

const Trending = () => {
  const [trendingData, setTrendingData] = useState({
    title: '',
    buttonText: '',
    recipes: [],
  });

  useEffect(() => {
    const fetchTrendingData = () => {
      const dbRef = ref(db, 'trending'); 
      onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          setTrendingData(snapshot.val()); 
        } else {
          console.log('No data available');
        }
      });
    };

    fetchTrendingData();
  }, []);

  return (
    <div className="trending">
      <div className="head">
        <div>
          <h1>
            <span>{trendingData.title.split(' ')[0]}</span>{' '}
            {trendingData.title.split(' ').slice(1).join(' ')}
          </h1>
        </div>
        <button>
          {trendingData.buttonText}
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div id="recipe" className="recipe-cards">
        {trendingData.recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} />
            <div className="card-info">
              <h1>{recipe.price}</h1>
              <h3>{recipe.name}</h3>
              <div className="card-action">
                <div className="star">
                  {Array.from({ length: recipe.rating }, (_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </div>
                <button
                  onClick={() =>
                    toast(
                      "Foodie's services are not yet available as we are still in the preparation phase to ensure the best quality for our customers. We appreciate your patience and support during this time.\n\n Please stay tuned for updates on our official launch. We can't wait to serve you soon with delicious and freshly prepared meals. Thank you for your understanding!",
                      { duration: 2000 }
                    )
                  }
                >
                  <i className="fa-solid fa-cart-shopping-fast"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
