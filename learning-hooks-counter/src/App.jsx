import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  let addcount=()=>{
    if(count>=0 && count<=19)
    setCount(count+1)
  }
  let removecount=()=>{
    if(count>0)
     setCount(count-1);
  }

  return (
    <>
      <h1>Counter {count}(upto 20)</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste eaque inventore a et ipsam officia dignissimos quaerat nihil numquam fugiat commodi est blanditiis aut, cupiditate eius, labore quidem provident! <b>{count}</b></p>
      <button onClick={addcount}>click-add</button>

      <br />
      <br />
      <button onClick={removecount}>click-subtract</button>
        
    </>
  )
}

export default App
