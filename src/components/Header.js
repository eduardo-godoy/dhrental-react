import React from "react";
import Logo from "../assets/images/logo.jpg"
import Avatar from "../assets/images/avatar.jpg"
import { Link } from "react-router-dom";

function Header(){

    return(

        <>

            <section className="section-header">
                <Link to='/'><img src={Logo} className="logo" alt="logo"/></Link>
                <p className="titulo-admin">Bienvenido Admin!</p>
                <img src={Avatar} className="avatar" alt="Avatar"/>
            </section>
        
        </>

    )
}

export default Header;