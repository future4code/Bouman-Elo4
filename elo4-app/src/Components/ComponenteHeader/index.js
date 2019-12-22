import React from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';
import logo from '../../img/elo4_logo.png'
import Styled from '../../Style.css'




const HeaderElo = styled.div`
  background-color: #B4F1F3;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoElo = styled.img`
  height: 15vh;
  min-height:80px;
`

const HeaderItems = styled.div`

  padding: 3vh;
  width: 180px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const HeaderText = styled.div`
  width: 85%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
`

const StyledShoppingIcon = styled(ShoppingCartIcon)`
 && {
  font-size:40px;
  color: #f29711;
 }
`;

const StyledBadge = styled(Badge)`
  && {
    color: white;
  }
`;

const StyledButton =styled(Button)`
&& {
  background-color: #f29711;
  margin-left: 50px;
}
`;

function ComponenteHeader(props) {

  const voltarParaHome = () =>{
    props.transportePage("")
  }

  let exibicao
  switch (props.actualPage) {
    case "":
      exibicao = 
        <HeaderText>
          <h1>Bem-vind@!</h1>
          <h5>Escolha uma opção para começar</h5>
        </HeaderText>
      break;

    case 'fornecedorPage':
      exibicao = 
        <HeaderItems>
          <StyledButton size="large" variant="contained" color="primary" onClick={voltarParaHome}>
            Home
          </StyledButton>
        </HeaderItems>
      break;

    case 'consumidorPage':
      exibicao = 
        <HeaderItems>
          
            <StyledBadge badgeContent={4} color="default">
              <StyledShoppingIcon />
            </StyledBadge>
            
            <StyledButton size="large" variant="contained" color="primary" onClick={voltarParaHome}>
              Home
            </StyledButton>
          
          
        </HeaderItems>
      break;
  
    default:
      break;
  }

  return (
      <HeaderElo>
          <LogoElo src={logo} />
          {exibicao}
      </HeaderElo>
  )
}

export default ComponenteHeader;