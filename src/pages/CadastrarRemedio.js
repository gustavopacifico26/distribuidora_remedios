import React from 'react';
import Image from '../assets/remedios.jpeg';
import Footer from '../components/Footer';
import Navbar from '../components/NavbarADM';
import '../styles/CadastrarRemedio.css';

function CadastrarHospital(){
    return(

        <div className = 'page'>
            <Navbar />
            <div className = 'cadastrarRemedio'>

                <div className = 'leftSide' style = {{ backgroundImage: `url(${Image})` }}>

                </div>

                <div className = 'rightSide'>
                    <h1> Faça o cadastro do remédio aqui </h1>
                    <form id='nomeHospital' method="POST">
                        <label hrmlfor = 'name'> Nome do remédio: </label>
                        <input name='name' placeholder = 'insira o texto' type='text'/>
                        <label hrmlfor = 'quantidade'> Quantidade do remédio: </label>
                        <input name='quantidade' placeholder = 'insira o texto' type='text'/>
                        <label hrmlfor = 'principio'> Princípio ativo: </label>
                        <input name='principio' placeholder = 'insira o texto' type='text'/>
                        <label hrmlfor = 'tipo'> Tipo: </label>
                        <input name='tipo' placeholder = 'insira o texto' type='text'/>
                        <label hrmlfor = 'preco'> Preço: </label>
                        <input name='preco' placeholder = 'insira o texto' type='text'/>

                        <button type = 'submit'> Cadastrar Remédio </button>

                    </form>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default CadastrarHospital;