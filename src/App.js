import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ClienteCadastrar from "./pages/ClienteCadastrar";
import ClienteEditar from "./pages/ClienteEditar";
import Home from "./pages/Home";
import "./App.css";
import Login from "../src/pages/Login";
import Carrinho from "./pages/Carrinho";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";
import Footer from "../src/components/Footer";
import Categorias from "./pages/Categorias";
import { useState } from "react";

import Pagina404 from "./pages/Pagina404";

function App() {
    const [token, setToken] = useState("");
    const onLogin = (token) => {
        setToken(token);
    };

    const logout = () => {
        setToken("");
    };

    const menu = [
        {
            titulo: "Inicio",
            link: "/",
        },
        {
            titulo: "Produtos",
            link: "/produtos",
        },
        {
            titulo: "Categorias",
            link: "/categorias",
        },
    ];
    return (
        <div className="App">
            <BrowserRouter>
                <Header token={token} aoLogout={logout} />
                <Navbar navbar={menu} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cliente-cadastro">
                        <ClienteCadastrar />
                    </Route>
                    <Route path="/cliente-editar">
                        <ClienteEditar />
                    </Route>
                    <Route path="/login">
                        <Login onLogin={onLogin} />
                    </Route>
                    <Route path="/carrinho">
                        <Carrinho />
                    </Route>
                    <Route path="/produtos">
                        <Produtos />
                    </Route>
                    <Route path="/produto/:id">
                        <Produto />
                    </Route>
                    <Route path="/categorias">
                        <Categorias />
                    </Route>
                    <Route path="/categorias">
                        <Categorias />
                    </Route>
                    <Route>
                        <Pagina404 />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
