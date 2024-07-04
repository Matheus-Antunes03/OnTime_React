import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { CardCli } from "../../components/CardCli";
import { CardEst } from "../../components/CardEst";
import { CardPed } from "../../components/CardPed";
<<<<<<< HEAD
import { CardProd } from "../../components/CardProd";
=======
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8

const Container = styled.div`
    #content{
        background: rgb(255,68,0);
        background: linear-gradient(90deg, rgba(255,68,0,1) 19%, rgba(255,145,77,1) 100%);
        height: 800px;
    }

    #ontime{
        width: 20%;
        margin: auto auto 20px auto;
        display: block;
    }

    #container{
        display: flex;
<<<<<<< HEAD
        justify-content: space-around;
        margin-top: 50px;
=======
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
    }

    #voltar{
        width: 3%;
        margin: 20px 0 0 20px;
    }

    #cli{
        margin-left: 5%;
    }
`

export function Cadastro() {
    return (
        <>
            <Container>
                <div id="content">
                <a id="cadastro" href="../../Home">
                        <img id="voltar" src={require('../../images/voltar.png')} />
                    </a>
                    <img id="ontime" src={require('../../images/ontime.png')} />
                    <div id="container">
                        <div id="cli">
                            <CardCli/>
                        </div>
                        <CardEst/>
                        <CardPed/>
                    </div>
                    <div id="container">
                        <CardPed/>
                        <CardProd/>
                    </div>
                </div>
            </Container>
        </>
    );
}