import './App.css';
import CreateHeader from "./components/header";
import React from 'react';
import CreateCards from "./components/card";
//import '../styles/educationStyle.css';
//import logo from './images/Targaryen.svg';


function App() {

  const [cardArr, setCardArr] = React.useState([]);
  const [card, setCard] = React.useState(
    {
      name: ''
    }
  )
  const [editing, setEditing] = React.useState(true)
  const [currentGame, setcurrentGame] = React.useState(
    {
      currentScore: 0,
      highScore: 0,
    }
  )



  return (
    <div className="App"> 
      <CreateHeader 
      currentGame = {currentGame}
      setcurrentGame = {setcurrentGame}
     />
      <CreateCards
      card = {card}
      setCard = {setCard}
      editing = {editing}
      setEditing = {setEditing}
      cardArr = {cardArr}
      setCardArr = {setCardArr}
    />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
    </div>
  );
}

export default App;
