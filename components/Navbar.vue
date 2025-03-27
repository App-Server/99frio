<template>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container">
            <!-- Logo -->
            <NuxtLink class="navbar-brand logo" to="/">
                <h2>99Frio</h2>
            </NuxtLink>

            <!-- Botão do menu responsivo -->
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Itens do Menu -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <NuxtLink class="nav-link underline-hover" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link underline-hover" href="https://99frio.srv757991.hstgr.cloud/cadastro">Cadastro</a>
                    </li>   
                    <li class="nav-item">
                        <NuxtLink class="nav-link underline-hover" to="/treinamento">Treinamento</NuxtLink>
                    </li>  
                    <li class="nav-item">
                        <NuxtLink class="nav-link underline-hover" to="/">Suporte</NuxtLink>
                    </li>  
                </ul>
                
                <!-- Botão Cadastrar -->
                <a href="https://99frio.srv757991.hstgr.cloud/cadastro" class="btn btn-gradient">Cadastrar</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Navbar */
.navbar-custom {
    background: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 12px 0;
}

/* Logo */
.logo h2 {
    color: #0059FF;
    font-weight: bold;
    transition: 0.3s;
}

.logo:hover h2 {
    color: #003ecb;
}

/* Links do Menu */
.navbar-nav .nav-link {
    font-size: 16px;
    color: #333;
    padding: 10px 15px;
    font-weight: 500;
    position: relative;
    transition: 0.3s ease-in-out;
}

/* Underline Animado */
.underline-hover::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: #0059FF;
    margin-top: 4px;
    transition: width 0.3s ease-in-out;
}

.underline-hover:hover::after {
    width: 100%;
}

.navbar-nav .nav-link:hover {
    color: #0059FF;
}

/* Botão "Cadastrar" */
.btn-gradient {
    background: linear-gradient(45deg, #007bff, #6610f2);
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
}

.btn-gradient:hover {
    background: linear-gradient(45deg, #0056b3, #520dc2);
    transform: scale(1.05);
    color: white;
}

/* Responsividade */
@media (max-width: 991px) {
    .navbar-nav {
        text-align: center;
    }
    
    .btn-gradient {
        width: 100%;
        margin-top: 10px;
    }
}
</style>
