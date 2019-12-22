import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';


const MainContainer = styled.div`
    width:100%;
    height:stretch;
    background-color:#5ce1e6;
   
`;

const SubContainer =styled.div`
   display: flex;
	align-items:center;
	justify-content:center;
    background-color:#5ce1e6;
    margin:100px;
`;

const StyledButtonFornecedor = styled(Button)`
   &&{
    margin-left: 2000px;
    color: white;
    background-color: #f29711;
    margin-left:10px;

   } 
    
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
                <SubContainer>
                    <StyledButtonFornecedor  variant="contained" color="primary"   onClick={this.handleFuncaoFilhoFornecedor}>Fornecedor</StyledButtonFornecedor>  
                    <StyledButtonFornecedor variant="contained" color="primary" onClick={this.handleFuncaoFilhoConsumidor}>Consumidor</StyledButtonFornecedor>
                </SubContainer>  
            </MainContainer>
        )
    }
}
export default LoginComponent;