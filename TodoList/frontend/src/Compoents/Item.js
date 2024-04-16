import React from 'react';
import axios from 'axios'

const Item = ({item}) => {
    
  async function hadleDelete(id)
  {
     let obj={"userid":id}
     console.log(obj);
         const res= await axios.delete("http://localhost:8080/api/todo",obj)
         console.log(res.data);
  }
  return (
    <div className='todo'>
        <label>{item.item}</label>
        <div>
             <label>✏️</label>
             <label onClick={()=>hadleDelete(item.userid)}>❌</label>
        </div>
    </div>
  )
}

export default Item