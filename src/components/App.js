import React from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {

  return (
    <div id="main">
      <div>
        {/* add input elememnts inside here */}
        <input type="text" id="contentInput" defaultValue='hello world' ></input>
        <input type="number" id='fontSizeInput' defaultValue='10'></input>
        <input type="number" id='paddingInput' defaultValue='5'></input>
      </div>
 
 {/* render Preview component here */}
 
 <Preview ></Preview>
    </div>
  )
}


export default App;
