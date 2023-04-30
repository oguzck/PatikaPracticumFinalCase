import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function DetailedShip({ selectedStarship }) {
  const navigate = useNavigate();
  return (

    <div className="detailedCard" >
      <Button variant="link" style={{ position: 'absolute', top: '0', left: '0', backgroundColor: 'transparent', border: 'none' }} onClick={() => navigate(-1)}>
        <BsArrowLeft style={{ fontSize: '1.5rem' }} />
      </Button>
      <div style={{ backgroundColor: 'white', border: '5px solid black', borderRadius: '30px', padding: '10px', color: '#b6b8df' }}>
        <Card style={{ width: '30rem', padding: '50px', border: '5px solid black', borderRadius: '30px', }}>
          <Card.Title style={{ textAlign: 'center' }}><h2>{selectedStarship.name}</h2></Card.Title>
          <Card.Img style={{ borderRadius: '50px', boxShadow: ' 12px 10px 5px 0px rgba(0,0,0,0.75)', padding: '0px' }} variant="top" src="/starship.png" />
          <Card.Body>
            <Card.Text style={{ textAlign: 'left', marginTop: '5px' }}>
              <div><b>Model : </b>  {selectedStarship.model}</div>
              <div><b>Hyperdrive Rating :</b> {selectedStarship.hyperdrive_rating}</div>
              <div><b>Passengers :</b> {selectedStarship.passengers}</div>
              <div><b>Max Atmospharing Speed : </b>  {selectedStarship.max_atmosphering_speed}</div>
              <div><b>Manufacturer : </b>  {selectedStarship.manufacturer}</div>
              <div><b>Crew : </b> {selectedStarship.crew}</div>
              <div><b>Cargo Capacity :</b> {selectedStarship.cargo_capacity}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
