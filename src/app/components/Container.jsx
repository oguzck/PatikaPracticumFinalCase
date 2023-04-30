import React, { useState } from 'react'
import Header from './Header';
import StarShipList from './StarShipList';
import LoadMore from './LoadMore';

export default function Container({setSelectedStarship}) {
    const [value, setValue] = useState();
    const [page, setPage] = useState(1);
    const [starships, setStarships] = useState([]);
    const [clicked, setClicked] = useState(false);
    const[lastStarShips,setLastStarShips] = useState([]);
  return (
    <>
    
    <Header setPage={setPage} setValue={setValue} setStarships={setStarships} setClicked={setClicked} value={value} />
    <StarShipList
    value={value}
    page={page}
    setPage={setPage}
    starships={starships}
    setStarships={setStarships}
    clicked={clicked}
    setClicked={setClicked}
    setValue={setValue}
    setLastStarShips={setLastStarShips}
    setSelectedStarship={setSelectedStarship}
  />
  <LoadMore value={value} page={page} lastStarShips={lastStarShips} setValue={setValue} setPage={ setPage}  />
  </>
  )
}
