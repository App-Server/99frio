export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    
    try {
        const body = await readBody(event); // Lê os dados enviados pelo frontend

        const response = await fetch('https://app-6anock.us-east-1.xata.sh/db/database-cloud:main/tables/cadastro-ac/data', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${config.XATA_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao cadastrar');
        }

        return { success: true, message: 'Cadastro realizado com sucesso!', data };
    } catch (error) {
        return { success: false, message: error.message || 'Erro inesperado ao cadastrar' };
    }
});
