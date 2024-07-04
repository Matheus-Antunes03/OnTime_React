import React, { useState, useEffect } from "react";
import { Start } from "../../components/Start";
import styled from 'styled-components';
import axios from "axios";
import { Edita_Clientes } from "../../components/Edita_Clientes/Edita_Clientes";
import { Edita_Estabelecimentos } from "../../components/Edita_Estabelecimentos/Edita_Estabelecimentos";
import { Edita_Pedidos } from "../../components/Edita_Pedidos/Edita_Pedidos";
import { Edita_Produtos } from "../../components/Edita_Produtos/Edita_Produtos";

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
    font-weight: bolder;
    border: none;
    width: 10%;
    height: 80px;
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
                    <a href="../../Cadastros_Lista">
                        <img id="voltar" src={require('../../images/voltar.png')} />
                    </a>
                    <img id="ontime" src={require('../../images/ontime.png')} />
                    <Edita_Clientes/>
                    <Edita_Estabelecimentos/>
                    <Edita_Produtos/>
                    <Edita_Pedidos/>
                    <button id="salvar">Salvar</button>
                </div>
                
            </Container>
        </>
    )
}