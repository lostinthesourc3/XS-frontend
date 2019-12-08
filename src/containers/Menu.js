import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component{
    render(){
        return(
            <div>               
                <ul>
                    <li><NavLink to = "/blog" activeStyle = {{color: "#44C5E5"}} style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active"> BLOG </NavLink></li>
                    <li><NavLink to = "/contact" activeStyle = {{color: "#44C5E5"}} style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active"> CONTACT </NavLink></li>
                </ul>               
            </div>
        )
    }
}

export default Menu