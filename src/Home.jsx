import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Home = () => {

  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios('https://fakestoreapi.com/products/category/jewelery');
      setProducts(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []); 

  return (
    <>
      <h1>Welcome To Our Jewelry Shop</h1>
      <div>
        {products.length > 0 ? (
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                <Card style={{ width: '100%', height: '100%', position: 'relative' }} className="d-flex flex-column">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    style={{
                      height: '200px', // Set a fixed height for the image
                      objectFit: 'contain', // Ensure the image fills the container without stretching
                      width: '100%', // Make sure the image takes up full width of the card
                    }}
                  />
                  <Card.Body className="d-flex flex-column" style={{ paddingBottom: '60px' }}>
                    {/* Title with some margin */}
                    <Card.Title><h2>{product.title}</h2></Card.Title>
                    {/* Description with margin */}
                    <Card.Text className="mt-3">
                      <p>{product.description}</p>
                    </Card.Text>
                    {/* Price with margin */}
                    <Card.Text className="mt-3">
                      <p><strong>Price: ${product.price}</strong></p>
                    </Card.Text>
                    {/* Button fixed at the bottom */}
                    <Button variant="primary" className="position-absolute bottom-0 w-100">
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Home;
