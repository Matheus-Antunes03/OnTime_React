import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #cliente{
        width: 30%;
    }

    #card{
        width: 80%;
        height: 450px;
        background-color: #ffffff;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        transition: all .2s ease;
    }

    #card:hover{
        box-shadow: #ffffff 0px 7px 29px 0px;
        transform: translateY(-10px);
    }

    #borda{
        display: block;
        margin: auto auto auto auto;
        width: 84%;
        height: 400px;
        border-radius: 50px;
        border-width: 10px;
        border-style: solid;
        border-color: #ff4400;
    }

    #souum{
        color: #ff4400;
        font-size: 350%;
        margin: 20px 0 0 0;
    }

    #marca2{
        width: 90%;
        height: 70px;
        background-color: #ff4400;
        display: block;
        margin: auto auto auto auto;
        border-radius: 30px;
    }

    #clies{
        color: #ffffff;
        padding: 10px;
        font-size: 225%;
        margin: 10px auto auto auto;
    }

    #loja{
        width: 50%;
        margin-top: 30px;
    }
`;

export function CardEst() {
    return (
        <Container>
            <a id="estabelecimento" href="../../Cadastro_Estabelecimento">
                <button id="card">
                    <div id="borda">
                        <h1 id="souum">Sou um</h1>
                        <div id="marca2">
                            <h1 id="clies">Estabelecimento</h1>
                        </div>
                        <img id="loja" src={require('../../images/loja.png')} />
                    </div>
                </button>
            </a>
        </Container>
    );
}