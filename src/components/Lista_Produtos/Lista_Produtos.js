import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #lista{
        display: flex;
        justify-content: space-around;
    }

    #content{
        width: 80%;
        height: 200px;
        background-color: #ffffff;
        display: block;
        margin: 50px auto auto auto;
        border-radius: 50px;
        text-align: center;
    }
    
    #coluna{
        background-color: #ff4400;
        width: 15%;
        height: 50px;
        color: #ffffff;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin: 10px 0 0 0;
        border-radius: 10px 10px 0 0;
    }

    #produtos{
        color: #ff4400;
        font-weight: bold;
    }
`

export function Lista_Produtos() {
    return (
        <>
            <Container>
                <div id="content">
                    <h1 id="produtos">PRODUTOS</h1>
                    <div id="lista">
                        <div id="coluna">ID</div>
                        <div id="coluna">Nome</div>
                        <div id="coluna">Marca</div>
                        <div id="coluna">Preço</div>
                        <div id="coluna">Data Validade</div>
                        <div id="coluna">Peso</div>
                    </div>
                </div>
            </Container>
        </>
    );
}