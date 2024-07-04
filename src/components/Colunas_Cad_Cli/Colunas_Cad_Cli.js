import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #container{
        width: 80%;
        height: 550px;
        background-color: #ffffff;
        border-radius: 30px;
        margin: 0 500px 0 0;
    }

    #colunas{
        display: flex;
        margin: 0 0 0 50px;
    }

    h2{
        color: #ff4400;
        font-family: sans-serif;
        margin: 10px 0 2px 0;
        font-size: 25px;
        font-weight: bold;
    }

    input{
        color: #ff4400;
        font-family: sans-serif;
        margin-left: 40px;
        border: none;
        outline: none;
    }

    input::placeholder{
        color: #ff4400;
        opacity: 50%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    #coluna1{
        margin: 20px 0 0 0;
    }

    #coluna2{
        margin: 20px 0 0 150px;
    }

    #termos{
        width: 20px;
        margin-top: 20px;
    }

    #termo{
        color: #ff4400;
        font-family: sans-serif;
        letter-spacing: -0.5px;
        font-size: 13px;
    }

    #cadastrar{
        display: block;
        margin: 50px auto auto auto;
        width: 30%;
        height: 10%;
        border: none;
        background-color: #ff4400;
        font-weight: bold;
        color: #ffffff;
        border-radius: 50px;
        font-size: 25px;
        cursor: pointer;
        transition: all .2s ease;
    }

    #cadastrar:hover{
        box-shadow: #ff4400 0px 7px 29px 0px;
        transform: translateY(-10px);
    }
`

export function Colunas_Cad_Cli() {
    return (
        <>
            <Container>
                <div id="container">
                    <div id="colunas">
                        <div id="coluna1">
                            <h2>Nome completo</h2>
                            <input type="text" placeholder="Digite seu nome completo"/>
                            <h2>Data de nascimento</h2>
                            <input type="date"/>
                            <h2>Telefone</h2>
                            <input type="number" placeholder="(00) 90000-0000"/>
                            <h2>CPF</h2>
                            <input type="number" placeholder="000.000.000-00"/>
                        </div>
                    </div>
                    <button id="cadastrar">Cadastrar</button>
                </div>
            </Container>
        </>
    );
}