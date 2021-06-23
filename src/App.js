import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import './App.css';
<<<<<<< HEAD
import Login from '../src/pages/Login'
import Produto from './pages/Produto';
=======
import Produto from './pages/Produto';
import Login from '../src/pages/Login';
>>>>>>> 9cb2c80e90cbe871417eec0f7433c770844c0c36
import Carrinho from './pages/Carrinho';

function App() {

  const menu = [
    {
      titulo: 'Inicio',
      link: '/'
    },
    {
      titulo: 'Produtos',
      link: '/produtos'
    },
    {
      titulo: 'Cadastre-se',
      link: '/cadastro'
    },
    {
      titulo: 'Login',
      link: '/login'
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
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/produto/:id">
            <Produto/>
          </Route>
          <Route path="/carrinho">
            <Carrinho />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
