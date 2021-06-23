import { Link } from "react-router-dom";
import "./estilos.css";
import imagem from "../../assets/img/produto.jpeg";
const CardProdutos = (props) => {
    return (
        <div className="card">
            <img src={imagem} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Nome Produto</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Preço</li>
            </ul>
            <div className="card-body">
                <Link to={`/produto/${props.id}`}>Ver detalhes</Link>
            </div>
            <button className="btn btn-warning">
                <i className="fas fa-shopping-cart"></i> Adiconar ao Carrinho
            </button>
        </div>
    );
};

export default CardProdutos;
