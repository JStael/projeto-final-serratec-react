import "./estilos.css";
import { Link } from "react-router-dom";

const CardCategoria = (props) => {
    return (
        <div className="card cardCategoria">
            <p>{props.nome}</p>
            <Link
                className="link btn btn-warning"
                to={`/${props.url}/${props.id}`}
            >
                Listar produtos da categoria
            </Link>
        </div>
    );
};

export default CardCategoria;
