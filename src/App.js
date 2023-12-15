import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [data, setData]=useState(null)
  function getData(val)
  {
    console.log(val.target.value)
    setData(val.target.value);
  }

  return (
    <div className="App">
     
          <h1>get data {data}</h1> 
          {/* <button onClick={updateData}>Click me </button> */}
          <input type='text' onChange={getData} />
    </div>
 
  );
}

export default App;
