import http from "../../components/http";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditaDescricao = () => {
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        http.get("categoria/" + id).then((response) => {
            setNome(response.data.nome);
            setDescricao(response.data.preco);
        });
    }, [id]);

    const salvar = (evento) => {
        evento.preventDefault();
        const categoria = {
            nome: nome,
            preco: descricao,
            id: id,
        };
        http.put("categorias/" + id, categoria)
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
                <h1>Editar Categoria</h1>
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

export default EditaDescricao;
