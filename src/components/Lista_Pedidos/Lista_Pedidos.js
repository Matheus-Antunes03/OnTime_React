import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchOrders } from '../../api/fetch-orders';	
import { deleteOrder } from '../../api/delete-order';

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


export function Lista_Pedidos() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const fetchedOrders = await fetchOrders();
        console.log(fetchedOrders);
        setOrders(fetchedOrders);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja deletar este pedido?')) {
            await deleteOrder(id);
            loadOrders();
        }
    };
    return (
        <>
            <Container>
            <Content>
                <h1>PEDIDOS</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Ação</th>
                            <th>ID</th>
                            <th>ID usuário</th>
                            <th>ID produto</th>
                            <th>ID estabelecimento</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((pedido) => (
                            <tr key={pedido.id}>
                                <td><button onClick={() => handleDelete(pedido.id)}>Deletar</button></td>
                                <td>{pedido.id}</td>
                                <td>{pedido.idUsuario}</td>
                                <td>{pedido.idProduto}</td>
                                <td>{pedido.idEstabelecimento}</td>
                                <td>{pedido.quantidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
            </Container>
        </>
    );
}