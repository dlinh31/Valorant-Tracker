import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'

function App() {
  const [display, setDisplay] = useState({
    teamList: false,
    tournamentList: false,

  })

  function handleDisplay(event) {
    const name = event.target.name;
    setDisplay(prevDisplay => {
      // Create a new state object with all properties set to false
      const newState = Object.keys(prevDisplay).reduce((state, key) => {
        state[key] = false; // Set all to false
        return state;
      }, {});
      // Set the property that matches the event target name to true
      newState[name] = true;
      console.log(name + " clicked");
      return newState;
    });
  }
  return (
    <>
    <Navbar handleDisplay={handleDisplay}/>
    <Hero display={display}/>
    </>
  )
}


export default App
