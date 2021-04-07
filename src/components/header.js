import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/logo.png'  
import '../styles/header.css'
const Header = ({ siteTitle }) => {
  console.log(logo)
  
  return (
    <header>
      <div className="headergrid">
    <img className="logo grid0" src={logo} alt="Site logo" />
    <div className="menus gridb">
    <button className="login">Log in</button> 
    <button className="signup">Sign up</button>
    </div>
    </div>
    </header>
)
}
export default Header
