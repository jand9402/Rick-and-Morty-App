import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";
import imagen_landing from '../../images/imagen_landing.png'



export default function Landing() {
    return (
        <div className="div-landing">

        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="imagen_landing" src={imagen_landing}/>
                </div>
                <div className="col">
                   <Link to="/home">
                    <button className="boton_landing">Get Started</button>
                    </Link> 
                </div>
            </div>
            
        </div>
        </div>


    )
}