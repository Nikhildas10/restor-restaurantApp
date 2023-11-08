import React, { useEffect } from 'react'
import "../App.css";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import OpHours from './OpHours';
import Reviews from './Reviews';

function View() {
  const param=useParams()
  const id=param.id
  // or 
  // const {id}=param
// console.log(id);
  const [restaurantData, setRestaurantData] = useState([]);
  const fetchRestaurant = async () => {
    setRestaurantData((
        await axios.get("/restaurants.json")
      ).data.restaurants
    );
  };
  useEffect(() => {
    fetchRestaurant();
   
  }, []);
   const singleCard = restaurantData.find((i) => i.id == id);
   console.log(singleCard);
     const Back = useNavigate();

 function goBack(){
  Back('/')
 }
  return (
    <div className="container">
      {singleCard ? (
        <div className="single grid container">
          <div className='d-flex justify-content-center'>
            <img
              src={singleCard.photograph}
              className="singleImg mb-4 mt-4"
              alt=""
            />
          </div>
          <div className="mainDetails">
            <div className="details text-center">
              <h1 className=" mt-2 restName">{singleCard.name}</h1>
              <h1 className="otherDetails "><span className='goldClr'>ADDRESS :</span> {singleCard.address}</h1>
              <h1 className="otherDetails "><span className='goldClr'>NEIGHBORHOOD : </span>{singleCard.neighborhood}</h1>
              <h1 className="otherDetails "><span className='goldClr'>CUISION TYPE :</span> {singleCard.cuisine_type}</h1>
              <h1 className=" ">
                <OpHours opData={singleCard.operating_hours}></OpHours>
              </h1>
              <h1 className=" ">
                <Reviews reviewData={singleCard.reviews}></Reviews>
              </h1>
              <button onClick={goBack} className="btn  btn-primary backBtn">
                Go Back
              </button>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>no data found</h1>
        </div>
      )}
    </div>
  );
}

export default View