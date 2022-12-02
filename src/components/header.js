import React from "react";
import '../styles/headerStyle.css';

function CreateHeader (props) {
  
    return (
      <div className="header">
      <div className="title">A Song of Ice and Fire Memory Game</div>
      <div className="rules">Click on a House Sigil to begin, try to select all the Houses without repeating any!</div>
      <div className="scoreboard">
        <p>Your current Score: {props.currentGame.currentScore}</p>
        <p>Your High Score: {props.highScore}</p>
      </div>
    </div>
    )}
export default CreateHeader;