import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    h1{
        color: #ffffff;
        font-family: sans-serif;
        margin: 20px 0 0 20px;
        font-size: 60px;
        font-weight: bold;
    }

    #logo{
        width: 40%;
        margin: 10px 0 0 10px;
    }
`

export function Side_Cad_Ped() {
    return (
        <>
            <Container>
                <h1>Faça</h1>
                <h1>seu</h1>
                <h1>pedido</h1>
                <h1>na</h1>
                <img id="logo" src={require('../../images/ontime.png')} />
            </Container>
        </>
    );
}