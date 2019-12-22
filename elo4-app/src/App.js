import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ComponentLogin from './Components/ComponenteLogin/Index'
import ComponenteFornecedor from './Components/ComponenteFornecedor/index'
import ComponenteFiltro from './Components/ComponenteFiltro/index'
import ComponenteLista from './Components/ComponenteLista/index'
import ComponenteCarrinho from './Components/ComponenteCarrinho/index'
import 'typeface-roboto';
import ComponenteHeader from './Components/ComponenteHeader/index'
import './Style.css';

/* paleta de cores: https://coolors.co/f29711-5ce1e6-2e86ab-a23b72-c73e1d */

const MainContainer = styled.div`
	display: flex;
	justify-content:center;
  flex-direction:column;

`;

const SubContainerLogin = styled.div`
  display: flex;
	justify-content:center;
  align-items:center;
  height:82vh;
 
`;

const SubContainerConsumidor = styled.div`
  display: flex;
`;
 
const SubContainer = styled.div`
  display: flex;
	justify-content:center;
  align-items:center;
  

`;


class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			pageSelector: "", //"fornecedorPage"  //consumidorPage
			mostraCarrinho: false,
      arrayProdutos: [],
      arrayProdutosTotal:[],
		}
	}

	/* functions */
	page =(page) =>{
		this.setState({
			pageSelector: page
		})
		if (page === 'consumidorPage') {
			this.pegarArrayProdutos()
		}
		
	}

	mostrarCarrinho = () => {
		const novoEstado = !this.state.mostraCarrinho
		this.setState({ mostraCarrinho: novoEstado})
	}

	pegarArrayProdutos = async () => {
		const novoArr = await axios.get('https://us-central1-future-apis.cloudfunctions.net/elo4/products')
    this.setState({ arrayProdutos: novoArr.data.products, 
                    arrayProdutosTotal:novoArr.data.products})
    
		console.log(this.state.arrayProdutos)
	}

  //filtros

  filtrarProdutos = (valorMin,valorMax,categoria,nome) =>{
    const listaProdutosCopia = [...this.state.arrayProdutosTotal]
    let listaProdutosFiltrada = listaProdutosCopia.filter(cadaProduto =>{
      return ((cadaProduto.price >= valorMin) && (cadaProduto.price <= valorMax))
    })
    if (categoria !== "todos") {
      listaProdutosFiltrada = listaProdutosFiltrada.filter(cadaProduto =>{
        return (cadaProduto.category === categoria)
      })
    }
    if (nome !== "") {
      listaProdutosFiltrada = listaProdutosFiltrada.filter( cadaProduto => {
          /* busca convertendo o campo de busca e o argumento para minúsculas */
          /* [link: https://stackoverflow.com/questions/35248292/reactjs-tolowercase-is-not-a-function] */
          return cadaProduto.name.toLocaleLowerCase().includes(nome.toLocaleLowerCase())
    })}
    
    this.setState({
        arrayProdutos:listaProdutosFiltrada
    })
  }


	render(){
		if (this.state.pageSelector === "") {
			return(
				<MainContainer>

					<ComponenteHeader actualPage={this.state.pageSelector} />
					<SubContainerLogin>
						<ComponentLogin transportePage={this.page}/>
					</SubContainerLogin>

				</MainContainer>
			)
		} else if (this.state.pageSelector === "fornecedorPage")  {
			return (
				<MainContainer>
					<ComponenteHeader actualPage={this.state.pageSelector} transportePage={this.page} />
					<SubContainer>
						<ComponenteFornecedor></ComponenteFornecedor>
					</SubContainer>
				</MainContainer>
			);
		} else if (this.state.pageSelector === "consumidorPage") {
			return (
				<MainContainer>
					<ComponenteHeader
						actualPage={this.state.pageSelector}
						transportePage={this.page}
						exibirCarrinho={this.mostrarCarrinho}
					/>
					<SubContainerConsumidor>
						<ComponenteFiltro filtroDoFilho={this.filtrarProdutos}/>
						<ComponenteLista listaProdutos={this.state.arrayProdutos} />
						{this.state.mostraCarrinho && <ComponenteCarrinho />}
					</SubContainerConsumidor>
				</MainContainer>
			);
		} 
	}

}

export default App;
