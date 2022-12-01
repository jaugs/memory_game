import React, { useEffect } from "react";
import '../styles/cardStyle.css';

function CreateCards (props) {

const houses = ['Stark', 'Lannister', 'Arryn', 'Baratheon', 'Targaryen', 'Martell', 'Tyrell', 'Bolton', 'Connington', 'Dayne', 'Greyjoy', 'Hightower', 'Tully', 'Velaryon']

const randomHouse = () => {
  let num = Math.floor(Math.random() * 14);
    return houses[num];
}


useEffect(() => {
  props.setclickedArr(houses)
  displayCard()
  // eslint-disable-next-line
}, []);


// useEffect(() => {
//   handleCardClick()
// }, [props.cardArr]);

function handleCardClick (e) {
  let target = e.target.innerText
  let scoreArr = props.clickedArr.filter((item => item !== target))
  console.log(scoreArr)
  console.log(props.clickedArr)
  if (scoreArr.length === props.clickedArr.length) {
 
    displayCard()
    return
  } else if (scoreArr.length < props.clickedArr.length) {
    props.setcurrentGame({
      currentScore: (parseInt(props.currentGame.currentScore) + 1),
      highScore: 0
  })
    props.setclickedArr(scoreArr)
    displayCard()}
  // } else if ()
  //props.setclickedArr(props.currentScore)

  // props.setcurrentGame({
  //   currentScore: (14 - props.clickedArr.length),
  //   highScore: ''
  // })
  //displayCard()
  
}

function displayCard () {
   let newArr = [];
   for (let i=0; i < 10; i++) {
    let house = randomHouse()
    if (newArr.includes(house)) {
      displayCard()
      return
    } else {
      newArr.push(house)
    }}
    props.setCardArr(newArr)
}


// const handleCardChange = (e) => {
//         let target = e.target.value
//         props.setDeck(
//           {
//             ...props.info,
//            [e.target.name]: target,
//           });
//     }



    // const onSubmitEdu = (e) => {
    //     e.preventDefault();
    //     props.eduArr.push(props.info)
    //     props.seteduEditing(false);
    //     props.seteduInfo(
    //         {
    //           school: '',
    //           degree: '',
    //           major: '',
    //           date: '',
    //           awards: '',
    //           id: (props.info.id + 1)
    //         })
    //   };

    // const editEdu = (e) => {
    //   e.preventDefault();
    //   const num = e.target.id
    //   props.seteduInfo(
    //     {
    //       school: props.eduArr[num].school,
    //       degree: props.eduArr[num].degree,
    //       major: props.eduArr[num].major,
    //       date: props.eduArr[num].date,
    //       awards: props.eduArr[num].awards,
    //       id: parseInt(num)
    //     })
    //   const newArr = props.eduArr.filter(elem => elem.id !== parseInt(e.target.id))
    //   props.seteduArr(newArr)
    //   props.seteduEditing(true);
    // };
    
    // const addEducation = (e) => {
    //   e.preventDefault();
    //   props.seteduEditing(
    //     true);
    //   }

return (
  <div className="cardField">
    
      {props.cardArr.map(item => (
      <div
        onClick={handleCardClick}
        className="card" 
        key={item}>{item}</div>
    ))}


  
    <button onClick={displayCard}>sdfsdfsd</button>
    <button onClick={randomHouse}>ddddd</button>
  </div>
)
}


export default CreateCards;

// {props.eduArr.map(item => (
//   <div className="educationInfo" key ={item.id}>
//     <p className="eduItem"> {item.degree}</p>
//     <p className="eduItem"> {item.major}</p>
//     <p className="eduItem"> {item.school}</p>                
//     <p className="eduItem"> {item.date}</p>
//     <p className="awardsText"> {item.awards}</p>
//     <button 
//       id= {item.id}
//       onClick={editEdu}
//       className="educonfirm">Edit</button>