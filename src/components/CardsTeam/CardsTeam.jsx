import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardsTeam = () => {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
        <Card.Body>
          <Card.Title>Nombre del miembro del equipo 1</Card.Title>
          <Card.Text>
            Descripción breve del miembro del equipo y su rol en el proyecto.
          </Card.Text>
          <Button variant="primary">Ver perfil</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
        <Card.Body>
          <Card.Title>Nombre del miembro del equipo 2</Card.Title>
          <Card.Text>
            Descripción breve del miembro del equipo y su rol en el proyecto.
          </Card.Text>
          <Button variant="primary">Ver perfil</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
        <Card.Body>
          <Card.Title>Nombre del miembro del equipo 3</Card.Title>
          <Card.Text>
            Descripción breve del miembro del equipo y su rol en el proyecto.
          </Card.Text>
          <Button variant="primary">Ver perfil</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
        <Card.Body>
          <Card.Title>Nombre del miembro del equipo 4</Card.Title>
          <Card.Text>
            Descripción breve del miembro del equipo y su rol en el proyecto.
          </Card.Text>
          <Button variant="primary">Ver perfil</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
        <Card.Body>
          <Card.Title>Nombre del miembro del equipo 5</Card.Title>
          <Card.Text>
            Descripción breve del miembro del equipo y su rol en el proyecto.
          </Card.Text>
          <Button variant="primary">Ver perfil</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsTeam;