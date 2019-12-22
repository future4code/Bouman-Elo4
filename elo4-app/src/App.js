import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ComponentLogin from './Components/ComponenteLogin/Index'
import ComponenteLista from './Components/ComponenteLista'
import ComponenteCarrinho from './Components/ComponenteCarrinho/index.js'
import ComponenteFornecedor from './Components/ComponenteFornecedor/index'
import 'typeface-roboto';
import ComponenteHeader from './Components/ComponenteHeader/index'
import './Style.css';
import ComponentFiltro from './Components/ComponenteFiltro/index'

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
	justify-content:center;
  align-items:center;
  margin:0;
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
			pageSelector: "" //"fornecedorPage"  //consumidorPage
		}
	}

	/* functions */
	page =(page) =>{
		this.setState({
			pageSelector: page
		})
		
	}

	/* renders */

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
					<ComponenteHeader actualPage={this.state.pageSelector} transportePage={this.page} />
					<SubContainerConsumidor>
            <ComponentFiltro></ComponentFiltro>
						<ComponenteLista></ComponenteLista>
					</SubContainerConsumidor>
				</MainContainer>
			);
		} 
	}

}

export default App;
