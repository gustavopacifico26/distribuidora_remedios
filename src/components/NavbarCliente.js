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
                <Link to='/HomeCliente'> Home </Link>
                <Link to='/pesquisar'> Pesquisar </Link>
                <Link to='/histórico'> Histórico </Link>
                <button>
                    <ReorderIcon></ReorderIcon>
                </button>
            </div>

        </div>
    );

}

export default Navbar;