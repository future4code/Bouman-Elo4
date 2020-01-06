import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ContainerProduto = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImgProduto = styled.img`
    width: 100%;
    height: 220px;
    margin: 0 0 5px 0;
`;

const TextoProduto = styled.p`
    margin: 0 0 5px 0;
    color: #777777;
`;

const StyledButton = styled(Button)`
    width: 100%;
`;

function ComponenteProduto(props) {
    const precoProduto = parseFloat(props.dadoProduto.price).toFixed(2)
    const valorDaParcela = (parseFloat(props.dadoProduto.price) / parseFloat(props.dadoProduto.installments)).toFixed(2)
    
    const transporteCarrinho = () => {
        props.transporteCarrinhoPai(props.dadoProduto.id)
    }
    
    return (
        <ContainerProduto>
            <ImgProduto src={props.dadoProduto.photos} />
            <TextoProduto>{props.dadoProduto.name}</TextoProduto>
            <TextoProduto>Preço: R${precoProduto}</TextoProduto>
            <TextoProduto>{props.dadoProduto.installments}x R${valorDaParcela} sem juros</TextoProduto>
            <StyledButton onClick={transporteCarrinho} variant="contained" color="default">
                Adicionar ao carrinho
                <ShoppingCartIcon />
            </StyledButton>
        </ContainerProduto>
    )
}

export default ComponenteProduto;