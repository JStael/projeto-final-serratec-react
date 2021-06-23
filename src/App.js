import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import './App.css';
<<<<<<< HEAD
import Login from '../src/pages/Login'
import Produto from './pages/Produto';
=======
import Login from '../src/pages/Login';
import Carrinho from './pages/Carrinho';
>>>>>>> 6799b542bdf5dc8023f73729e866b55ac4225c3e

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
<<<<<<< HEAD
          <Route path="/produto/:id">
            <Produto/>
=======
          <Route path="/carrinho">
            <Carrinho />
>>>>>>> 6799b542bdf5dc8023f73729e866b55ac4225c3e
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
