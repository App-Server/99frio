<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <NuxtLink class="navbar-brand" to="/"><strong style="color: #0059FF;"><h2> 99Frio </h2></strong> </NuxtLink>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="navbar-brand" to="/" @click="closeNavbar">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="navbar-brand" to="/cadastro" @click="closeNavbar">Cadastro</NuxtLink>
                        </li>   
                        <li class="nav-item">
                            <NuxtLink class="navbar-brand" to="/" @click="closeNavbar">Suporte</NuxtLink>
                        </li>  
                    </ul>
                    <form class="d-flex" role="search">
                        <button class="btn btn-gradient" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const navbarCollapse = ref(null);

const closeNavbar = () => {
    if (navbarCollapse.value && navbarCollapse.value.classList.contains("show")) {
        navbarCollapse.value.classList.remove("show"); // Fecha o menu
    }
};
</script>

<style scoped>
.card-custom {
    border: none;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    min-height: 300px; /* Garantir uma altura mínima consistente */
}

.card-custom:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-header-custom {
    background: linear-gradient(45deg, #d4af37, #c68e17); /* Dourado para o Plano Basic */
    color: white;
    text-align: center;
    padding: 15px;
    font-weight: bold;
}

.btn-gradient {
    background: linear-gradient(45deg, #007bff, #6610f2); /* Gradiente no botão */
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 50px;
    transition: 0.3s;
}

.btn-gradient:hover {
    background: linear-gradient(45deg, #0056b3, #520dc2);
    transform: scale(1.05);
    color: white;
}

/* Novo estilo para o botão do Plano Basic (dourado) */
.btn-basic {
    background: linear-gradient(45deg, #d4af37, #c68e17);
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 50px;
    transition: 0.3s;
}

.btn-basic:hover {
    background: linear-gradient(45deg, #b5893f, #9c7c28);
    transform: scale(1.05);
}
</style>
