import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import axios from 'axios';

const MainContainer =styled.div`
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: solid gray 1px;
  border-radius: 10px;
  width: 100%;
  background-color: #B4F1F3;
`;

const StyledButtonFornecedor = styled(Button)`
  && {
    position: absolute;
    bottom: 50px;
    right: 50px;
    margin-left: 2000px;
    color: white;
    background-color: #f29711;
    margin-left: 10px;
  }
`;

const metodoPagamento = [
  {
    value: 'Débito',
    label: 'Débito',
  },
  {
    value: 'Crédito',
    label: 'Crédito',
  },
  {
    value: 'Boleto',
    label: 'Boleto',
  },
  {
    value: 'PayPal',
    label: 'PayPal',
  },
];

const categoria = [
  {
    value: 'Artigos para festas',
    label: 'Artigos para festas',
  },
  {
    value: 'Objetos de decoração',
    label: 'Objetos de decoração',
  },
  {
    value: 'Bijuterias',
    label: 'Bijuterias',
  },
  {
    value: 'Produtos religiosos',
    label: 'Produtos religiosos',
  },
  {
    value: 'Enxovais',
    label: 'Enxovais',
  },
  {
    value: 'Acessórios eco-friendly',
    label: 'Acessórios eco-friendly',
  },
];
  

export default class LayoutTextFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputNomeDoProduto: '',
      inputDescricao: '',
      inputPreco: '',
      inputPagamento: '',
      inputCategoria: '',
      inputUrlImagem: '',
      inputParcelas: '',
    }
  }

  // API request para cadastrar produto
  cadastrarProduto = async () => {
    const requestBody = {
      name: this.state.inputNomeDoProduto,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethod: this.state.inputPagamento,
      category: this.state.inputCategoria,
      photos: [this.state.inputUrlImagem],
      installments: this.state.inputParcelas
    }

    try {
      await axios.post('https://us-central1-future-apis.cloudfunctions.net/elo4/products', requestBody) 
      window.alert("Produto cadastrado com sucesso.")
      this.setState({
        inputNomeDoProduto: '',
        inputDescricao: '',
        inputPreco: '',
        inputPagamento: '',
        inputCategoria: '',
        inputUrlImagem: '',
        inputParcelas: '',
      })
    } catch (error) {
      window.alert("Erro ao cadastrar.")
    }
  }

  // controle de input
  handleInputControl = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value})
  }

  render() {
    return (
    <MainContainer>

      <TextField
        style={{ margin: 8}}
        label="Nome do Produto"
        name="inputNomeDoProduto"
        placeholder="Insira aqui"
        id="margin-none"
        value={this.state.inputNomeDoProduto}
        onChange={this.handleInputControl}
      />

      <TextField
        style={{ margin: 8}}
        label="Descrição"
        name="inputDescricao"
        id="filled-full-width"
        fullWidth
        value={this.state.inputDescricao}
        onChange={this.handleInputControl}
      />

      <TextField
        style={{ margin: 8}}
        label="Preço"
        name="inputPreco"
        placeholder="Insira aqui"
        id="margin-none"
        onChange={this.handleInputControl}
        value={this.state.inputPreco}
      />
      
      <TextField
        style={{ margin: 8}}
        id="standard-select-currency"
        select
        label="Pagamento"
        name="inputPagamento"
        value={this.state.inputPagamento}
        onChange={this.handleInputControl}
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
        name="inputCategoria"
        value={this.state.inputCategoria}
        onChange={this.handleInputControl}  
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
        name="inputUrlImagem"
        placeholder="Insira aqui"
        id="margin-none"
        onChange={this.handleInputControl}
        value={this.state.inputUrlImagem}
      />

      <TextField
        style={{ margin: 8}}
        label="Número de Parcelas"
        name="inputParcelas"
        placeholder="Insira aqui"
        id="margin-none"
        onChange={this.handleInputControl}
        value={this.state.inputParcelas}
      />

      <StyledButtonFornecedor onClick={this.cadastrarProduto}>
        Cadastrar Produto
      </StyledButtonFornecedor>
      
    </MainContainer>
  );
  }
}
