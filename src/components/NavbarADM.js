import Logo from '../assets/logo_distribuidora2.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar(){
    return(
        <div className ='navbar'>

            <div className='leftSide'>
                <img src={Logo} />
            </div>

            <div className='rightSide'>
                <Link to='/homeADM'> Home </Link>
                <Link to='/estoque'> Estoque </Link>
                <Link to='/gerenciarSolicitações'> Solicitações </Link>
                <Link to='/cadastrarRemedio'> Cadastrar Remedio </Link>
                <Link to='/cadastrarHospital'> Cadastrar Hospital </Link>
                <button>
                    <ReorderIcon></ReorderIcon>
                </button>
            </div>

        </div>
    );

}

export default Navbar;