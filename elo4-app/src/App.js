import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ComponentLogin from './Components/ComponenteLogin/Index'
import 'typeface-roboto';

const MainContainer = styled.div`
	display: flex;
	align-items:center;
	justify-content:center;
    height:175px;
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
					consumidor
					{/* colocar componentes que envolvem o consumidor, 
					acredito que seja o caso de criar um componente
					que envolva todos, talvez. */}
				</MainContainer>
			);
		} 
	}
}

export default App;
