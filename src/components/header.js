import React from "react";
//import '../styles/educationStyle.css';

function CreateHeader (props) {
  
    return (
      <div className="header">
      <h2>A Song of Ice and Fire Memory Game</h2>
      <h3>Click on a House Sigil to begin, try to select all the Houses without repeating any!</h3>
      <div className="scoreboard">
        <p>Your current Score: {props.currentGame.currentScore}</p>
        <p>Your High Score: {props.highScore}</p>
      </div>
    </div>
    )}
export default CreateHeader;