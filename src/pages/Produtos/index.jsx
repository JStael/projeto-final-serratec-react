import CardProdutos from "../../components/CardProdutos";
import "./estilos.css";
const Produtos = () => {
    // const [produtos, setProdutos] = useState([]);

    // const getProdutos = () => {
    //     http.get("produtos")
    //         .then((responta) => setProdutos(responta.data))
    //         .catch((erro) => console.log(erro));
    // };
    // useEffect(() => {
    //     getProdutos();
    // }, []);
    // console.log(produtos);

    return (
        <div className="container">
            <div className="row">
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
            </div>
        </div>
    );
};

export default Produtos;
