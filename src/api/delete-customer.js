export async function deleteCustomer(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/usuario/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao excluir usuário', error);
    }
}