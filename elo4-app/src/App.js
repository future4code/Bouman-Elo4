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
	  arrayCarrinho:[],
	  totalCarrinho:0.00,
	  quantidadeCarrinho:0
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

  //sort

  sortProdutos = (regra) =>{
   
    let listaProdutosCopia = [...this.state.arrayProdutos]

    if(regra==="decrescente"){
      listaProdutosCopia.sort(function(a,b){
        return parseFloat(a.price) > parseFloat(b.price) ? -1 : parseFloat(a.price) < parseFloat(b.price) ? 1 : 0
      })
    } else if(regra==="crescente"){
      listaProdutosCopia.sort(function(a,b){
        return parseFloat(a.price) < parseFloat(b.price) ? -1 : parseFloat(a.price) > parseFloat(b.price) ? 1 : 0
      })
    } else{
      listaProdutosCopia = [...this.state.arrayProdutos]
    }
    this.setState({
      arrayProdutos:listaProdutosCopia
    }) 
  }

  // add carrinho
    addCarrinho = (idProduto) =>{
	
      const arrayCarrinhoCopia = [...this.state.arrayCarrinho]
      if (arrayCarrinhoCopia.length === 0){
        const indexItem = this.state.arrayProdutos.findIndex(produto =>{
          return produto.id === idProduto
        })
        const novoItemCarrinho = {
          id: this.state.arrayProdutos[indexItem].id,
          quantidade:1,
          nome:this.state.arrayProdutos[indexItem].name,
          preco:this.state.arrayProdutos[indexItem].price,
        }
      arrayCarrinhoCopia.push(novoItemCarrinho)
      } else {
        const indexDoItemCarrinho = arrayCarrinhoCopia.findIndex(produto =>{
          return produto.id ===idProduto})
          if (indexDoItemCarrinho>=0){
            arrayCarrinhoCopia[indexDoItemCarrinho].quantidade +=1
          } else {
            const indexItem = this.state.arrayProdutos.findIndex(produto => {
              return produto.id ===idProduto})
			  const novoItemCarrinho = {
				id: this.state.arrayProdutos[indexItem].id,
				quantidade:1,
				nome:this.state.arrayProdutos[indexItem].name,
				preco:this.state.arrayProdutos[indexItem].price,
			  }
			arrayCarrinhoCopia.push(novoItemCarrinho)
			}
		  }
		  this.setState({ arrayCarrinho: arrayCarrinhoCopia,
		  },()=>{
			  this.atualizarPrecoTotal();
			  this.calculoQuantidade();
		  })
		}
		
		atualizarPrecoTotal =() =>{
			let totalCarrinhoCopia = 0
			const listaCarrinhoCopia = [...this.state.arrayCarrinho]
			for (const item of listaCarrinhoCopia){
				totalCarrinhoCopia += item.preco*item.quantidade
			}
			this.setState({totalCarrinho: totalCarrinhoCopia})
		}
		
		calculoQuantidade = () =>{
			let quantidadeCarrinhoCopia = 0
			for (let i of this.state.arrayCarrinho){
			  quantidadeCarrinhoCopia+=i.quantidade
			}
			this.setState({
				quantidadeCarrinho:quantidadeCarrinhoCopia,
			})
			
		}

		apagarProduto = (idProduto) =>{
			const listaCarrinhoCopia = [...this.state.arrayCarrinho]
			const indexARemover = listaCarrinhoCopia.findIndex(produto =>{
				return produto.id === idProduto
			})
	
			listaCarrinhoCopia.splice(indexARemover,1)
	
			this.setState({arrayCarrinho:listaCarrinhoCopia},() =>{
				this.atualizarPrecoTotal()
				this.calculoQuantidade();
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
						quantidadeCarrinho={this.state.quantidadeCarrinho}
					/>
					<SubContainerConsumidor>
						<ComponenteFiltro filtroDoFilho={this.filtrarProdutos}/>
						<ComponenteLista  transporteCarrinhoVo={this.addCarrinho} organizaProdutos={this.sortProdutos} listaProdutos={this.state.arrayProdutos} />
						{this.state.mostraCarrinho && <ComponenteCarrinho transporteVo={this.apagarProduto} valorTotal={this.state.totalCarrinho} listaCarrinho={this.state.arrayCarrinho} />}
					</SubContainerConsumidor>
				</MainContainer>
			);
		} 
	}

}

export default App;
