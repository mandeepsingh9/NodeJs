import React from 'react';
import axios from 'axios'

const Item = ({item}) => {
    
  async function hadleDelete(id)
  {
    
    
         const res= await axios.delete("http://localhost:8080/api/todo",{ data: { userid: id } })
         console.log(res.data);
         window.location.reload();
  }
  return (
    <div className='todo'>
        <label>{item.item}</label>
        <div>
             <label >✏️</label>
             <label onClick={()=>hadleDelete(item.userid)}>❌</label>
        </div>
    </div>
  )
}

export default Item