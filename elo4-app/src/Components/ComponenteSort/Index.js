import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import styled from 'styled-components'

const StyledSelect = styled(Select)`
    width: 300px;
`

const SortContainer = styled.div`
    margin-top: 10px;
    padding: 10px 50px;
    border-radius: 10px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledInputLabel = styled(InputLabel)`
    margin-right: 20px;
`

class ComponenteSort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ordem: '',
        }
    }
    controleFiltro = e => {
        this.setState({
          selectStatus: e.target.value
        },()=>{
            this.props.organizaProdutos(this.state.selectStatus)
        });
    }

    handleChange = (e) => {
        this.setState({ 
            ordem: e.target.value
        },()=>{
            this.props.organiza(this.state.ordem)     
            });
    }

    render() {
        return(
            <SortContainer>
                <StyledInputLabel>Ordenar:</StyledInputLabel>
                <StyledSelect
                    value={this.state.ordem}
                    onChange={this.handleChange}
                    // input={<Input name="age" id="age-helper" />}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="crescente">Crescente</MenuItem>
                    <MenuItem value="decrescente">Decrescente</MenuItem>
                </StyledSelect>
            </SortContainer>
        )
    }
}

export default ComponenteSort;