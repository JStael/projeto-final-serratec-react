import http from "../../components/http";
import { useState } from "react";

const NovaCategoria = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    const salvar = (evento) => {
        evento.preventDefault();
        const categoria = {
            nome: nome,
            preco: descricao,
        };
        http.post("categorias", categoria)
            .then((response) => {
                console.log(response.data);
            })
            .catch((erro) => {
                console.log("Algo deu errado");
                console.log(erro);
            });
    };

    const manipuladorNome = (evento) => {
        setNome(evento.target.value);
    };

    const manipuladorDescricao = (evento) => {
        setDescricao(evento.target.value);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1>Adicionar Descrição</h1>
                <form onSubmit={salvar}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            className="form-control"
                            value={nome}
                            onChange={manipuladorNome}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <textarea
                            className="form-control"
                            cols="30"
                            rows="10"
                            value={descricao}
                            onChange={manipuladorDescricao}
                        ></textarea>
                    </div>
                    <button className="btn btn-outline-dark btn-block">
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NovaCategoria;
