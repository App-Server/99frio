<template>
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#"><strong style="color: #0059FF;"><h3> Buscar Instalador </h3></strong> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <NuxtLink to="/" class="nav-link">Cadastro</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#">Cadastro do instalador</a> -->
                            <NuxtLink to="/pessoa-fisica" class="nav-link">Cadastro Pessoa Física</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/pessoa-juridica" class="nav-link">Cadastro Pessoa Jurídica</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#" class="nav-link">Suporte</NuxtLink>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>