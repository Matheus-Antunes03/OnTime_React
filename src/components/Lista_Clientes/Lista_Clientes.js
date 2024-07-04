<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCustomers } from '../../api/fetch-customers';
import { deleteCustomer } from '../../api/delete-customer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Content = styled.div`
    background-color: #ffffff;
    width: 80%;
    border-radius: 50px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h1 {
        color: #ff4400;
        font-weight: bold;
        text-align: center;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        text-align: left;
        padding: 8px;
    }

    th {
        background-color: #ff4400;
        color: white;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export function Lista_Clientes() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const fetchedCustomers = await fetchCustomers();
        console.log(fetchedCustomers);
        setUsuarios(fetchedCustomers);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja deletar este produto?')) {
            await deleteCustomer(id);
            loadProducts();
        }
    };


    return (
        <>
            <Container>
                <Content>
                    <h1>CLIENTES</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Ação</th>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Data Nascimento</th>
                                <th>Telefone</th>
                                <th>CPF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}><td>
                                    <button onClick={() => handleDelete(usuario.id)}>Deletar</button></td>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.dataNasc}</td>
                                    <td>{usuario.telefone}</td>
                                    <td>{usuario.cpf}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Content>
=======
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #lista{
        display: flex;
        justify-content: space-around;
    }

    #content{
        width: 80%;
        height: 200px;
        background-color: #ffffff;
        display: block;
        margin: auto auto auto auto;
        border-radius: 50px;
        text-align: center;
    }
    
    #coluna{
        background-color: #ff4400;
        width: 18%;
        height: 50px;
        color: #ffffff;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin: 10px 0 0 0;
        border-radius: 10px 10px 0 0;
    }

    #clientes{
        color: #ff4400;
        font-weight: bold;
        margin-top: 0;
    }
`

export function Lista_Clientes() {
    return (
        <>
            <Container>
                <div id="content">
                    <h1 id="clientes">CLIENTES</h1>
                    <div id="lista">
                        <div id="coluna">ID</div>
                        <div id="coluna">Nome</div>
                        <div id="coluna">Data Nasc</div>
                        <div id="coluna">Telefone</div>
                        <div id="coluna">CPF</div>
                    </div>
                </div>
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
            </Container>
        </>
    );
}