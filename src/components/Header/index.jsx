import iconeUsuario from '../../assets/icons/usuario.svg';
import logo from '../../assets/img/logo.png';
import { Link, useHistory } from 'react-router-dom';

import './estilos.css';

const Header = ({nome, token, onLogout}) => {

    const history = useHistory()

    const logout = () => {
        history.push('/login')
        onLogout()
          
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
    }

    const verificarLogin = () => {
        if (token) {
            return (
                <div className="btn-group usuarioLogado">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <em>Olá,</em> <strong>{nome}</strong>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                        <li><Link to="" className="dropdown-item" href="#"><i className="fas fa-user-edit"></i> Editar cadastro</Link></li>
                        <li><Link to="" className="dropdown-item" href="#"><i className="fas fa-shopping-basket"></i> Meus pedidos</Link></li>
                        <li><a className="dropdown-item" href="#" onClick={logout}><i className="fas fa-sign-out-alt"></i> Sair</a></li>
                    </ul>
                </div>
            )
        } 
        return (
            <Link to="/login">
            <img className="usuarioImg" src={iconeUsuario} alt="Icone de usuário" />
            <p>Faça login ou cadastre-se</p> 
        </Link>
        )
    }

    return (
        <header>
            <img className="logo" src={logo} alt="Logo do e-commerce" />
            
            <>
                {verificarLogin()}
            </>
            
        </header>
    )
}

export default Header;