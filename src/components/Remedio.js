import React from 'react';
import { Link } from 'react-router-dom';

function Remedio({image, name, principio, tipo, quantidade, preco, texto, link}){
    return(
        <div className = 'remedio'>
            <div style = {{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> {principio} </p>
            <p> {tipo} </p>
            <p> {quantidade} </p>
            <p> {preco} </p>
            <button> {texto} </button>
        </div>
    )
}

export default Remedio;