import "./estilos.css";
import logoCarrinho from "../../assets/img/carrinho.png";
import { useHistory } from "react-router-dom";
import http from "../../components/http";

const Carrinho = ({ produtos, removerProduto }) => {
    const formatter = new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL",
    });

    const history = useHistory();

    const novoPedido = () => {
        const pedido = {
            email: localStorage.getItem("email"),
            itens: [],
        };
        produtos.forEach((item) => {
            pedido.itens.push({
                codigoProduto: item.codigo,
                quantidade: item.quantidade,
            });
        });
        console.log(pedido);

        http.post("pedido", pedido)
            .then((response) => {
                console.log(response.data);
                history.push("/finalizar/" + response.data);
            })
            .catch((erro) => {
                console.log("Algo deu errado");
                console.log(erro);
            });
    };

    return (
        <section>
            <div className="header">
                <img src={logoCarrinho} alt="Logo do carrinho de compras" />
                <p>Seu carrinho está vazio </p>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Código</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto, indice) => (
                            <tr
                                key={produto.id}
                                numeroPedido={produto.numeroPedido}
                            >
                                <td>{produto.quantidade}</td>
                                <td>{produto.nome}</td>
                                <td>{formatter.format(produto.preco)}</td>
                                <td>{produto.codigo}</td>
                                <td>
                                    {
                                        <button
                                            type="button"
                                            className="ml-2 btn btn-sm btn-outline-danger"
                                            onClick={() => {
                                                removerProduto(indice);
                                            }}
                                        >
                                            excluir
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Valor total de {formatter.format()}</h3>
                <button type="button" onClick={novoPedido}>
                    Finalizar Pedido
                </button>
                <ul></ul>
            </div>
        </section>
    );
};

export default Carrinho;
