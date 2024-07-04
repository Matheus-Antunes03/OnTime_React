<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchProducts } from '../../api/fetch-products';
import { deleteProduct } from '../../api/delete-product';

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

export function Lista_Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const fetchedProducts = await fetchProducts();
        console.log(fetchedProducts);
        setProdutos(fetchedProducts);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja deletar este produto?')) {
            await deleteProduct(id);
            loadProducts();
        }
    };

    return (
        <Container>
            <Content>
                <h1>PRODUTOS</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Ação</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Preço</th>
                            <th>Data Validade</th>
                            <th>Peso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td><button onClick={() => handleDelete(produto.id)}>Deletar</button></td>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.dataValidade}</td>
                                <td>{produto.peso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </Container>
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
        margin: 50px auto auto auto;
        border-radius: 50px;
        text-align: center;
    }
    
    #coluna{
        background-color: #ff4400;
        width: 15%;
        height: 50px;
        color: #ffffff;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin: 10px 0 0 0;
        border-radius: 10px 10px 0 0;
    }

    #produtos{
        color: #ff4400;
        font-weight: bold;
    }
`

export function Lista_Produtos() {
    return (
        <>
            <Container>
                <div id="content">
                    <h1 id="produtos">PRODUTOS</h1>
                    <div id="lista">
                        <div id="coluna">ID</div>
                        <div id="coluna">Nome</div>
                        <div id="coluna">Marca</div>
                        <div id="coluna">Preço</div>
                        <div id="coluna">Data Validade</div>
                        <div id="coluna">Peso</div>
                    </div>
                </div>
            </Container>
        </>
>>>>>>> f8883672dc917c664c773b28f2765a6ec48f75e8
    );
}