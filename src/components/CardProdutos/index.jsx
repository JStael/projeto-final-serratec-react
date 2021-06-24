import { Link } from "react-router-dom";
import "./estilo.css";
import imagem from "../../assets/img/produto.jpeg";
const CardProdutos = (props) => {
    const formatter = new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <div className="card cardProduto">
            <img src={imagem} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Nome Produto</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{formatter.format("Preço")}</li>
            </ul>
            <div className="card-body">
                <Link to={`/produto/${props.id}`}>Ver detalhes</Link>
            </div>
            <button className="btn btn-warning btnAdicionar">
                <i className="fas fa-shopping-cart"></i> Adicionar ao Carrinho
            </button>
        </div>
    );
};

export default CardProdutos;
