<template>
    <div class="container mt-5">
        <h3 class="text-center text-primary">Recursos Principais</h3>
        <div class="row mt-4">
            <div class="col-sm-4 mb-4">
                <div class="card custom-card">
                    <div class="card-body p-4 text-center">
                        <h5 class="text-primary">Sistema de Orçamentos</h5><br>
                        <p class="mt-3">Orçamentos diretamente dos técnicos.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-4">
                <div class="card custom-card">
                    <div class="card-body p-4 text-center">
                        <h5 class="text-primary">Calculadora BTU Personalizada</h5><br>
                        <p class="mt-3">Ajuda na escolha do equipamento ideal.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-4">
                <div class="card custom-card">
                    <div class="card-body p-4 text-center">
                        <h5 class="text-primary">Plano de Publicidade</h5>
                        <p class="mt-3">Assinaturas fixas para maior visibilidade na plataforma.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-card {
    border: 1px solid #ddd; /* Borda sutil para destacar */
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra inicial */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.custom-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra mais forte ao passar o mouse */
}
</style>
