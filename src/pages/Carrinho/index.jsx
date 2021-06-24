import "./estilos.css";
import logoCarrinho from "../../assets/img/carrinho.png";
import { Link } from "react-router-dom";
import { useState } from "react";

<<<<<<< HEAD
const Carrinho = ({pegarProdutos}) => {

    const formatter = new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const [carrinho, setCarrinho] = useState([])

    const headerPagina = () => {
      if (carrinho) return <p><i class="fas fa-shopping-cart"></i> Carrinho de compras</p>
      
      return (
        <>
          <img src={logoCarrinho} alt="Logo do carrinho de compras" />
          <p>Seu carrinho está vazio</p>
        </>
      )
    }

  return (
    <section>
      <div className="header">
        {headerPagina()}
      </div>
      <div>
       
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Quantidade</th>
              <th scope="col">Produto</th>
              <th scope="col">Preço</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {/* {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{formatter.format(produto.preco)}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-outline-info"
                    to={`/produtos/${produto.id}`}
                  >
                    editar
                  </Link>
                  {<button
                    type="button"
                    className="ml-2 btn btn-sm btn-outline-danger"
                    onClick={() => {
                      excluir(produto);
                    }}
                  >
                    excluir
                  </button>}
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
        <ul></ul>
      </div>
    </section>
  );
=======
const Carrinho = ({ produtos }) => {
    const formatter = new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL",
    });

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
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.quantidade}</td>
                                <td>{produto.nome}</td>
                                <td>{formatter.format(produto.preco)}</td>
                                <td>
                                    <Link
                                        className="btn btn-sm btn-outline-info"
                                        to={`/produtos/${produto.id}`}
                                    >
                                        editar
                                    </Link>
                                    {
                                        <button
                                            type="button"
                                            className="ml-2 btn btn-sm btn-outline-danger"
                                            onClick={() => {
                                                // excluir(produto);
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
                <ul></ul>
            </div>
        </section>
    );
>>>>>>> 6af1f9eec195159ac598dfb90b1da7ad5ae27fbb
};

export default Carrinho;
