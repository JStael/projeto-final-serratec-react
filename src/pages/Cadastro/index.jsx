import './estilos.css'
import CardFormulario from '../../components/CardFormulario';
import Logo from '../../components/Logo';
import imagemLogo from '../../assets/img/logo_petshop.png';
import http from "../../components/http";
import { useState } from "react";

const Cadastro = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');

  const efetuarCadastro = (evento) => {
    evento.preventDefault();
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
      endereco: endereco
    }
    http.post('auth/register', usuario)
    .then(response => {
      console.log(response.data);
      localStorage.setItem('token', response.data.access_token)
    })
    .catch(erro => {
      console.log('Algo deu erro');
      console.log(erro);
    })
  }

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <CardFormulario>
      <h1>Página de Cadastro</h1>
      <form className="formCadastro" onSubmit={efetuarCadastro}>
        <div>
          <label>Nome</label>
          <input required type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input required type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
        </div>
        <div>
          <label>Senha</label>
          <input required type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
        </div>
        <div>
          <label>Endereco</label>
          <input required type="text" value={endereco} onChange={(evento) => setEndereco(evento.target.value)} />
        </div>
        <button>Salvar</button>
      </form>
    </CardFormulario>
  </div>
  )
}

export default Cadastro;