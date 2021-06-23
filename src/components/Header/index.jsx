import iconeUsuario from '../../assets/icons/usuario.svg';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

import './estilos.css';

const Header = () => {
    return (
        <header>
            <img className="logo" src={logo} alt="Logo do e-commerce" />
            
            <Link to="/login">
                <img className="usuarioImg" src={iconeUsuario} alt="Icone de usuário" />
                <p>Faça login ou cadastre-se</p> 
            </Link>
            
        </header>
    )
}

export default Header;