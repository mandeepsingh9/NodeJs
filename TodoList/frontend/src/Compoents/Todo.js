import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios'
const Todo = () => {
            const[data,setdata] =  useState([]);

     useEffect(()=>{
            
          const getdata=async()=>{
                  const res=await axios.get("http://localhost:8080/api/todo");
                  console.log(res.data);
                  setdata([...res.data]);

           }

           getdata();
     },[data])
       
  return (
    <div>
         {
            data.map((item,key)=>(
                <Item key={item.userid} item={item}/>
            ))
         }
    </div>
  )
}

export default Todo