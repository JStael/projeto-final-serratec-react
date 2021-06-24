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
    <div className="container">
      <div className="row row-cols-2">
        <div className="col">
        <img src={imagem} alt={produto.nome}/>
        </div>
        <div className="col">
      <h1 className='produto'>{produto.nome}</h1>
      <h3 className="preco">R$ {produto.preco}</h3>
      <button>Adicionar ao carrinho</button>
      </div>
     <div className="row">
       
      <div className="col descricao collapse-show card card-body" >
      <p> <strong>Descrição do produto:</strong> <br/> <br/> {produto.descricao}</p>
      </div>
      </div>
     
      </div>
    </div>
    
    </form>
  )
}
export default Produto