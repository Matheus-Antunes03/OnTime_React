import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { Side_Cad_Ped } from "../../components/Side_Cad_Ped";
import { Colunas_Cad_Ped } from "../../components/Colunas_Cad_Ped";

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

export function Cadastro_Pedido() {
    return (
        <>
            <Container>
                <div id="page">
                    <a id="cadastro" href="../../Cadastro_Estabelecimento">
                        <img id="voltar" src={require('../../images/voltar.png')} />
                    </a>
                    <div id="content">
                        <Side_Cad_Ped/>
                        <Colunas_Cad_Ped/>
                    </div>
                </div>
            </Container>
        </>
    );
}