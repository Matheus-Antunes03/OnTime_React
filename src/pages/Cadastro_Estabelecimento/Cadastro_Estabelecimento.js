import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { Side_Cad_Est } from "../../components/Side_Cad_Est";
import { Colunas_Cad_Est } from "../../components/Colunas_Cad_Est";
import { Side_Cad_Prod } from "../../components/Side_Cad_Prod";

const Container = styled.div`
    #page{
        background: rgb(255,68,0);
        background: linear-gradient(90deg, rgba(255,68,0,1) 19%, rgba(255,145,77,1) 100%);
        height: 900px;
    }

    #content{
        display: flex;
    }

    #voltar{
        width: 3%;
        margin: 20px 0 0 20px;
    }
`

export function Cadastro_Estabelecimento() {
    return (
        <>
            <Container>
            <div id="page">
                    <a id="cadastro" href="../../Cadastro">
                        <img id="voltar" src={require('../../images/voltar.png')} />
                    </a>
                    <div id="content">
                        <Side_Cad_Est/>
                        <Colunas_Cad_Est/>
                    </div>
                </div>
            </Container>
        </>
    )
}