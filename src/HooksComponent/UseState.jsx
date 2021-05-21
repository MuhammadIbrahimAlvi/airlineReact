import React, { useEffect, useState } from 'react';
import instance from '../axios-instance'
const UseState = (props) => {
  let [count,setCount]=useState(0);
 let changeClickCount=()=>{
        setCount(++count);
        
  }
  useEffect(()=>{
    document.title=`You Clicked Button ${count} times`;

        const counterpost={
            counter:count
        }
        instance.post('/count.json',counterpost).then(res=>console.log(res)).catch(err=>console.log("Something went wrong"+err));

})
    return (

        <React.Fragment>
            <p>{count}</p>
          <button onClick={changeClickCount}>Click</button>
        </React.Fragment>
    )
}
export default UseState;
// const [inputState,setinputState] = useState('');
// const [todo,setTodo] = useState([]);
// let inputChangeHandler = (e) => {
//     setinputState(e.target.value);
// }
// let addTodo=()=>{
//    setTodo(todo.push(inputState));
//    console.log(todo)
// }
//   <label htmlFor="inputtext">Todo</label>
// <input onChange={inputChangeHandler} type="text" name="Text Field" placeholder="Enter Text" id="inputtext" value={inputState} />
// <button onClick={addTodo} type="button">Add</button>
// <ul>

//     {console.log(inputState)}
//     {todo.map=(val,ind)=><li key={ind}>{val}</li>}
// </ul>