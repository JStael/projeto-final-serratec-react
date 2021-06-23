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
import Produto from './pages/Produto';
import Categorias from "./pages/Categorias";

function App() {
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
        {
            titulo: "Cadastre-se",
            link: "/clienteCadastro",
        },
        {
            titulo: "Login",
            link: "/login",
        },
    ];
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Navbar navbar={menu} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/clienteCadastro">
                        <ClienteCadastrar />
                    </Route>
                    <Route path="/clienteEditar">
                        <ClienteEditar />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/carrinho">
                        <Carrinho />
                    </Route>
                    <Route path="/produtos">
                        <Produtos />
                    </Route>
                    <Route path='/produto/:id'>
                        <Produto/>
                    </Route>
                    <Route path="/categorias">
                        <Categorias />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
