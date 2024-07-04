import React from "react";
import styled from 'styled-components';

const Container = styled.div`
#container{
    width: 100%;
    height: 953px;
    background: rgb(255,68,0);
    background: linear-gradient(90deg, rgba(255,68,0,1) 25%, rgba(255,165,110,1) 95%);
}

a{
    text-decoration: none;
    color: #ffffff;
}

#navbar{
    display: flex;
}

#sobre, #contato{
    color: #ffffff;
    font-family: sans-serif;
    font-size: 150%;
    margin: 2% 0 0 5%;
    cursor: pointer;
}

#selecao{
    font-family: sans-serif;
    font-size: 150%;
    margin: 0 0 0 7%;
    font-weight: bold;
    background-color: #ffffff;
    color: #ff4400;
    height: 80px;
    width: 23%;
    position: relative;
}

#home{
    position: absolute;
    bottom: 15%;
    left: 15%;
    cursor: pointer;
    color: #ff4400;
}

#cad{
    text-decoration: none;
    font-family: sans-serif;
    font-size: 150%;
    margin: 2% 0 0 30%;
    cursor: pointer;
    width: 100%;
    color: #ffffff;
}

#cadastro{
    color: #ffffff;
}

#lista{
    margin: 0 20px 0 40px;
}

#entrar{
    color: #ff4400;
    background-color: #ffffff;
    border-radius: 30px;
    font-size: 20px;
    border: none;
    width: 25%;
    height: 50px;
    font-weight: 600;
    margin-left: 4%;
    transition: all .2s ease;
    cursor: pointer;
}

#entrar:hover{
    box-shadow: #ffffff 0px 7px 29px 0px;
    transform: translateY(-10px);
}

#logo{
    width: 25%;
    margin: 5% auto 0 auto;
    display: block;
}

#slogan{
    color: #ffffff;
    font-size: 400%;
    font-family: sans-serif;
    margin: 0;
}

#baixe{
    color: #ffffff;
    font-family: sans-serif;
    font-size: 160%;
    font-weight: lighter;
    margin: 5% 0 0 236%;
    width: 100%;
}

#cont_baixe{
    display: flex;
    margin: 1% 0 0 0;
}

#googleplay{
    width: 15%;
    margin-left: 36.2%;
}

#comece{
    color: #ff4400;
    background-color: #ffffff;
    border-radius: 30px;
    font-size: 25px;
    border: none;
    width: 110%;
    height: 80px;
    font-weight: 600;
    margin-left: 250%;
    margin-top: 2%;
    cursor: pointer;
    transition: all .2s ease;
}

#comece:hover{
    box-shadow: #ffffff 0px 7px 29px 0px;
    transform: translateY(-10px);
}

#appstore{
    width: 15%;
    margin-left: 37%;
    margin-top: -0.2%;
}

#container2{
    position:absolute;
    z-index:1;
    width: 100%;
    text-align: center;
}

#comidas{
    width: 100%;
    margin-top: 18.6%;
    position:absolute;
    z-index:0;
}
`

export function Start() {
    return (
        <>
        <Container>
        <div id="container">
        <div id="navbar">
            <div id="selecao">
                <a id="home" >Home</a>
            </div>
            <a id="sobre" href="sobre.html" >Sobre</a>
            <a id="contato" href="contato.html" >Contato</a>
            <div id="cad">
                <a id="cadastro" href="../../Cadastro" >Cadastre-se</a>
                <a id="lista" href="../../Cadastros_Lista" >Cadastros</a>
                <button id="entrar" >Entrar</button>
            </div>
        </div>
        <div id="container2">
            <img id="logo" src={require('../../images/ontime.png')} />
            <h1 id="slogan" >Seu alimento no prazo certo!</h1>
            <div id="cont_baixe">
                <div>
                    <h1 id="baixe">Baixe já nosso aplicativo</h1>
                    <h1 id="baixe">e comece a economizar.</h1>
                </div>
                <img id="googleplay" src={require('../../images/googleplay.png')} />
            </div>
            <div id="cont_baixe">
                <div>
                    <button id="comece" onClick="document.getElementById('card').scrollIntoView({behavior: 'smooth'});" >Comece a comprar ⮞</button>
                </div>
                <img id="appstore" src={require('../../images/appstore.png')} />
            </div>
        </div>
        <img id="comidas" src={require('../../images/comidas.png')} />
    </div>
    </Container>
        </>
    );
}