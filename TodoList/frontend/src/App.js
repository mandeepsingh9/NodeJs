import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'
import axios from 'axios'
import Todo from './Compoents/Todo';
function App() {
     
    const itemdata= useRef();
     
    async function handle()
    {
       let obj={
        userid:Date.now(),
        item: itemdata.current.value
      }
       
      const res=await axios.post("http://localhost:8080/api/todo",obj);
      console.log(res.data);
       
    }
  return (
    <>
    <div className="App">
       <div>Todo List</div>
      <div>
         <input type="text" ref={itemdata} /><br></br>
         <button onClick={handle}>ADD</button>
      </div>
       
       
    </div>
      <Todo/>
    </>
  );
}

export default App;
