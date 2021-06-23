import './estilos.css';
import logoCarrinho from '../../assets/img/carrinho.png';

const Carrinho = () => {
    return (
        <section>
            <div>
                <img src={logoCarrinho} alt="Logo do carrinho de compras" />
                <p>Seu carrinho está vazio :(</p>
            </div>
        </section>
    )
}

export default Carrinho;