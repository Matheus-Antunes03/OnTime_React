export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/produto', {
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
        console.error('Erro ao buscar produtos', error);
    }
}