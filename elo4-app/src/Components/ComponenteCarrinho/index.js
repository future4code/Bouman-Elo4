import React from 'react';
import styled from 'styled-components';
import ComponenteItemCarrinho from '../ComponenteItemCarrinho';

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: flex-start;
    padding: 10px;
`

const TituloCarrinho = styled.h2`
    width: 100%;
    text-align: center;
`

function ComponenteCarrinho() { 
    return (
        <ContainerCarrinho>
            <TituloCarrinho>Carrinho</TituloCarrinho>
            <ComponenteItemCarrinho />
            <h3>Total: R$ 00.00</h3>
        </ContainerCarrinho>
    )
};

export default ComponenteCarrinho;