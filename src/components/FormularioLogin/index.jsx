import http from "../http";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./estilos.css";
import { useHistory } from "react-router-dom";

import logoLogin from "../../assets/img/logoLogin.png";

const FormularioLogin = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const manipularEmail = (ev) => setEmail(ev.target.value);
    const manipularSenha = (ev) => setSenha(ev.target.value);
    const history = useHistory();

    const logar = (ev) => {
        ev.preventDefault();
        const usuario = {};
        usuario.user = email;
        usuario.pass = senha;

        http.post("auth", usuario)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                onLogin(response.data.user, response.data.access_token)
                history.push('/')
            })
            .catch((erro) => console.log(erro));
    };
    return (
        <form className="formLogin" onSubmit={logar}>
            <img className="logoLogin" src={logoLogin} alt="Logo e-commerce" />
            <h3>Login</h3>
            <label>E-mail</label>
            <input type="text" value={email} onChange={manipularEmail} />
            <label>Senha</label>
            <input type="password" value={senha} onChange={manipularSenha} />
            <button>Login</button>
            <p>
                Ainda não é cadastrado?{" "}
                <Link to="/cliente-cadastro">
                    <em>Cadastre-se aqui!</em>
                </Link>
            </p>
        </form>
    );
};

export default FormularioLogin;
