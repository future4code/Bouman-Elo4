import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Styled from '../../Style.css'

const MainContainer =styled.div`
    margin:30px;
    padding:30px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    border: solid gray 1px;
    border-radius: 10px;
    width:100%;
    background-color:#B4F1F3;
`;

const metodoPagamento = [
    {
      value: 'Parcelamento',
      label: 'Parcelamento',
    },
    {
      value: 'A vista',
      label: 'A vista',
    },
   
  ];
  const categoria = [
    {
      value: 'Colar',
      label: 'Colar',
    },
    {
      value: 'Bracelete',
      label: 'Bracelete',
    },
   
  ];
  

  export default function LayoutTextFields() {
   
    
    return (
      <MainContainer /* className={classes.root} */>
        
          <TextField
            style={{ margin: 8}}
            label="Nome do Produto"
            placeholder="Insira aqui"
            id="margin-none"
            /* defaultValue="Default Value" */
            /* className={classes.textField} */
            /* helperText="Some important text" */
          />
          <TextField
            style={{ margin: 8}}
            label="Descrição"
            id="filled-full-width"
            fullWidth
            /* defaultValue="Default Value" */
            /* className={classes.textField} */
            /* helperText="Some important text" */
          />
          <TextField
            style={{ margin: 8}}
            label="Preço"
            placeholder="Insira aqui"
            id="margin-none"
          />
          <TextField
          style={{ margin: 8}}
          id="standard-select-currency"
          select
          label="Pagamento"
          value="A vista"
        >
          {metodoPagamento.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          
        <TextField
          style={{ margin: 8}}
          id="standard-select-currency"
          select
          label="Categoria"
          value="Colar"
            
          
        >
          {categoria.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
            style={{ margin: 8}}
            label="URL da Imagem"
            placeholder="Insira aqui"
            id="margin-none"
          />

        <TextField
            style={{ margin: 8}}
            label="Número de Parcelas"
            placeholder="Insira aqui"
            id="margin-none"
          />
      </MainContainer>
    );
  }
