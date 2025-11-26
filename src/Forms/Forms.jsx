import {useState} from "react";
import './Forms.css';
function Forms(){
    const [form,setForm]=useState({
        firstname:"",
        email:"",
        password:""
    });

    const handleChanges=(e)=>{
        const {name,value}=e.target;
        setForm({...form,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        fetch("http://localhost:3000/api/here2",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        }).then(response=>response.json({message:"USER ADDED SUCESFULLY"}))
    }

    return(
        <div>
            <h1>This is Form Component</h1>
            <div className="form-div">
                <form>
                <lable className='form-lable'>First Name</lable>
                <input type="email" className='form-input' name="firstname" value={form.firstname} onChange={handleChanges}/>
                <lable className='form-lable'>Email</lable>
                <input type="email" className='form-input' name="email" value={form.email} onChange={handleChanges}/>
                <lable  className='form-lable'>Password</lable>
                <input type="password" className='form-input' name="password" value={form.password} onChange={handleChanges}/>
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </form>
            </div>
        </div>
    );
}
export default Forms;