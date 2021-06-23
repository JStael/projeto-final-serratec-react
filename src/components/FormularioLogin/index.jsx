//import axios from "axios"
import { useState } from "react"

const FormularioLogin = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const manipularEmail = ev => setEmail(ev.target.value)
    const manipularSenha = ev => setSenha(ev.target.value)

    const logar = (ev) => {
        ev.preventDefaul()
        const usuario = {}
        usuario.email = email
        usuario.senha = senha

        // axios.post('http://localhost:8000/auth/login', usuario)
        // .then(response => console.log(response.data))
        // .catch(erro => console.log(erro))
    }
    return (

        <form className='formLogin' onSubmit={logar}>
            <h1>Login</h1>

            <label>E-mail</label>
            <input type="text" value={email} onChange={manipularEmail} />
            <label>Senha</label>
            <input type="password" value={senha} onChange={manipularSenha} />
            <button>Login</button>
        </form>
    )

}

export default FormularioLogin