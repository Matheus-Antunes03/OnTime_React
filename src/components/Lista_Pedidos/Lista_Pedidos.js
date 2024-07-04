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
        width: 18%;
        height: 50px;
        color: #ffffff;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin: 10px 0 0 0;
        border-radius: 10px 10px 0 0;
    }

    #pedidos{
        color: #ff4400;
        font-weight: bold;
    }
`

export function Lista_Pedidos() {
    return (
        <>
            <Container>
                <div id="content">
                    <h1 id="pedidos">PEDIDOS</h1>
                    <div id="lista">
                        <div id="coluna">ID</div>
                        <div id="coluna">ID Usuário</div>
                        <div id="coluna">ID Produto</div>
                        <div id="coluna">ID Estab.</div>
                        <div id="coluna">Quantidade</div>
                    </div>
                </div>
            </Container>
        </>
    );
}