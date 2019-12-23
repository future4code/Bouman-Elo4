import React from 'react';
import styled from 'styled-components';
import ComponenteItemCarrinho from '../ComponenteItemCarrinho';

const ContainerCarrinho = styled.div`
    border: 1px solid #878787;
    width: 20%;
    border-radius:5px;
    margin:5px;
    background-color:white;
`

const TituloContainer = styled.div`
    background-color: #F9F8F8;
    height: 30px;
    justify-content:space-between;
    display:flex;
    align-items:center;
    border-radius:5px;
    padding:0 10px;
    margin-bottom:10px;
`;

const TituloTexto = styled.p`
    font-weight:bold; 
    color:#878787; 
`;

const ConteudoContainer = styled.div`
    margin: 5px;
`

const TextoTotal = styled.h3`
    margin-top: 10px;
`


function ComponenteCarrinho(props) { 
    
   

    return (
        <ContainerCarrinho>
            <TituloContainer>
                <TituloTexto>Carrinho</TituloTexto>
                <TituloTexto>―</TituloTexto>
            </TituloContainer>
            <ConteudoContainer>
                {props.listaCarrinho.map(item =>{
                    return <ComponenteItemCarrinho transportePai={(idProduto) =>{props.transporteVo(idProduto)}} itemCarrinho={item}/>
                })}
                
                <TextoTotal>Total: R$ {parseFloat(props.valorTotal).toFixed(2)}</TextoTotal>
            </ConteudoContainer>
        </ContainerCarrinho>
    )
};

export default ComponenteCarrinho;