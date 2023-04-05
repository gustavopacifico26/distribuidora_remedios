import React from 'react';

function Remedio({name, hospital, quantidade, data, status}){
    return(
        <div className = 'remedio'>
            <h1> {name} </h1>
            <p> {hospital} </p>
            <p> {quantidade} </p>
            <p>{data}</p>
            <p>{status}</p>
            <button> LIBERAR PEDIDO </button>
        </div>
    )
}

export default Remedio;