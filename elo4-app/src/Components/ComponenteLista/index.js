import React from 'react';
import BackImage from '../../img/background_img.jpg';
import styled from 'styled-components';
import ComponenteProduto from '../ComponenteProduto/index.js'

const ContainerLista = styled.div`
  background-image: url(${BackImage}) ;
  /* opacity: 50%; */
  height: 100vh;
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
`

function ComponenteLista() {
    return (
        <ContainerLista>
            <ComponenteProduto />
            <ComponenteProduto />
            <ComponenteProduto />
            <ComponenteProduto />
            <ComponenteProduto />
        </ContainerLista>
    )
}

export default ComponenteLista;