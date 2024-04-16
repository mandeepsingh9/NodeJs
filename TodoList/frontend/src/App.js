
import './App.css';
import {useRef} from 'react'
import axios from 'axios'
import Todo from './Compoents/Todo';
import React, { useEffect, useState } from 'react'
function App() {
     

  const[data,setdata] =useState([]);
  const[item,setitem]=useState("");
  const itemdata= useRef();
  useEffect(()=>{
         
       const getdata=async()=>{
               const res=await axios.get("http://localhost:8080/api/todo");
               console.log(res.data);
               setdata([...res.data]);

        }

        getdata();
  },[item])
    

   
     
    async function handle()
    {
      let currdata=itemdata.current.value;

      setitem(currdata);
      
       let obj={
        userid:Date.now(),
        item: currdata
      }
       
      const res=await axios.post("http://localhost:8080/api/todo",obj);
      console.log(res.data);
      setitem("");
      itemdata.current.value="";
    }
  return (
    <>
    <div className="App">
       <div>Todo List</div>
      <div>
         <input type="text"  ref={itemdata} /><br></br>
         <button onClick={handle}>ADD</button>
      </div>
       
       
    </div>
      <Todo data={data}/>
    </>
  );
}

export default App;
