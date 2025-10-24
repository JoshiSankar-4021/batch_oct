import {useState} from 'react';
function Counter(){
    const [Count,setCount]=useState(0);
    //const [var,setvar]=usestate(0)
    //arrow function
    var increasecount=()=>{
        setCount(Count+1);
    }
    var decreasecount=()=>{
        setCount(Count-1);
    }

    function increase(){
        setCount(Count+1);
    }
    function decrease(){
        setCount(Count-1);
    }

    return(
    <div>
       <h1>Counter</h1>
       <h1>{Count}</h1>
       <button onClick={()=>{setCount(Count+1)}}>Increment</button>
       <button onClick={()=>{setCount(Count-1)}}>Decrement</button><br/>
       <button onClick={increasecount}>Increment</button>
       <button onClick={()=>{decreasecount()}}>Decrement</button><br/>
       <button onClick={increase}>Increment</button>
       <button onClick={()=>{decrease()}}>Decrement</button>
    </div>

    );
}
export default Counter;
//component createion,use state,traditional functions,ananymous functions,arrow functions