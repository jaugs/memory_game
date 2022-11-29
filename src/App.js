import './App.css';
//import Header from "./components/header";
import React from 'react';
//import '../styles/educationStyle.css';
import logo from './images/Targaryen.svg';


function App() {

  const [card, setCard] = React.useState(
    { name: '',
      id: '',
      image: '',
    }
  );
  const [edEditing, seteduEditing] = React.useState(true)




  return (
    <div className="App">
     

     <div className='CVcontainer'>
     {/* <Header 
     info = {headerInfo}
     onChangeItem = {setheader}
     isEditing = {isEditing}
     setEditing = {setEditing} /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        </div>
    </div>
  );
}

export default App;
