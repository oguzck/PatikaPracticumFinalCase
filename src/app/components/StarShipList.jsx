import React, { useEffect, useState } from 'react';
import agent from '../api/agent';
import Card from 'react-bootstrap/Card';
import { Route, Routes, useNavigate, useRoutes } from "react-router-dom"
import DetailedShip from './DetailedShip';


export default function StarShipList({ value, page, setPage, starships, setStarships, clicked, setClicked, setValue, setLastStarShips, setSelectedStarship }) {
  //LoadMore buttonuna tıklandığında veya kullanıcı bir arama yaptığında agenta ulaşıp istek atmasını sağlayacak useEffect kodu 
  useEffect(() => {
    console.log(value)
    agent.Starships.search(value, page).then((starships) => {
      //load more buttonunun tetiklenmesini kontrol etmek için sadece son dönen starship versini tuttuğum use state
      setLastStarShips(starships);
      if (clicked == true) {
        setStarships(starships);
        setClicked(false);
      }
      else {
        setStarships((prevStarships) => [...prevStarships, ...starships]);
      }

    });
  }, [value, page]);
  //yalnızca sayfanın açılışında tüm verileri getirmesi için kullandığım useEffect fonksiyonu
  useEffect(() => {
    agent.Starships.list().then((starships) => {
      setStarships(starships);
      setLastStarShips(starships);
    });
  }, []);

  const navigate = useNavigate();
  const handleStarshipSelect = (starship) => {
    setSelectedStarship(starship);
    navigate(`/${starship.name}`);
  }

  return (
    <div>
      <ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '20px' , marginTop:'50px'  }}>
          {starships.map((starship) => (
            <Card key={starship.url} className='starship-card' onClick={() => handleStarshipSelect(starship)}>
              <Card.Img variant="top" src="starship.png" style={{borderRadius:'20px'}} />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>{starship.name}</Card.Title>
                <Card.Text style={{paddingLeft:'12px'}}>
                  <span>Model : {starship.model}</span>
                </Card.Text>
                <Card.Text style={{paddingLeft:'12px' }}>
                  <span>Hyperdrive Rating : {starship.hyperdrive_rating}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </ul>

    </div>
  );
}
