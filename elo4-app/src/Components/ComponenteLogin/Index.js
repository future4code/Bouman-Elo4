import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

const MainContainer = styled.div`
    width: 100%;
    height: stretch;
    background-color: #5ce1e6;
`;

const SubContainer =styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
    background-color: #5ce1e6;
    margin: 100px;
`;

const StyledButtonFornecedor = styled(Button)`
    &&{
        margin-left: 2000px;
        color: white;
        background-color: #f29711;
        margin-left: 10px;
    } 
`;

function LoginComponent(props) {

    const handleFuncaoFilhoFornecedor = () => {
        props.transportePage("fornecedorPage")
    }

    const handleFuncaoFilhoConsumidor = () => {        
        props.transportePage("consumidorPage")
    }

    return(
        <MainContainer>
            <SubContainer>
                <StyledButtonFornecedor variant="contained" color="primary" onClick={handleFuncaoFilhoFornecedor}>
                    Fornecedor
                </StyledButtonFornecedor>  
                <StyledButtonFornecedor variant="contained" color="primary" onClick={handleFuncaoFilhoConsumidor}>
                    Consumidor
                </StyledButtonFornecedor>
            </SubContainer>  
        </MainContainer>
    )
}

export default LoginComponent;