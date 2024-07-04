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
        margin: auto auto auto auto;
        border-radius: 50px;
        text-align: center;
    }
    
    #coluna{
        background-color: #ff4400;
        width: 18%;
        height: 50px;
        color: #ffffff;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin: 10px 0 0 0;
        border-radius: 10px 10px 0 0;
    }

    #clientes{
        color: #ff4400;
        font-weight: bold;
        margin-top: 0;
    }
`

export function Lista_Clientes() {
    return (
        <>
            <Container>
                <div id="content">
                    <h1 id="clientes">CLIENTES</h1>
                    <div id="lista">
                        <div id="coluna">ID</div>
                        <div id="coluna">Nome</div>
                        <div id="coluna">Data Nasc</div>
                        <div id="coluna">Telefone</div>
                        <div id="coluna">CPF</div>
                    </div>
                </div>
            </Container>
        </>
    );
}