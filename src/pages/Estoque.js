import React from 'react';
import {MenuList} from '../helpers/ListaRemedios';
import Footer from '../components/Footer';
import Navbar from '../components/NavbarADM';
import Remedio from '../components/Remedio';
import '../styles/Estoque.css';

function Estoque(){
    return(
        <div>
            <Navbar />

            <div className = 'barraDePesquisa'>
                <form id='barraDePesquisa' method="POST">
                            <label hrmlfor = 'name'> Pesquisar Remédio: </label>
                            <input name='name' placeholder = 'insira o texto' type='text'/>
                </form>
            </div>

            <div className = 'menu'>
                <h1 className='menuTitle'> Gerenciar estoque </h1>
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
                            texto='Gerenciar Item'
                            link='/estoque/gerenciarItem'
                            />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Estoque;