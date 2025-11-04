import {useState} from "react";
import './Forms.css';
function Forms(){
    const [form,setForm]=useState({
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
    }

    return(
        <div>
            <h1>This is Form Component</h1>
            <div className="form-div">
                <form>
                <lable className='form-lable'>Email</lable>
                <input type="email" className='form-input' name="email" value={form.email} onChange={handleChanges}/>
                <lable  className='form-lable'>Password</lable>
                <input type="password" className='form-input' name="password" value={form.password} onChange={handleChanges}/>
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <h1>{form.email}</h1>
            <h1>{form.password}</h1>
            </div>
        </div>
    );
}
export default Forms;