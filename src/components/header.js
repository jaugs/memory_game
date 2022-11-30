import React from "react";
//import '../styles/educationStyle.css';

function CreateHeader (props) {

    // const handleInfoChange = (e) => {
    //     let target = e.target.value
    //     props.seteduInfo(
    //       {
    //         ...props.info,
    //        [e.target.name]: target,
    //       });
    // }

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
    // }

    return (
      <div className="header">
      <h2>A Song of Ice and Fire Memory Game</h2>
      <h3>Click on a House Sigil to begin, try to select all the Houses without repeating any!</h3>
      <div className="scoreboard">
        <p>Your current Score: {props.currentGame.currentScore}</p>
        <p>Your High Score: {props.currentGame.highScore}</p>
      </div>
    </div>
    )}
export default CreateHeader;