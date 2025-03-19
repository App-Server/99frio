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
                        <button class="btn btn-success" type="submit">Cadastrar</button>
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
