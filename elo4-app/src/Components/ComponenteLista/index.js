import React from 'react';
import backImage from '../../img/background_img.jpg';
import styled from 'styled-components'

const ContainerLista = styled.div`
  background-image: url(${backImage});
  opacity: 50%;
  height: 600px;
`

function ComponenteLista() {
    return (
        <ContainerLista>

        </ContainerLista>
    )
}

export default ComponenteLista;