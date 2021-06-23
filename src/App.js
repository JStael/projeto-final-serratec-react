import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cadastro from "./pages/ClienteCadastrar";
import Home from "./pages/Home";
import "./App.css";
import Login from "../src/pages/Login";
import Carrinho from "./pages/Carrinho";
import Produtos from "./pages/Produtos";
import Produto from './pages/Produto';
import Footer from '../src/components/Footer';

function App() {
    const menu = [
        {
            titulo: "Inicio",
            link: "/",
        },
        {
            titulo: "Produtos",
            link: "/produtos",
        }
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
                    <Route path="/cadastro">
                        <Cadastro />
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
                </Switch>
            </BrowserRouter>
                <Footer />
        </div>
    );
}

export default App;
