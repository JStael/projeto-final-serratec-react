import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import imagem from './ps5.jpg'
import './estilos.css'
const Produto = () => {
  const { id } = useParams()
  const [produto, setProduto] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8000/produtos/'+id)
      .then(response => setProduto(response.data))
  }, [id])

  const adicionarCarrinho=(evento)=>{
    evento.preventDefault();
    console.log('adicionado')
  }

  return (
    <form onSubmit={adicionarCarrinho} >
    <div>
        <img src={imagem} alt={produto.nome}/>
        
      <h1 className='produto'>{produto.nome}</h1>
      <h1 className="preco">R$ {produto.preco}</h1>
      <p>{produto.descricao}</p>
    </div>
    <button>Adicionar ao carrinho</button>
    </form>
  )
}
export default Produto