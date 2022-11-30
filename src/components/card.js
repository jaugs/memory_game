import React from "react";
import '../styles/cardStyle.css';

function CreateCards (props) {

const houses = ['Stark', 'Lannister', 'Arryn', 'Baratheon', 'Targaryen', 'Martell', 'Tyrell', 'Bolton', 'Connington', 'Dayne', 'Greyjoy', 'Hightower', 'Tully', 'Velaryon']

const randomHouse = () => {
  let num = Math.floor(Math.random() * 13);
    return houses[num];
}

function displayCard () {
    props.setCard({
      name: randomHouse
    })
   let newArr = [];
   for (let i=0; i < 10; i++) {
    let house = randomHouse()
    for (let k=0; k < newArr.length; k++) {
    if (newArr[k].includes(house)) {
      console.log(newArr)
      return
    } 
    }
    newArr.push(house);
   }
   console.log(newArr)
   props.setCardArr(newArr)
   return newArr
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
    
    {
      props.cardArr.map(item => (
      <div className="card" key={item}>{item}</div>
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