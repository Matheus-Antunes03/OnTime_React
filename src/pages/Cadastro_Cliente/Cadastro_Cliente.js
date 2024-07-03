import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { Side_Cad_Cli } from "../../components/Side_Cad_Cli";
import { Colunas_Cad_Cli } from "../../components/Colunas_Cad_Cli";

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

export function Cadastro_Cliente() {
    return (
        <>
            <Container>
                <div id="page">
                    <a id="cadastro" href="../../Cadastro">
                        <img id="voltar" src={require('../../images/voltar.png')} />
                    </a>
                    <div id="content">
                        <Side_Cad_Cli/>
                        <Colunas_Cad_Cli/>
                    </div>
                </div>
            </Container>
        </>
    );
}