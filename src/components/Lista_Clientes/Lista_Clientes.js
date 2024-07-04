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
            </Container>
        </>
    );
}