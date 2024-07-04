import React, { useState } from 'react';
import styled from 'styled-components';
import { createProduct } from '../../api/create-product';

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

    #unidadeMedida{
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
        width: 30%;
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

export function Colunas_Cad_Prod() {
    const [formData, setFormData] = useState({
        nome: '',
        marca: '',
        precoOriginal: '',
        dataValidade: '',
        peso: '',
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
            const response = await createProduct(dataToSubmit);
            console.log('Produto criado com sucesso:', response);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
        }
    };

    function janela(){
        window.confirm("Cadastro efetuado")
    }

    return (
        <>
            <Container>
<<<<<<< HEAD
                <form onSubmit={handleSubmit}>
                    <div id="container">
                        <div id="colunas">
                            <div id="coluna1">
                                <h2>Nome do produto</h2>
                                <input type="text" name="nome" placeholder="Digite o nome do produto" onChange={handleChange} />
                                <h2>Marca</h2>
                                <input type="text" name="marca" placeholder="Digite a marca" onChange={handleChange} />
                                <h2>Preço</h2>
                                <input type="number" name="precoOriginal" placeholder="R$ 0.00" onChange={handleChange} />
                                <h2>Data de validade</h2>
                                <input type="date" name="dataValidade" onChange={handleChange} />
                                <h2>Peso</h2>
                                <input type="number" name="peso" placeholder="0.00" onChange={handleChange} />
                            </div>
=======
                <div id="container">
                    <div id="colunas">
                        <div id="coluna1">
                            <h2>Nome do produto</h2>
                            <input type="text" placeholder="Digite o nome do produto"/>
                            <h2>Marca</h2>
                            <input type="text" placeholder="Digite a marca"/>
                            <h2>Preço</h2>
                            <input type="number" placeholder="R$ 0.00"/>
                            <h2>Peso</h2>
                            <input type="number" placeholder="0.00"/>
                            <h2>Data de validade</h2>
                            <input type="date"/>
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
                        </div>
                        <button onClick={janela} id="cadastrar">Cadastrar</button>
                    </div>
                </form>
            </Container>
        </>
    );
}