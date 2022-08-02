import {NavLink} from "react-router-dom"


const Nav=()=>{
    
    
    
    return (
        <nav>      
            <h1></h1>  
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/restaurants'>Restaurants</NavLink>
                <NavLink to='/add'>Add a Restaurant</NavLink>    
            </div>         
        </nav>
    )
}

export default Nav 
