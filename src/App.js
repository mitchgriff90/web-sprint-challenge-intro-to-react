import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  console.log(info);

  const MyStyle = styled.div`'
    display: flex; 
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    height: 400px;
    `;

  return (
    <div className="App">
      <h1 className="Header">Star Wars!</h1> 
      <MyStyle>
        {info.map((ch) => {
          return <Character key={ch.id} character={ch} />;
        })}
      </MyStyle>
    </div>
  );
}

export default App;
