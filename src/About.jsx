import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

const About = () => {
    const [animal, setAnimal] = useState([]);

    const getAnimal = async () => {
        try {
            const response = await axios('https://www.freetestapi.com/api/v1/animals');
            setAnimal(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getAnimal();
    }, []);

    return (
        <>
            <h1>About</h1>
            {animal.length === 0 ? (
                <p>Loading...</p>
            ) : (
                animal.map((animalItem) => (

                    <Card key={animalItem.id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body>
                            <Card.Img src={animalItem.image} />
                            <Card.Title>{animalItem.name}</Card.Title>
                            <Card.Text>{animalItem.description}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Type: {animalItem.type}</ListGroup.Item>
                            <ListGroup.Item>Habitat: {animalItem.habitat}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                ))
            )}
        </>
    );
};

export default About;
