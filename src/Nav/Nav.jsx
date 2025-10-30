import { NavLink } from "react-router-dom";
function Nav(){
    return(
        <div>
            <NavLink to='/'>COUNTER</NavLink><br/>
            <NavLink to='/form'>Form</NavLink><br/>
            <NavLink to='/padding'>Padding & inline styling</NavLink><br/>
            <NavLink to='/border'>Border & internal styling</NavLink><br/>
            <NavLink to='/Margin'>Margin & External styling</NavLink>
        </div>
    )
}
export default Nav;