import React, { useState } from 'react';
import styled from 'styled-components';
import { createEstablishment } from '../../api/create-establishment';

const Container = styled.div`
    #container{
        width: 90%;
        height: 590px;
        background-color: #ffffff;
        border-radius: 30px;
        margin: 0 500px 0 0;
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

    #tipos{
        border: none;
        outline: none;
        margin: 0 0 0 40px;
        color: #ff4400;
    }

    input{
        color: #ff4400;
        font-family: sans-serif;
        margin-left: 40px;
        border: none;
        outline: none;
        width: 200px;
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
        margin: 50px 0 0 0;
    }

    #coluna2{
        margin: 20px 0 0 150px;
    }

    #termos{
        width: 20px;
        margin: 10px 0 0 0;
    }

    #termo{
        color: #ff4400;
        font-family: sans-serif;
        letter-spacing: -0.5px;
        font-size: 13px;
    }

    #cadastrar{
        display: block;
        margin: 35px auto auto auto;
        width: 25%;
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

    #produto{
        display: block;
        margin: 15px auto auto auto;
        width: 15%;
        height: 10%;
        border: none;
        text-decoration: none;
        background-color: #ffffff;
        font-weight: bold;
        color: #ff4400;
        border-radius: 50px;
        font-size: 15px;
        cursor: pointer;
    }
`;

export function Colunas_Cad_Est() {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        inscricaoMunicipal: '',
        cnpj: '',
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
            const response = await createEstablishment(dataToSubmit);
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
                <form onSubmit={handleSubmit}>
                    <div id="container">
                        <div id="colunas">
                            <div id="coluna1">
                                <h2>Nome do estabelecimento</h2>
                                <input type="text" name="nome" placeholder="Digite o nome do estabelecimento" onChange={handleChange} />
                                <h2>CNPJ</h2>
                                <input type="number" name="cnpj" placeholder="00.000.000/0000-00" onChange={handleChange} />
                                <h2>Endereço</h2>
                                <input type="text" name="endereco" placeholder="Digite seu endereço" onChange={handleChange} />
                                <h2>Inscrição municipal</h2>
                                <input type="number" name="inscricaoMunicipal" placeholder="000.000.000-00" onChange={handleChange} />
                            </div>
                        </div>
                        <button onClick={janela} id="cadastrar">Cadastrar</button>
                    </div>
                </form>
            </Container>
        </>
    );
}