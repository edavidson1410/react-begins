import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../imgs/reactLogo.png"

const links = ["", "counter", "weather"]

export const NavBar = () => {

    return (
        <div className="navBar">
            {/* <img src={logo} alt="react Logo" />
            {links.map((link) => (
                <Link key={link} to="/">{link}</Link>
            ))} */}
            
            <img src={logo} alt="react Logo" />
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/weather">Weather</Link>
        </div>
    )
}