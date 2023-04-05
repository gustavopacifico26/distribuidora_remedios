import React from 'react';
import {MenuList} from '../helpers/ListaPedidos';
import {MenuList2} from '../helpers/PedidosLiberados';
import Footer from '../components/Footer';
import Navbar from '../components/NavbarADM';
import Pedidos from '../components/Pedidos';
import PedidosLiberados from '../components/PedidosLiberados';

function GerenciarSolicitações(){
    return(
        <div>
            <Navbar />
            <div className = 'menu'>
                <h1 className='menuTitle'> Gerenciar Solicitações </h1>
                <div className = 'menuList'> 
                    <div className='menuItem'>
                        {MenuList.map((menuItem, key) => {
                            return <Pedidos
                            key={key}
                            name={menuItem.name}
                            quantidade={menuItem.quantidade}
                            hospital={menuItem.hospital}
                            data={menuItem.data}
                            status={menuItem.status}
                            />
                        })}
                        {MenuList2.map((menuItem, key) => {
                            return <PedidosLiberados
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
            </div>
            <Footer />
        </div>
    )
}

export default GerenciarSolicitações