import React from "react";
import "./styles-paginado.css";


export default function Paginado ({charactersPerPage, allInfo, paginado}){
    const pageNumbers = []

    for(let i = 0; i <=Math.ceil(allInfo/charactersPerPage)-1; i++){
        pageNumbers.push(i+1)
    }

    return(
        <div>
            <div>
                <div>
        <nav id="menu">  
            <ul>
                {
                    pageNumbers &&
                        pageNumbers.map(page => (
                            <li key={page}>
                            <button class="nav-btn" onClick={() => paginado(page)}>{page}</button>
                            </li>
                        ))    
                }
            </ul>
            
            
        </nav>
        </div>
        </div>
        </div>
    )
}