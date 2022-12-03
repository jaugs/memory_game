import './App.css';
import CreateHeader from "./components/header";
import React from 'react';
import CreateCards from "./components/card";
//import '../styles/educationStyle.css';


function App() {
  const [houses, setHouses] = React.useState(
    ['Targaryen', 'Stark', 'Lannister', 'Arryn', 'Baratheon', 'Martell', 'Tyrell', 'Bolton', 'Connington', 'Dayne', 'Greyjoy', 'Hightower', 'Tully', 'Velaryon']);

  const [cardArr, setCardArr] = React.useState([]);
  const [clickedArr, setclickedArr] = React.useState(
    {
      name: ''
    })
  const [currentGame, setcurrentGame] = React.useState(
    {
      currentScore: 0,
    })
  const [highScore, setHighScore] = React.useState(0)

  return (
    <div className="App"> 
      <CreateHeader 
        highScore = {highScore}
        setHighScore = {setHighScore}
        currentGame = {currentGame}
        setcurrentGame = {setcurrentGame}
      />
      <CreateCards
        houses = {houses}
        setHouses = {setHouses}
        highScore = {highScore}
        setHighScore = {setHighScore}
        currentGame = {currentGame}
        setcurrentGame = {setcurrentGame}
        clickedArr = {clickedArr}
        setclickedArr = {setclickedArr}
        cardArr = {cardArr}
        setCardArr = {setCardArr}
      />
      <div className='footer'>by JAUGS 2022</div>
    </div>
  );
}
export default App;
