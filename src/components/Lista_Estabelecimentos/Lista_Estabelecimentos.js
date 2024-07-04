import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchEstablishments } from '../../api/fetch-establishments';
import { deleteEstablishment } from '../../api/delete-establishment';

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

export function Lista_Estabelecimentos() {
    const [estabelecimentos, setestabelecimentos] = useState([]);

    useEffect(() => {
        loadEstablishments();
    }, []);

    const loadEstablishments = async () => {
        const fetchedEstablishments = await fetchEstablishments();
        console.log(fetchedEstablishments);
        setestabelecimentos(fetchedEstablishments);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja deletar este produto?')) {
            await deleteEstablishment(id);
            loadEstablishments();
        }
    };


    return (
        <Container>
            <Content>
                <h1>Estabelecimentos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Ação</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Insc. Munic.</th>
                            <th>CNPJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estabelecimentos.map((estabelecimento) => (
                            <tr key={estabelecimento.id}>
                                <td><button onClick={() => handleDelete(estabelecimento.id)}>Deletar</button></td>
                                <td>{estabelecimento.id}</td>
                                <td>{estabelecimento.nome}</td>
                                <td>{estabelecimento.endereco}</td>
                                <td>{estabelecimento.inscricaoMunicipal}</td>
                                <td>{estabelecimento.cnpj}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </Container>
    );
}