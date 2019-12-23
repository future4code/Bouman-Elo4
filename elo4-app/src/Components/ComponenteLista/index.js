import React from 'react';
import BackImage from '../../img/background_img.jpg';
import styled from 'styled-components';
import ComponenteProduto from '../ComponenteProduto/index.js'
import ComponenteSort from '../ComponenteSort/Index'

const ContainerLista = styled.div`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
`

const MainContainer = styled.div`
  background-image: url(${BackImage});
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`

/**
 * artigos para festas, objetos de decoração, bijuterias, produtos religiosos, enxovais e acessórios eco-friendly
 */

/* const listaDeProdutos = [ */
    // {
    //     nome: 'Lembrancinha',
    //     descricao: 'Lembrancinha para festa, kit com 10 unidades',
    //     preco: 10.50,
    //     pagamento: 'cartão',
    //     categoria: 'artigos para festas',
    //     foto: 'https://i.pinimg.com/originals/41/51/10/41511002494b83ba4508e73652ca5e0b.jpg',
    //     parcelas: 2,
    // },
    
    // {
    //     nome: 'Vaso para flores',
    //     descricao: 'Vaso para flores, 1 unidade',
    //     preco: 12.00,
    //     pagamento: 'boleto, cartão',
    //     categoria: 'objetos de decoração',
    //     foto: 'http://itideias.com.br/wp-content/uploads/2014/11/00_proc1-711x460.jpg',
    //     parcelas: 1,
    // },
    
    // {
    //     nome: 'Colar amarelo',
    //     descricao: 'Colar amarelo com flor de feltro, 1 unidade',
    //     preco: 24.00,
    //     pagamento: 'boleto, cartão',
    //     categoria: 'bijuterias',
    //     foto: 'https://reciclatobijouterias.files.wordpress.com/2011/03/dsc00784.jpg',
    //     parcelas: 3,
    // },
    
    /* {
        nome: 'Anjinhos de pérolas',
        descricao: 'Anjinhos feitos de pérolas, kit com 5 unidades',
        preco: 15.00,
        pagamento: 'cartão, boleto',
        categoria: 'produtos religiosos',
        foto: 'http://www.artesanatopassoapassoja.com.br/wp-content/uploads/2016/10/Artesanatos-com-Motivos-Religiosos-10.jpg',
        parcelas: 2,
    },

    {
        nome: 'Cobre leito solteiro rosa',
        descricao: 'Cobre leito para camas de solteiro, feminino, 1 unidade',
        preco: 250.00,
        pagamento: 'cartão, boleto',
        categoria: 'enxovais',
        foto: 'https://images.yampi.me/assets/stores/bordabordados/uploads/images/cobre-leito-solteiro-glamour-com-patchwork-artesanal-06-pcs-pink-5c0a6d51901de-medium.jpg',
        parcelas: 5,
    },

    {
        nome: 'Jogo americano redondo',
        descricao: 'Jogo americano artesanal com 3 tamanhos diferentes',
        preco: 60.00,
        pagamento: 'cartão, boleto',
        categoria: 'acessórios eco-friendly',
        foto: 'https://cdn.shopify.com/s/files/1/2474/8356/products/81013cm-jogo-americano-rattan-redondo-artesanal-acessorios-de-cozinha-pra-sonhar-shop-435850_2000x.jpg?v=1556014529',
        parcelas: 4,
    },
] */

function ComponenteLista(props) {

   
    return (
        <MainContainer>
            <ComponenteSort organiza={(regra)=>{props.organizaProdutos(regra)}}/>
            <ContainerLista>
                { props.listaProdutos.map((produto) => {
                    return (<ComponenteProduto dadoProduto={produto} />)
                })}
            </ContainerLista>
        </MainContainer>
    )
}

export default ComponenteLista;