import React from 'react';
import {HistoricoList} from '../helpers/ListaHistorico';
import Footer from '../components/Footer';
import Navbar from '../components/NavbarCliente';
import Produto from '../components/HistoricoCliente';

function Historico(){
    return(
        <div>
            <Navbar />
            <div className = 'menu'>
                <h1 className='menuTitle'> Histórico de Pedidos </h1>
                <div className = 'menuList'> 
                    <div className='menuItem'>
                        {HistoricoList.map((menuItem, key) => {
                            return <Produto
                            key={key}
                            name={menuItem.name}
                            quantidade={menuItem.quantidade}
                            hospital={menuItem.hospital}
                            data={menuItem.data}
                            status={menuItem.status}
                            />
                        })}

                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default Historico;