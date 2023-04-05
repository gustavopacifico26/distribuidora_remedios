import React from 'react';
import Image from '../assets/banner2-remedios.png';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import '../styles/Login.css'

function Login() {
  return (
    <div>
        <NavbarLogin/>
        <div className = 'login'>

            <div className = 'leftSide' style = {{ backgroundImage: `url(${Image})` }}>
            </div>

            <div className = 'rightSide'>
                <h1> Bem vindo(a) a distribuidora SEMSA! Faça o login a seguir </h1>
                <form id='nomeHospital' method="POST">
                    <label hrmlfor = 'name'> Email: </label>
                    <input name='name' placeholder = 'insira o texto' type='text'/>
                    <label hrmlfor = 'email'> Senha: </label>
                    <input name='email' placeholder = 'insira o texto' type='email'/>

                    <button type = 'submit'> Fazer Login </button>

                </form>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login;
