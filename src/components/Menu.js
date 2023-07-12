import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import './Menu.css'


export default function Menu() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    function dispararMenu() {
        setMenuAtivo(!menuAtivo);     
    }

    return (
        <header className="w3-top w3-margin-botton">
            <nav className="w3-bar menu">
                <a href="#" className="w3-bar-item w3-button w3-hide-large w3-hide-medium" onClick={() => dispararMenu()}>&#9776;</a>	
                <a href="#" className="w3-bar-item w3-button">
                    <i className="fa fa-home w3-xlarge"></i>			
                </a>
                <Link to="/" className="w3-bar-item w3-button w3-hide-small menu-link">CATÁLOGO DE LIVROS</Link>
                <Link to="/cadastrar" className="w3-bar-item w3-button w3-hide-small menu-link">CADASTRAR LIVRO</Link>
                <br></br>
                <a href="#" className="w3-bar-item w3-button w3-right">
                    <i className="fa fa-search w3-xlarge"></i>	
                </a>	
            </nav>		
            <nav id="menu-mobile" className={"w3-bar-block w3-large w3-black w3-hide w3-hide-large w3-hide-medium"+ (menuAtivo ?" w3-show" :"")}>
            <Link to="/" className="w3-bar-item w3-button menu-mobile-link">CATÁLOGO DE LIVROS</Link>
            <Link to="/cadastrar" className="w3-bar-item w3-button menu-mobile-link">CADASTRAR LIVRO</Link>
            </nav>

        </header>

    )
}