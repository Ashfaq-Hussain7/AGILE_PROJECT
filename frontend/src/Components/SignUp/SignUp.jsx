import React from "react" ;
import './SignUp.css';

import user_icon from '../Assets/SignUp-1.png'
import email_icon from '../Assets/SignUp-2.png'
import password_icon from '../Assets/SignUp-3.png'

const SignUp = () => {
    return (
    <div className="background">

        <div className="container">
            <div className="header">
                <div className="text"  >SIGN UP </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} width='30' alt="" />
                    <input type="name" placeholder="User Name"/>
                </div>

                <div className="input">
                    <img src={email_icon} width='30' alt="" />
                    <input type="email" placeholder="Email"/>
                </div>

                <div className="input">
                    <img src={password_icon} width='30' alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="input">
                    <img src={password_icon} width='30' alt="" />
                    <input type="password" placeholder="Re-enter Password"/>
                </div>
            </div>

            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
        </div>
    </div>
    )
}

export default SignUp