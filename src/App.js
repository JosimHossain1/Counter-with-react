import './App.css'
import {useState} from 'react'

function App() {

   const [count, setCount] = useState(0)

   const decress = () =>{

    setCount(count - 1)
    if(count === 0){
      setCount(0)
    }
   }
   const incress = () =>setCount(count + 1)
   


  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button className='btn1' onClick={incress}>+</button>
      <button className='btn2' onClick={decress}>-</button>
    </div>
  );
}

export default App;
