import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ComponentLogin from './Components/ComponenteLogin/Index'
import ComponenteLista from './Components/ComponenteLista'
import ComponenteCarrinho from './Components/ComponenteCarrinho/index.js'
import ComponenteFornecedor from './Components/ComponenteFornecedor/index'
import 'typeface-roboto';
import ComponentHeader from './Components/ComponenteHeader/index'

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
          <ComponentHeader></ComponentHeader>
          <SubContainerLogin>
            <ComponentLogin transportePage={this.page}/>
          </SubContainerLogin>
				</MainContainer>
			)
		} else if (this.state.pageSelector === "fornecedorPage")  {
			return (
				<MainContainer>
          <ComponentHeader></ComponentHeader>
          <SubContainer>
            <ComponenteFornecedor></ComponenteFornecedor>
          </SubContainer>
				</MainContainer>
			);
		
		} else if (this.state.pageSelector === "consumidorPage") {
			return (
				<MainContainer>
          <ComponentHeader></ComponentHeader>
          <SubContainer>
            <ComponenteLista></ComponenteLista>
          </SubContainer>
				</MainContainer>
			);
		} 
	}

}

export default App;
