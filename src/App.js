import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import './App.css';
import Login from '../src/pages/Login'
import Produto from './pages/Produto';

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
          <Route path="/produto/:id">
            <Produto/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
