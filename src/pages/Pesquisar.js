import React from 'react';
import {MenuList} from '../helpers/ListaRemedios';
import Footer from '../components/Footer';
import Navbar from '../components/NavbarCliente';
import Remedio from '../components/Remedio';
import "../styles/Pesquisar.css";

function Pesquisar(){
    return(
        <div>
            <Navbar />


            <div className = 'menu'>
                <h1 className='menuTitle'> Remedios Disponíveis</h1>
                <div className = 'menuList'> 
                    <div className='menuItem'>
                        {MenuList.map((menuItem, key) => {
                            return <Remedio 
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            principio={menuItem.principio}
                            tipo={menuItem.tipo}
                            quantidade={menuItem.quantidade}
                            preco={menuItem.preco}
                            texto='Solicitar Remédio'
                            />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pesquisar
