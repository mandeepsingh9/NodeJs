
import Item from './Item'
import axios from 'axios'
const Todo = ({data}) => {
            
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