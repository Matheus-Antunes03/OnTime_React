import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #container{
        width: 90%;
        height: 590px;
        background-color: #ffffff;
        border-radius: 30px;
        margin: 0 500px 0 0;
    }

    #colunas{
        display: flex;
        margin: 0 0 0 30px;
    }

    h2{
        color: #ff4400;
        font-family: sans-serif;
        margin: 10px 0 2px 0;
        font-size: 25px;
        font-weight: bold;
    }

    #tipos{
        border: none;
        outline: none;
        margin: 0 0 0 40px;
        color: #ff4400;
    }

    input{
        color: #ff4400;
        font-family: sans-serif;
        margin-left: 40px;
        border: none;
        outline: none;
        width: 200px;
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
        margin: 10px 0 0 0;
    }

    #termo{
        color: #ff4400;
        font-family: sans-serif;
        letter-spacing: -0.5px;
        font-size: 13px;
    }

    #cadastrar{
        display: block;
        margin: 15px auto auto auto;
        width: 20%;
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

    #produto{
        display: block;
        margin: 15px auto auto auto;
        width: 15%;
        height: 10%;
        border: none;
        text-decoration: none;
        background-color: #ffffff;
        font-weight: bold;
        color: #ff4400;
        border-radius: 50px;
        font-size: 15px;
        cursor: pointer;
    }
`

export function Colunas_Cad_Est() {
    return (
        <>
            <Container>
                <div id="container">
                    <div id="colunas">
                        <div id="coluna1">
                            <h2>Nome do estabelecimento</h2>
                            <input type="text" placeholder="Digite o nome do estabelecimento"/>
                            <h2>Email</h2>
                            <input type="email" placeholder="email@email.com"/>
                            <h2>Senha</h2>
                            <input type="password" placeholder="******"/>
                            <h2>CNPJ</h2>
                            <input type="number" placeholder="00.000.000/0000-00"/>
                        </div>
                        <div id="coluna2">
                            <h2>CEP</h2>
                            <input type="number" placeholder="00000.000-00"/>
                            <h2>Estado</h2>
                            <input type="text" placeholder="Digite seu estado"/>
                            <h2>Cidade</h2>
                            <input type="text" placeholder="Digite sua cidade"/>
                            <h2>Endereço</h2>
                            <input type="text" placeholder="Digite seu endereço"/>
                            <h2>Inscrição municipal</h2>
                            <input type="number" placeholder="000.000.000-00"/>
                        </div>
                    </div>
                    <button id="cadastrar">Cadastrar</button>
                </div>
                <a href="../../Cadastro_Produto">
                    <button id="produto">Cadastrar produto</button>
                </a>
            </Container>
        </>
    )
}