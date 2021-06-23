import Card from '../../components/CardCategoria';
import Logo from '../../components/Logo';
import imagemLogo from '../../assets/img/logo_petshop.png';
import { useState, useEffect } from 'react';
import http from "../../components/http";

const Categorias = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const [categorias, setCategorias] = useState([]);

  const obterCategorias = () => {
    http.get('categorias')
      .then(response => {
        setCategorias(response.data);
      }).catch(erro => console.log(erro))
  }

  useEffect(() => {
    obterCategorias();
  }, [])

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <h1>Categorias</h1>
    <Card id={'item.id'} nome={'item.nome'} url={'produtos'}/>
    <Card id={'item.id'} nome={'item.nome'} url={'produtos'}/>
    <Card id={'item.id'} nome={'item.nome'} url={'produtos'}/>
    {/* {categorias.map((item) =>
      <Card key={item.id} id={item.id} nome={item.nome} url={'produtos'}/>
    )} */}
  </div>

  )

}

export default Categorias;