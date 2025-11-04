import { NavLink } from "react-router-dom";
import './Nav.css';
function Nav(){
    return(
        <div className="navdiv">
            <NavLink to='/' className="navlink">COUNTER</NavLink>
            <NavLink to='/form' className="navlink">Form</NavLink>
            <NavLink to='/padding' className="navlink">Padding & inline styling</NavLink>
            <NavLink to='/border'className="navlink">Border & internal styling</NavLink>
            <NavLink to='/Margin'className="navlink">Margin & External styling</NavLink>
            <NavLink to='/Box' className="navlink">Box Component</NavLink>
            <NavLink to='/Forms' className="navlink">Forms Component</NavLink>
            <NavLink to='/Rendering' className="navlink">Rendering</NavLink>
        </div>
    )
}
export default Nav;