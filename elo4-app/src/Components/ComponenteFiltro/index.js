import React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';

/* import RangeSlider from '../Slider/slider.js'  */



const MainContainer =styled.div`
    border: 1px solid #878787;
    width: 400px;
    border-radius:5px;
    height:108vh;
    margin:5px;
    background-color:white;
`;

const TituloContainer = styled.div`
    background-color: #F9F8F8;
    height: 30px;
    justify-content:space-between;
    display:flex;
    align-items:center;
    border-radius:5px;
    padding:0 10px;
    margin-bottom:10px;
`;

const TituloTexto = styled.p`
    font-weight:bold; 
    color:#878787; 
`;

const FiltroContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding-left:15px;

`;

const FiltroInputFalso = styled.div`
    border: 1px solid #878787;
    display:flex;
    width:90%;
    margin-bottom:10px;
    height:20px;
    align-items:center;

`;

const LabelDeInputFalso = styled.label` 
    padding-left:5px;
    color: #878787;
    font-size:0.9em;
`;

const LabelCifraInputFalso = styled.label`
    padding-left:5px;
    color: #878787;
    font-weight:bold;
    margin-right:5px;
    font-size:0.8em;
`;

const FiltroInput = styled.input`
    width:100%;
    margin: 0;
    padding-left:5px;
    border:0;
`;

const StyledButton = styled(Button)`
&&{
    margin:15px 0;
}
`;

export default function LayoutTextFields() {
   
    
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
                <FiltroInput    /* type="number" 
                                name="valorMin"
                                value={this.state.formControls.valorMin.value}
                                onChange={this.controladorInputs} */
                />
                </FiltroInputFalso>
                <FiltroInputFalso>
                <LabelDeInputFalso>Até:</LabelDeInputFalso>
                <LabelCifraInputFalso>R$</LabelCifraInputFalso>
                <FiltroInput    /* type="number" 
                                name="valorMax"
                                value={this.state.formControls.valorMax.value}
                                onChange={this.controladorInputs} */
                />
                </FiltroInputFalso>
               {/*  <RangeSlider  importaValores={this.inputControladoSlider} ></RangeSlider>
        */} </FiltroContainer>

            <TituloContainer>
                <TituloTexto>Categoria</TituloTexto>
                <TituloTexto>―</TituloTexto>
            </TituloContainer>
            <FiltroContainer>
                <StyledButton variant="contained">Categoria 1</StyledButton>
                <StyledButton variant="contained">Categoria 1</StyledButton>
                <StyledButton variant="contained">Categoria 1</StyledButton>
            </FiltroContainer>



            <TituloContainer>
                <TituloTexto>Buscar</TituloTexto>
                <TituloTexto>―</TituloTexto>
            </TituloContainer>
            <FiltroContainer>
                <FiltroInputFalso>
                    <LabelDeInputFalso>Busca:</LabelDeInputFalso>
                    <FiltroInput    /* type="text" 
                                    name="filtro"
                                    value={this.state.formControls.filtro.value}
                                    onChange={this.controladorInputs} */
                        />
                </FiltroInputFalso>
            </FiltroContainer>
         
        
      </MainContainer>
    );
  }