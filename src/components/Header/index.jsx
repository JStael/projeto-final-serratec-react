import iconeUsuario from '../../assets/icons/usuario.svg';
import { Link } from 'react-router-dom';

import './estilos.css';

const Header = () => {
    return (
        <header>
            <img src="" alt="" />
            
            <Link to="/login">
                <img className="usuarioImg" src={iconeUsuario} alt="Icone de usuário" />
                <p>Faça login ou cadastre-se</p> 
            </Link>
            
        </header>
    )
}

export default Header;