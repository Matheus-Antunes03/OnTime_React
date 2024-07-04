import React, { useState } from 'react';
import styled from 'styled-components';
import { createOrder } from '../../api/create-order';

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
        margin: 40px auto auto auto;
        width: 45%;
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
`;

export function Colunas_Cad_Ped() {
    const [formData, setFormData] = useState({
        idUsuario: '',
        idProduto: '',
        idEstabelecimento: '',
        quantidade: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
        };
        try {
            const response = await createOrder(dataToSubmit);
            console.log('Pedido criado com sucesso:', response);
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
        }
    };

    function janela(){
        window.confirm("Pedido efetuado")
    }

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <div id="container">
                        <div id="colunas">
                            <div id="coluna1">
                                <h2>ID Usuário</h2>
                                <input type="number" name='idUsuario' placeholder="Digite o ID do usuário" onChange={handleChange} />
                                <h2>ID Produto</h2>
                                <input type="number" name='idProduto' placeholder="Digite o ID do produto" onChange={handleChange} />
                                <h2>ID Estabelecimento</h2>
                                <input type="number" name='idEstabelecimento' placeholder="Digite o ID do estabelecimento" onChange={handleChange} />
                                <h2>Quantidade</h2>
                                <input type="number" name='quantidade' placeholder="0" onChange={handleChange} />
                            </div>
                        </div>
                        <button onClick={janela} id="cadastrar">Fazer Pedido</button>
                    </div>
                </form>
            </Container>
        </>
    );
}