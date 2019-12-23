import React from 'react';
import BackImage from '../../img/background_img.jpg';
import styled from 'styled-components';
import ComponenteProduto from '../ComponenteProduto/index.js'
import ComponenteSort from '../ComponenteSort/Index'

const ContainerLista = styled.div`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
`;

const MainContainer = styled.div`
  background-image: url(${BackImage});
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;

// categorias: artigos para festas, objetos de decoração, bijuterias, produtos religiosos, enxovais e acessórios eco-friendly

function ComponenteLista(props) {

    const transporteCarrinho = (id) => {
        props.transporteCarrinhoVo(id)
    }

    return (
        <MainContainer>
            <ComponenteSort ordenarProdutos={props.organizaProdutos}/>
            <ContainerLista>
                { props.listaProdutos.map((produto) => {
                    return (
                        <ComponenteProduto
                            key={produto.id}
                            transporteCarrinhoPai={transporteCarrinho}
                            dadoProduto={produto}
                        />
                    )
                })}
            </ContainerLista>
        </MainContainer>
    )
}

export default ComponenteLista;