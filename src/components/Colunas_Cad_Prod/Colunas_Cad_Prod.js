import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #container{
        width: 90%;
        height: 590px;
        background-color: #ffffff;
        border-radius: 30px;
        margin: 0 300px 0 0;
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
        margin: 40px 0 0 50px;
    }

    #coluna2{
        margin: 40px 0 0 150px;
    }

    #unmed{
        border: none;
        outline: none;
        color: #ff4400;
    }

    #img{
        border: none;
        background-color: #ff4400;
        color: #ffffff;
        cursor: pointer;
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
`

export function Colunas_Cad_Prod() {
    return (
        <>
            <Container>
                <div id="container">
                    <div id="colunas">
                        <div id="coluna1">
                            <h2>Nome do produto</h2>
                            <input type="text" placeholder="Digite o nome do produto"/>
                            <h2>Marca</h2>
                            <input type="text" placeholder="Digite a marca"/>
                            <h2>Preço original</h2>
                            <input type="number" placeholder="R$ 0.00"/>
                            <h2>Desconto (%)</h2>
                            <input type="number" placeholder="%"/>
                            <h2>Data de validade</h2>
                            <input type="date"/>
                        </div>
                        <div id="coluna2">
                            <h2>Peso</h2>
                            <input type="number" placeholder="0.00"/>
                            <select name="unmed" id="unmed">
                                <option value="gramas">Gramas</option>
                                <option value="kilos">Kilos</option>
                                <option value="mls">Mls</option>
                                <option value="litros">Litros</option>
                            </select>
                            <h2>Imagem do produto</h2>
                            <form action="/action_page.php">
                                <input type="file" id="img" name="img" accept="image/*"/>
                            </form>
                        </div>
                    </div>
                    <button id="cadastrar">Cadastrar</button>
                </div>
            </Container>
        </>
    )
}