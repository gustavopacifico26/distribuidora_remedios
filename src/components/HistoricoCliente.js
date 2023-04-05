import React from 'react';

function HistoricoCliente({name, hospital, quantidade, data, status}){
    return(
        <div className = 'remedio'>
            <h1> {name} </h1>
            <p> {hospital} </p>
            <p> {quantidade} </p>
            <p>{data}</p>
            <p>{status}</p>
        </div>
    )
}

export default HistoricoCliente;