import { NavLink } from "react-router";

function NavigationBar() {
    return (
        <div style={{ display: 'flex', justifyContent:'space-evenly'}}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? 'orange' : 'red',
              })}
            
             >
                Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? 'orange' : 'red',
              })}
            
              >
                About
            </NavLink>
            <NavLink
              to="/other/route/curve"
              style={({ isActive }) => ({
                color: isActive ? 'orange' : 'red',
              })}
              
              >
                Other Routing
            </NavLink>

        </div> 
    );
}

export default NavigationBar;