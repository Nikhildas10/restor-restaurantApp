import React, { useEffect, useState } from 'react'
import "../App.css";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';



function Home() {
  // function fetchRestaurant(){
  //   axios.get('/restaurants.json').then(result=>{
  //   const restaurantDetails=result.data.restaurants    
  //     console.log(restaurantDetails);
  //   })
  // or
     const [restaurantData, setRestaurantData] = useState([]);
  const fetchRestaurant=async()=>{
 setRestaurantData((await axios.get("/restaurants.json")).data.restaurants);

  }
  

   useEffect(() => {
     fetchRestaurant();
   }, []);

   console.log(restaurantData);
  return (
    <div>
      {/* <div>
        <img
          src="https://i.postimg.cc/QCdPykbm/Adobe-Stock-253492338-Preview-transformed.jpg"
          alt=""
        />
      </div> */}

      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="carImg carImg1"
              src="https://i.postimg.cc/QCdPykbm/Adobe-Stock-253492338-Preview-transformed.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="carHeading">
                Life is uncertain,eat dessert first
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carImg"
              src="https://i.postimg.cc/Ss1z9GTW/fast-food-dish-blue.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="carHeading2">
                Count the <br /> memories, <br />
                not
                calories.
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className='mt-5'>
        <Row>
          {restaurantData.length > 0 ? (
            restaurantData.map((i) => (
              <Col xs={12} sm={6} md={6} lg={4} className=" p-5">
               <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
                  <Card
                    className="fullCard border-0 "
                    style={{ width: "100%", height: "550px" }}
                  >
                    <Card.Img
                      variant="top"
                      className="cardImage"
                      src={i.photograph}
                    />
                    <Card.Body>
                      <Card.Title>{i.name}</Card.Title>
                      <Card.Text className="p-4 cardAddress">
                        {i.address}
                      </Card.Text>
                      <Button className="cardBut" variant="primary">
                        More Details
                      </Button>
                    </Card.Body>
                  </Card>
               </Link>
              </Col>
            ))
          ) : (
            <h1>not present</h1>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home