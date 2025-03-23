<template>
    <div class="container py-5">
        <h2 class="text-center mb-4">💼 Planos de Assinatura 99Frio</h2>
        <div class="table-responsive">
            <table class="table custom-table text-center">
                <thead>
                    <tr>
                        <th>Recurso / Plano</th>
                        <th class="basic">Basic </th>
                        <th class="vip">Vip </th>
                        <th class="premium">Premium </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>📢 Consultoria de Marketing</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>🎨 Design Profissional</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>🏆 Criação de Portfólio</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>🌐 Criação de Site Profissional</td>
                        <td>❌</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>✍ Logomarca Personalizada</td>
                        <td>❌</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>⏳ Suporte Prioritário 24/7</td>
                        <td>❌</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>📱 Gestão de Mídias Sociais</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>🎬 Edição de Vídeos para Redes</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>🚀 Gestão de Tráfego (Google/Facebook)</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>✅</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
/* Estilização da tabela */
.custom-table {
    border-collapse: collapse;
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

/* Cabeçalho estilizado */
.custom-table thead {
    background: #343a40;
    color: white;
}

.custom-table th {
    padding: 12px;
    text-transform: uppercase;
}

/* Coloração dos planos */
.custom-table .basic {
    background: rgb(255, 255, 255);
}

.custom-table .vip {
    background: rgb(255, 255, 255);
}

.custom-table .premium {
    background: rgb(255, 255, 255);
}

/* Linhas da tabela */
.custom-table td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
}

/* Efeito hover */
.custom-table tbody tr:hover {
    background: rgba(0, 0, 0, 0.05);
    transition: 0.3s;
}

/* Responsividade */
@media (max-width: 768px) {
    .custom-table {
        font-size: 14px;
    }
    .custom-table th,
    .custom-table td {
        padding: 8px;
    }
}
</style>
