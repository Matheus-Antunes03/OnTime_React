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
        width: 80%;
        margin: 10px 0 0 10px;
    }
`

export function Side_Cad_Cli() {
    return (
        <>
            <Container>
                <h1>Crie</h1>
                <h1>sua</h1>
                <h1>conta</h1>
                <h1>na</h1>
                <img id="logo" src={require('../../images/ontime.png')} />
            </Container>
        </>
    );
}