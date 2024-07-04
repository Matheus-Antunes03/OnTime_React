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

    #marca1{
        width: 70%;
        height: 70px;
        background-color: #ff4400;
        display: block;
        margin: auto auto auto auto;
        border-radius: 30px;
    }

    #clies{
        color: #ffffff;
        padding: 10px;
        font-size: 320%;
        margin: 10px auto auto auto;
    }

    #user{
        width: 50%;
        margin-top: 30px;
    }
`;

export function CardCli() {
    return (
        <>
            <Container>
                <a id="cliente" href="../../Cadastro_Cliente">
                    <button id="card">
                        <div id="borda">
                            <h1 id="souum">Sou um</h1>
                            <div id="marca1">
                                <h1 id="clies">Cliente</h1>
                            </div>
                            <img id="user" src={require('../../images/user.png')} />
                        </div>
                    </button>
                </a>
            </Container>
        </>
    );
}