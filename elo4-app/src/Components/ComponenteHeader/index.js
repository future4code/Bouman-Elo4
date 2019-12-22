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
  height: 100px;
`

const HeaderItems = styled.div`
  padding: 10px;
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}
`;

function ComponenteHeader() {
    return (
        <HeaderElo>
            <LogoElo src={logo} />
            <HeaderItems>
                <StyledBadge badgeContent={4} color="default">
                    <StyledShoppingIcon />
                </StyledBadge>
                <StyledButton size="large" variant="contained" color="primary">
                    Home
                </StyledButton>
            </HeaderItems>
        </HeaderElo>
    )
}

export default ComponenteHeader;