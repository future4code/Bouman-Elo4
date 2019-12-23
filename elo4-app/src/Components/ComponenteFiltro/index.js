import React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f29711'
        },
    }
})

const MainContainer =styled.div`
    border: 1px solid #878787;
    width: 400px;
    border-radius: 5px;
    margin: 5px;
    background-color: white;
`;

const TituloContainer = styled.div`
    background-color: #F9F8F8;
    height: 30px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
`;

const TituloTexto = styled.p`
    font-weight: bold; 
    color: #878787; 
`;

const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 15px;
`;

const FiltroInputFalso = styled.div`
    border: 1px solid #878787;
    display: flex;
    width: 90%;
    margin-bottom: 10px;
    height: 20px;
    align-items: center;
`;

const LabelDeInputFalso = styled.label` 
    padding-left: 5px;
    color: #878787;
    font-size: 0.9em;
`;

const LabelCifraInputFalso = styled.label`
    padding-left: 5px;
    color: #878787;
    font-weight: bold;
    margin-right: 5px;
    font-size: 0.8em;
`;

const FiltroInput = styled.input`
    width: 100%;
    margin: 0;
    padding-left: 5px;
    border: 0;
`;

const StyledButton = styled(Button)`
    &&{
        margin: 15px 0;
    }
`;

const StyledRadioGroup =styled(RadioGroup)`
    &&{
        margin:5px 
    }
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default class LayoutTextFields extends React.Component {
   constructor(props){
        super(props);
        
        this.state = {
            inputValorMin: "",
            inputValorMax: "",
            inputNome: "",
            inputCategoria: "",
        }
    }

    // functions
    handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]:value })
    }

    filtrarFilho = () => {
        this.props.filtroDoFilho(
            this.state.inputValorMin,
            this.state.inputValorMax,
            this.state.inputCategoria,
            this.state.inputNome
        )
    }
    
    handleChangeCategoria =(e) => {
        this.setState({ inputCategoria: e.target.value })
    }

    render(){
        return (
            <MainContainer>
                <TituloContainer>
                    <TituloTexto>Preço</TituloTexto>
                    <TituloTexto>―</TituloTexto>
                </TituloContainer>

                <FiltroContainer>
                    <FiltroInputFalso>
                        <LabelDeInputFalso>De:</LabelDeInputFalso>
                        <LabelCifraInputFalso>R$</LabelCifraInputFalso>
                        <FiltroInput
                            type="number" 
                            name="inputValorMin"
                            value={this.state.inputValorMin}
                            onChange={this.handleChange} 
                        />
                    </FiltroInputFalso>
                    <FiltroInputFalso>
                        <LabelDeInputFalso>Até:</LabelDeInputFalso>
                        <LabelCifraInputFalso>R$</LabelCifraInputFalso>
                        <FiltroInput
                            type="number" 
                            name="inputValorMax"
                            value={this.state.inputValorMax}
                            onChange={this.handleChange} 
                        />
                    </FiltroInputFalso>
                </FiltroContainer>
                      
                <TituloContainer>
                    <TituloTexto>Categoria</TituloTexto>
                    <TituloTexto>―</TituloTexto>
                </TituloContainer>
                  
                <MuiThemeProvider theme={theme}>
                    <StyledRadioGroup
                        aria-label="categoria"
                        name="categoria"
                        value={this.inputCategoria}
                        onChange={this.handleChangeCategoria}
                    >
                        <FormControlLabel value="Artigos para festas" variant="contained" control={<Radio color="primary"/>} label="Artigos para Festas" />
                        <FormControlLabel value="Objetos de decoração" control={<Radio  color="primary"/>} label="Objetos de Decoração" />
                        <FormControlLabel value="Bijuterias" control={<Radio color="primary"/>} label="Bijuterias" />
                        <FormControlLabel value="Produtos religiosos" control={<Radio color="primary"/>} label="Produtos religiosos" />
                        <FormControlLabel value="Enxovais" control={<Radio color="primary"/>} label="Enxovais" />
                        <FormControlLabel value="Acessórios eco-friendly" control={<Radio color="primary"/>} label="Acessórios eco-friendly" />
                        <FormControlLabel value="todos" control={<Radio color="primary"/>} label="Todas Categorias" />
                    </StyledRadioGroup>
                </MuiThemeProvider>    
                
                <TituloContainer>
                    <TituloTexto>Buscar</TituloTexto>
                    <TituloTexto>―</TituloTexto>
                </TituloContainer>
                <FiltroContainer>
                    <FiltroInputFalso>
                        <LabelDeInputFalso>Busca:</LabelDeInputFalso>
                        <FiltroInput
                            type="text" 
                            name="inputNome"
                            value={this.state.inputNome}
                            onChange={this.handleChange} 
                        />
                    </FiltroInputFalso>
                </FiltroContainer>
                
                <MuiThemeProvider theme={theme}>
                    <SubContainer>
                        <StyledButton onClick={this.filtrarFilho} variant="contained" color="primary">Filtrar</StyledButton>
                    </SubContainer>
                </MuiThemeProvider>
              
            </MainContainer>
        );
    }
}