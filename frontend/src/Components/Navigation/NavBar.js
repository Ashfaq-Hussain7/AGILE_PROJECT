import React,{useState} from "react";
//import HomePage from "./Home";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo2.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import './NavBar.css'
function NavBar(){

    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleNavbar = () => { 
        setOpenLinks(!openLinks);
    }

    return(
       <div className="navbar" >
            <div className=" leftside" id={openLinks ? "open" : "close" }>
                { <img src={logo} width={125} height={125} /> }
                <div className="hiddenlinks">
                    <Link to="/">Home</Link>
                    <Link to="/match">Matches</Link>
                    <Link to="/review">Review</Link>
                    <Link to="/replays">Highlights</Link>
                    <Link to="/Signup">Signup</Link>
                </div>
            </div>
            

            <div className=" rightSide">
                <Link to="/">Home</Link>
                <Link to="/match">Matches</Link>
                <Link to="/review">Review</Link>
                <Link to="/replays">Highlights</Link>
                <Link to="/Signup">SignUp</Link>
                <button onClick={toggleNavbar}>
                 <ReorderIcon/>
                </button>
            </div>
       </div>

    )
}

export default NavBar;