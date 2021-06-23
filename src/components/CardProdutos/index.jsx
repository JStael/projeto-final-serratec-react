import { Link } from "react-router-dom";
import "./estilos.css";
const CardProdutos = () => {
    return (
        <div class="card">
            <img
                src="https://www.redeicm.org.br/carmo/wp-content/uploads/sites/5/2019/01/Livro.jpg"
                class="card-img-top"
                alt="..."
            ></img>
            <div class="card-body">
                <h5 class="card-title">Nome Produto</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Preço</li>
            </ul>
            <div class="card-body">
                <Link to={`/produtos/`}>Ver detalhes</Link>
            </div>
            <button class="btn btn-info">Adicionar ao Carrinho</button>
        </div>
    );
};

export default CardProdutos;
