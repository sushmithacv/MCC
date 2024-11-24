import React,{useState} from 'react';
import './App.css';
import Main from './component/Main';
function App() {

  const [word,setWord]=React.useState('Sushmitha');
  
  

  return (
    <div className="App">
      
     
      <Main message={word}/>
     
    </div>
  );
}


export default App;
