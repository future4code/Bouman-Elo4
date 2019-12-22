import React from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';
import logo from '../../img/elo4_logo.png'

const HeaderElo = styled.div`
  background-color: #B4F1F3;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoElo = styled.img`
  height: 180px;
`

const HeaderItems = styled.div`
  padding: 10px;
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function ComponenteHeader() {
    return (
        <HeaderElo>
            <LogoElo src={logo} />
            <HeaderItems>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon />
                </Badge>
                <Button size="large" variant="contained" color="primary">
                    Home
                </Button>
            </HeaderItems>
        </HeaderElo>
    )
}

export default ComponenteHeader;