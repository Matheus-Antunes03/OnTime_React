import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #card{
        width: 100%;
        height: 300px;
        background: rgb(255,165,110);
        background: radial-gradient(circle, rgba(255,165,110,1) 0%, rgba(255,68,0,1) 76%);
        margin-top: 50px;
        border-radius: 50px;
        display: flex;
    }

    #ingredientes{
        width: 51.5%;
        border-radius: 50px 0 0 50px;
    }

    #nome_s{
        color: #ffffff;
        font-family: sans-serif;
        font-size: 27px;
        margin-top: 10%;
    }
`;

export function Card({ title, content }) {
    return (
        <Container>
            <div id="card">
                <img id="ingredientes" src={require('../../images/ingredientes.png')} />
                <h1 id="nome_s">SuperMercado Centro</h1>
            </div>
        </Container>
    );
}