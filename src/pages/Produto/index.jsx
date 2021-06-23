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
  return (
    <div>
        <img src={imagem} alt={produto.nome}/>
        
      <h1 className='produto'>{produto.nome}</h1>
      <h1 className="preco">R$ {produto.preco}</h1>
      <p>{produto.descrecao}</p>
    </div>
  )
}
export default Produto