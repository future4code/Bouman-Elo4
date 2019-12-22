import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

const MainContainer = styled.div`
	display: flex;
	align-items:center;
	justify-content:center;
    height:175px;
   
`;

const StyledButtonFornecedor = styled(Button)`
    margin-left: 2000px;
    color: red;
    background-color: black;
`;
/* const StyledButtonConsumidor = styled(Button)`
    margin-left:20px;
    color:red;
`;
 */
class LoginComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    /* functions */

    handleFuncaoFilhoFornecedor = () =>{
            
        this.props.transportePage("fornecedorPage")
            
    }
    handleFuncaoFilhoConsumidor = () =>{
            
        this.props.transportePage("consumidorPage")
            
    }

    

render(){
        return(
            <MainContainer>
                <StyledButtonFornecedor /* variant="contained" color="primary" */  onClick={this.handleFuncaoFilhoFornecedor}>Fornecedor</StyledButtonFornecedor>
                <StyledButtonFornecedor variant="contained" color="primary" onClick={this.handleFuncaoFilhoConsumidor}>Consumidor</StyledButtonFornecedor>
            </MainContainer>
        )
    }
}
export default LoginComponent;