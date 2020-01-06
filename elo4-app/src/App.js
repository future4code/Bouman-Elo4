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
			arrayProdutosTotal: [],
			arrayCarrinho: [],
			totalCarrinho: 0.00,
			quantidadeCarrinho: 0
		}
	}

	/* functions */
	page = (page) => {
		this.setState({ pageSelector: page })
		
		if (page === 'consumidorPage') {
			this.pegarArrayProdutos()
		}
	}

	mostrarCarrinho = () => {
		const novoEstado = !this.state.mostraCarrinho
		this.setState({ mostraCarrinho: novoEstado })
	}

	pegarArrayProdutos = async () => {
		const novoArr = await axios.get('https://us-central1-future-apis.cloudfunctions.net/elo4/products')
		
		this.setState({
			arrayProdutos: novoArr.data.products, 
			arrayProdutosTotal:novoArr.data.products
		})
	}

  	// filtros de produtos
	filtrarProdutos = (valorMin, valorMax, categoria, nome) => {
		const listaProdutosCopia = [...this.state.arrayProdutosTotal]
		
		let listaProdutosFiltrada = listaProdutosCopia.filter(cadaProduto => {
			return ((cadaProduto.price >= valorMin) && (cadaProduto.price <= valorMax))
		})
		
		if (categoria !== "todos") {
			listaProdutosFiltrada = listaProdutosFiltrada.filter(cadaProduto =>{
				return (cadaProduto.category === categoria)
			})
		}
		
		if (nome !== "") {
			listaProdutosFiltrada = listaProdutosFiltrada.filter( cadaProduto => {
				return cadaProduto.name.toLocaleLowerCase().includes(nome.toLocaleLowerCase())
			})
		}
		
		this.setState({ arrayProdutos: listaProdutosFiltrada })
	}

	//sort
	sortProdutos = (regra) => {
		let listaProdutosCopia = [...this.state.arrayProdutos]
		let listaOrdenada

		switch (regra) {
			case "decrescente":
				listaOrdenada = listaProdutosCopia.sort(function(a,b) {
					return ( 
						parseFloat(a.price) > parseFloat(b.price) ? -1 : parseFloat(a.price) < parseFloat(b.price) ? 1 : 0
					)
				})
				break;

			case "crescente":
				listaOrdenada = listaProdutosCopia.sort(function(a,b) {
					return (
						parseFloat(a.price) < parseFloat(b.price) ? -1 : parseFloat(a.price) > parseFloat(b.price) ? 1 : 0
					)
				})
				break;

			case "a-z":
				listaOrdenada = listaProdutosCopia.sort(function(a,b) {
					return (
						a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0
					)
				})
				break;
			case "z-a":
				listaOrdenada = listaProdutosCopia.sort(function(a,b) {
					return (
						a.name.toLowerCase() > b.name.toLowerCase() ? -1 : a.name.toLowerCase() < b.name.toLowerCase() ? 1 : 0
					)
				})
				break;

			default:
				listaOrdenada = listaProdutosCopia
				break;
		}

		this.setState({ arrayProdutos: listaOrdenada }) 
	}

	// adicionar item no carrinho
    addCarrinho = (idProduto) => {
		const arrayCarrinhoCopia = [...this.state.arrayCarrinho]
		
		// verifica se o item já está no carrinho e retorna o index do item no array do carrinho
		const indexDoItemNoCarrinho = arrayCarrinhoCopia.findIndex( produto => {
			return produto.id === idProduto
		})

		// se o carrinho não estiver vazio e o produto já existir no carrinho, altera apenas a quantidade do produto
		if (arrayCarrinhoCopia.length !== 0 && indexDoItemNoCarrinho >= 0) {
			arrayCarrinhoCopia[indexDoItemNoCarrinho].quantidade += 1
		} else { // se o carrinho estiver vazio ou o produto ainda não constar no carrinho, é incluído o novo produto no carrinho
			const indexItem = this.state.arrayProdutos.findIndex( produto => {
				return produto.id === idProduto
			})

			const novoItemCarrinho = {
				id: this.state.arrayProdutos[indexItem].id,
				quantidade: 1,
				nome: this.state.arrayProdutos[indexItem].name,
				preco: this.state.arrayProdutos[indexItem].price,
			}

			arrayCarrinhoCopia.push(novoItemCarrinho)
		}
		
		this.setState({ arrayCarrinho: arrayCarrinhoCopia }, 
			()=>{
				this.atualizarPrecoTotal();
				this.calcularQuantidade();
			})
	}
	
	// atualizar valor total do carrinho
	atualizarPrecoTotal = () => {
		let totalCarrinhoCopia = 0
		const listaCarrinhoCopia = [...this.state.arrayCarrinho]
		
		for (const item of listaCarrinhoCopia) {
			totalCarrinhoCopia += item.preco * item.quantidade
		}

		this.setState({ totalCarrinho: totalCarrinhoCopia })
	}
	
	// calcular quantidade de itens no carrinho
	calcularQuantidade = () => {
		let quantidadeCarrinhoCopia = 0
		
		for (let i of this.state.arrayCarrinho) {
			quantidadeCarrinhoCopia+=i.quantidade
		}

		this.setState({ quantidadeCarrinho: quantidadeCarrinhoCopia })
	}

	// apagar produto do carrinho
	apagarProduto = (idProduto) => {
		const listaCarrinhoCopia = [...this.state.arrayCarrinho]
		const indexARemover = listaCarrinhoCopia.findIndex( produto => {
				return produto.id === idProduto
		})
	
		listaCarrinhoCopia.splice(indexARemover, 1)
	
		this.setState({ arrayCarrinho: listaCarrinhoCopia },
			() => {
				this.atualizarPrecoTotal();
				this.calcularQuantidade();
			}
		)
	}
	
	// alterar quantidade de itens no carrinho, utilizando os botões + e -
	alterarQuantidadeItensCarrinho = (id, valor) => {
		const arrayCarrinhoCopia = [...this.state.arrayCarrinho]
		arrayCarrinhoCopia.forEach(item => {
			if (item.id === id) {
				item.quantidade += valor
			}
		})

		this.setState({ arrayCarrinho: arrayCarrinhoCopia },
			() => {
				this.atualizarPrecoTotal();
				this.calcularQuantidade();
			}	
		)
	}

	render() {
		// Conteúdo da página a ser exibido. Cabeçalho igual para todas as páginas.
		let pageToRender
		switch (this.state.pageSelector) {
			case "":
				pageToRender = 
					<SubContainerLogin>
						<ComponentLogin transportePage={this.page} />
					</SubContainerLogin>
				break;
		
			case "fornecedorPage":
				pageToRender = 
					<SubContainer>
						<ComponenteFornecedor />
					</SubContainer>
				break;
		
			case "consumidorPage":
				pageToRender = 
					<SubContainerConsumidor>
						<ComponenteFiltro filtroDoFilho={this.filtrarProdutos} />
						<ComponenteLista 
							transporteCarrinhoVo={this.addCarrinho}
							organizaProdutos={this.sortProdutos}
							listaProdutos={this.state.arrayProdutos}
						/>
						{this.state.mostraCarrinho &&
							<ComponenteCarrinho
								deletarItem={this.apagarProduto}
								valorTotal={this.state.totalCarrinho}
								listaCarrinho={this.state.arrayCarrinho}
								alteraQuantidade={this.alterarQuantidadeItensCarrinho}
							/>
						}
					</SubContainerConsumidor>
				break;
		
			default:
				break;
		}

		return (
			<MainContainer>
				<ComponenteHeader
					actualPage={this.state.pageSelector}
					transportePage={this.page}
					exibirCarrinho={this.mostrarCarrinho}
					quantidadeCarrinho={this.state.quantidadeCarrinho}
				/>
				{pageToRender}
			</MainContainer>
		)
	}

}

export default App;
