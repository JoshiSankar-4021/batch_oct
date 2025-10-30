import {useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
function Forms(){
    const [formdata,setFormdata]=useState({
        email:'',
        password:''
    })
    const handlechanges=(e)=>{
        const {name,value} = e.target;
        setFormdata((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata);
    }

    return(
    <div>
        <h1>FORMS</h1>
        <form onSubmit={handlesubmit}>
            <lable>Email</lable>
            <input type="email" name="email" value={formdata.email} onChange={handlechanges}/>
            <lable>Password</lable>
            <input type="password" name="password" value={formdata.password} onChange={handlechanges}/>
            <input type="submit"/>
            <button onClick={handlesubmit}>print</button><br/>
            <NavLink to='/'>Counter nav link</NavLink><br/>  
            <Link to='/'>Counte link</Link>
        </form>
    </div>)
}
export default Forms;