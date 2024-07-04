import React, { useState, useEffect } from "react";
import { Start } from "../../components/Start";
import styled from 'styled-components';
import axios from "axios";
import { Lista_Clientes } from "../../components/Lista_Clientes";
import { Lista_Estabelecimentos } from "../../components/Lista_Estabelecimentos";
import { Lista_Produtos } from "../../components/Lista_Produtos";
import { Lista_Pedidos } from "../../components/Lista_Pedidos";

const Container = styled.div`
    #page{
        background: rgb(255,68,0);
        background: linear-gradient(90deg, rgba(255,68,0,1) 19%, rgba(255,145,77,1) 100%);
        height: 1900px;
    }

    #ontime{
        width: 20%;
        margin: auto auto 20px auto;
        display: block;
    }

    #voltar{
        width: 3%;
        margin: 20px 0 0 20px;
    }

    #salvar{
    color: #ff4400;
    background-color: #ffffff;
    border-radius: 30px;
    font-size: 25px;
    font-weight: bold;
    border: none;
    width: 10%;
    height: 80px;
    font-weight: 600;
    cursor: pointer;
    transition: all .2s ease;
    display: block;
    margin: 2% auto auto auto;
}

#salvar:hover{
    box-shadow: #ffffff 0px 7px 29px 0px;
    transform: translateY(-10px);
}
`

export function Editar() {
    return (
        <>
            <Container>
                <div id="page">
                    <a href="../../Home">
                        <img id="voltar" src={require('../../images/voltar.png')} />
                    </a>
                    <img id="ontime" src={require('../../images/ontime.png')} />
                    <Lista_Clientes/>
                    <Lista_Estabelecimentos/>
                    <Lista_Produtos/>
                    <Lista_Pedidos/>
                    <button id="salvar">Salvar</button>
                </div>
                
            </Container>
        </>
    )
}