import FormularioLogin from '../../components/FormularioLogin'
import './estilos.css'
import Logo from '../../components/Logo'
import imagemLogo from '../../assets/img/logo_petshop.png'

const Login = () => {
    
    const logo = {
        src: imagemLogo,
        alt:'Imagem da logo PetShop',
        titulo: 'PetShop Serratec'
    }
  
  return(<>
        {/* <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo}/> */}
        <FormularioLogin />
    </>
    )

    }




export default Login