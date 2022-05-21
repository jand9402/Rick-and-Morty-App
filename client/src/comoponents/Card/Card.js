import React from "react";
import "./styles-card.css";

export default function Card({ id, name, image, species, origin }) {

  
    return (
        <div className="card" >
            <div className="card-body">
                <img className="img-card" src={image} alt="dog img" />
                <h2 className="card-title">{name}</h2>
                <div className="textto_card">
                <p className="card-text">Especie: {species}</p>
                <p className="card-text">Origen: {origin}</p>
                </div>
            </div>
        </div>
    )
}