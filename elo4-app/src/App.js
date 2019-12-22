import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ComponentLogin from './Components/ComponenteLogin/Index'
import ComponenteLista from './Components/ComponenteLista'
import 'typeface-roboto';
/* paleta de cores: https://coolors.co/f29711-5ce1e6-2e86ab-a23b72-c73e1d */



const MainContainer = styled.div`
	display: flex;
	align-items:center;
	justify-content:center;
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
					<ComponentLogin transportePage={this.page}/>
				</MainContainer>
			)
		} else if (this.state.pageSelector === "fornecedorPage")  {
			return (
				<MainContainer>
					fornecedor
					{/* colocar componenteFornecedor */}
				</MainContainer>
			);
		
		} else if (this.state.pageSelector === "consumidorPage") {
			return (
				<MainContainer>
					<ComponenteLista></ComponenteLista>
				</MainContainer>
			);
		} 
	}

}

export default App;
