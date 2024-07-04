export async function fetchEstablishments() {
    try {
        const response = await fetch('http://localhost:3000/api/estabelecimento', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar estabelecimentos', error);
    }
}