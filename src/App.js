import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import StarShipList from './app/components/StarShipList';
import Header from './app/components/Header';
import LoadMore from './app/components/LoadMore';
import { useState } from 'react';
import Container from './app/components/Container';
import DetailedShip from './app/components/DetailedShip';


function App() {

  const[selectedStarship,setSelectedStarship] = useState();

  return (
    //ReactRouter kullanarak belirtilen idye göre detay ekranına geçilmesini sağladım .
    <>
    <Routes>
      <Route path='/' element={<Container setSelectedStarship={setSelectedStarship}/>}/>
      <Route path='/:id' element={<DetailedShip selectedStarship={selectedStarship}/>}/>
    </Routes>
    </>
  );
}

export default App;
