<template>
    <div>
        <div class="desktop">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <NuxtLink class="navbar-brand" to="/"><strong style="color: #0059FF;"><h3> Buscar Instalador </h3></strong> </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="navbar-brand" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="navbar-brand" to="/cadastro">Cadastro</NuxtLink>
                    </li>  
                    <li class="nav-item">
                        <NuxtLink class="navbar-brand" to="/">Calculadora BTU</NuxtLink>
                    </li>    
                    <li class="nav-item">
                        <NuxtLink class="navbar-brand" to="/">Suporte</NuxtLink>
                    </li>                 
                </ul>
                </div>
            </div>
        </nav>
        <!--  -->
        </div>
        <div class="responsive">
            <div class="container" style="margin-top: 40px;">
                <div class="row">
                    <div class="col-sm-7 mb-3 mb-sm-0">
                        <NuxtLink class="navbar-brand" to="/"><strong style="color: #0059FF;"><h3> Buscar Instalador </h3></strong> </NuxtLink>
                    </div>
                    <div class="col-sm-1">
                        <NuxtLink class="navbar-brand" to="/">Home</NuxtLink>
                    </div>
                    <div class="col-sm-1">
                        <NuxtLink class="navbar-brand" to="/cadastro">Cadastro</NuxtLink>
                    </div>
                    <div class="col-sm-2">
                        <NuxtLink class="navbar-brand" to="/">Calculadora BTU</NuxtLink>
                    </div>
                    <div class="col-sm-1">
                        <NuxtLink class="navbar-brand" to="/">Suporte</NuxtLink>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<style>
@media (max-width: 1064px) {
    .responsive {
        display: none;
    }
}

@media (min-width: 1064px) {
    .desktop {
        display: none;
    }
}
</style>
