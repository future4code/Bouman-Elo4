import React from 'react';
import styled from 'styled-components';
import AddCircle from '@material-ui/icons/AddCircleOutline'
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline'
import DeleteIcon from '@material-ui/icons/Delete'

const ContainerItem = styled.div`
    border-bottom: 1px dotted black;
    width: 100%;
`

const DadosItem = styled.div`
    display: flex;
    align-items: center;
`

const ContainerQuantidade = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
`

const InputQuantidade = styled.input`
    width: 25px;
    text-align: center;
    margin: 0 5px;
`

const ContainerNome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

class ComponenteItemCarrinho extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            inputQuantidade: 1,
        }
    }

    handleInputQuantidade = (e) => {
        this.setState({ inputQuantidade: e.target.value })
    }

    reduzirInputQuantidade = () => {
        if (this.state.inputQuantidade > 1) {
            const novoValor = this.state.inputQuantidade - 1
            this.setState({ inputQuantidade: novoValor })
        }
    }

    aumentarInputQuantidade = () => {
        const novoValor = this.state.inputQuantidade + 1
        this.setState({ inputQuantidade: novoValor })
    }

    render() {
        return (
            <ContainerItem>
                <ContainerNome>
                    <p>Nome Produto</p>
                    <DeleteIcon />
                </ContainerNome>
                <DadosItem>
                    <ContainerQuantidade>
                        <RemoveCircle onClick={this.reduzirInputQuantidade} />
                        <InputQuantidade
                            value={this.state.inputQuantidade}
                            onChange={this.handleInputQuantidade}    
                        />
                        <AddCircle onClick={this.aumentarInputQuantidade} />
                    </ContainerQuantidade>
                    <p>R$ 00.00</p>
                </DadosItem>
            </ContainerItem>
        )
    }
};

export default ComponenteItemCarrinho;