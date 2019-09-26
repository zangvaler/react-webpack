import React from 'React';
import {NavLink} from 'react-router-dom';
import  './nav.css';


const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to='/' className="blue">Page1</NavLink> |&nbsp;
            <NavLink to='/Page2/ILoveWeb' style={{color:'red',fontSize:'50px'}}>Page2</NavLink> |&nbsp;
            {/* activeClassName就是设置激活状态的样式 */}
            <NavLink to='/Page3' activeClassName='active'>Page3</NavLink>|&nbsp;
            <NavLink to='/react' activeClassName='active'>404</NavLink>|&nbsp;
            <NavLink to='/redirect' activeClassName='active'>Redirect</NavLink>
        </div>
    </div>
    )
       
    export default NavBar;