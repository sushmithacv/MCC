
import './App.css';
import Student from './component/Student';
import Count from './component/Count';
import Books from './component/Books';

function App() {
   
  //Component count
    const sum=(num1,num2)=>{
      const s=num1+num2;
      console.log(`Sum is `+s);
      return s;
    }
  
    const books=[
      {id:"uov125",name:"fundametals of Programming", pages:200},
      {id:"uov126",name:"JavaScript for beginners", pages:150},
      {id:"uov127",name:"Knowdledge Base: guide book", pages:200},
      {id:"uov128",name:"Newsletter Issue 2, Vol 1", pages:20},
      {id:"uov129",name:"Modern web app", pages:450},
    ];

    const selectedBook =(book)=>{
      console.log(`selected book is ${book.name} which has ${book.pages} pages`)
    }

  return (
    <div className="App">
      
      <div className="section left"><Books bdata={books} onSelectBook={selectedBook}/></div>
      <div className="section center"><Student id="2020ict53" name="Sushmitha" age="23"/></div>
      <div className="section right"><Count message="Hello React" cal={sum}/></div>
    </div>
  );
}


export default App;
