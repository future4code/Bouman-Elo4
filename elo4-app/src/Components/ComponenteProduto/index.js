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
`

const ImgProduto = styled.img`
    width: 100%;
    height: 200px;
    margin: 0 0 5px 0;
`

const TextoProduto = styled.p`
    margin: 0 0 5px 0;
    color: #777777;
`

const StyledButton = styled(Button)`
    width: 100%;
`

function ComponenteProduto() {
    return (
        <ContainerProduto>
            <ImgProduto src="https://picsum.photos/600" />
            <TextoProduto>Nome Produto</TextoProduto>
            <TextoProduto>Preço: R$</TextoProduto>
            <TextoProduto>10x R$00,00 sem juros</TextoProduto>
            <StyledButton variant="contained" color="default">
                Adicionar ao carrinho
                <ShoppingCartIcon />
            </StyledButton>
        </ContainerProduto>
    )
}

export default ComponenteProduto;