import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #cliente{
        width: 30%;
    }

    #card{
<<<<<<< HEAD
        width: 100%;
        height: 571px;
=======
        width: 80%;
        height: 450px;
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
        background-color: #ffffff;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        transition: all .2s ease;
    }

    #card:hover{
        box-shadow: #ffffff 0px 7px 29px 0px;
        transform: translateY(-10px);
    }

    #borda{
        display: block;
        margin: auto auto auto auto;
        width: 84%;
<<<<<<< HEAD
        height: 460px;
=======
        height: 400px;
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
        border-radius: 50px;
        border-width: 10px;
        border-style: solid;
        border-color: #ff4400;
    }

    #souum{
        color: #ff4400;
<<<<<<< HEAD
        font-size: 350%;
=======
        font-size: 260%;
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
        margin: 20px 0 0 0;
    }

    #marca1{
<<<<<<< HEAD
        width: 50%;
=======
        width: 70%;
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
        height: 70px;
        background-color: #ff4400;
        display: block;
        margin: auto auto auto auto;
        border-radius: 30px;
    }

    #clies{
        color: #ffffff;
        padding: 10px;
        font-size: 320%;
        margin: 10px auto auto auto;
    }

    #user{
        width: 50%;
        margin-top: 30px;
    }
`;

export function CardPed() {
    return (
        <>
            <Container>
                <a id="cliente" href="../../Cadastro_Pedido">
                    <button id="card">
                        <div id="borda">
                            <h1 id="souum">Quero fazer um</h1>
                            <div id="marca1">
                                <h1 id="clies">Pedido</h1>
                            </div>
<<<<<<< HEAD
                            <img id="user" src={require('../../images/sacola.png')} />
=======
                            <img id="user" src={require('../../images/user.png')} />
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
                        </div>
                    </button>
                </a>
            </Container>
        </>
    );
}