import React, { useEffect } from "react";
import '../styles/cardStyle.css';
import Targaryen from '../images/Targaryen.svg';
import Stark from '../images/Stark.svg';
import Lannister from '../images/Lannister.svg';
import Arryn from '../images/Arryn.svg';
import Baratheon from '../images/Baratheon.svg';
import Martell from '../images/Martell.svg';
import Tyrell from '../images/Tyrell.svg';
import Bolton from '../images/Bolton.svg';
import Connington from '../images/Connington.svg';
import Dayne from '../images/Dayne.svg';
import Greyjoy from '../images/Greyjoy.svg';
import Hightower from '../images/Hightower.svg';
import Tully from '../images/Tully.svg';
import Velaryon from '../images/Velaryon.svg';
import { type } from "@testing-library/user-event/dist/type";


function CreateCards (props) {

//const houses = ['Stark', 'Lannister', 'Arryn', 'Baratheon', 'Targaryen', 'Martell', 'Tyrell', 'Bolton', 'Connington', 'Dayne', 'Greyjoy', 'Hightower', 'Tully', 'Velaryon']
const currentScore = props.currentGame.currentScore
const [sigilPics, setsigilPics] = React.useState({
  Targaryen: Targaryen,
  Stark: Stark
})
 let housePics = [Targaryen, Stark, Lannister, Arryn, Baratheon, Martell, Tyrell, Bolton, Connington, Dayne, Greyjoy, Hightower, Tully, Velaryon]







const randomHouse = (arr) => {
  let num = Math.floor(Math.random() * 14);
    return arr[num];
}

useEffect(() => {
  props.setclickedArr(props.houses)
  displayCard()
  // eslint-disable-next-line
}, []);

useEffect(() => {
  if (currentScore > props.highScore) {
    props.setHighScore([currentScore])
  }
    // eslint-disable-next-line
 }, [currentScore]);

function handleCardClick (e) {
  let target = e.target
  console.log(target)
  let scoreArr = props.clickedArr.filter((item => item !== target))
  if (scoreArr.length === props.clickedArr.length) {
    props.setcurrentGame({
      currentScore: 0,
        })
    props.setclickedArr(props.houses)
    displayCard()
    return
  } else if (scoreArr.length < props.clickedArr.length) {
    props.setcurrentGame({
    currentScore: (parseInt(currentScore) + 1),
  })
    props.setclickedArr(scoreArr)
    displayCard()}
}

 function displayCard () {
let sigils = props.houses;
let newArr = [];
for (let i=0; i < 10; i++) {
 let house = randomHouse(sigils)
 if (newArr.includes(house)) {
   displayCard()
   return
 } else {
   newArr.push(house)
 }}
 props.setCardArr(newArr)

}

function getPicture(name) {
  let index = props.houses.indexOf(name)
  return housePics[index]
}

return (
  <div className="cardField">
    {props.cardArr.map(item => (
    <div
      onClick={handleCardClick}
      id={item}
      className="card" 
      key={item}>
      <img src={getPicture(item)} width={'100px'} alt={`HouseSigil ${item}`}></img>
      <p>{item}</p>
    </div>
    ))}


  </div>
)
}

export default CreateCards;