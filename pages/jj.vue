<template>
    <div>
        <header class="bg-primary text-white text-center py-4">
        <h1>JJ Refrigeração </h1>
        <p>⭐⭐⭐⭐⭐</p>
    </header>
    
    <div class="container my-5">
        <div class="row align-items-center">
            <div class="col-md-6">
                <img src="https://engehall.com.br/wp-content/uploads/2023/10/instalacao-de-ar-condicionado.webp" class="img-fluid rounded" alt="Instalação de ar-condicionado">
            </div>
            <div class="col-md-6">
                <h3>Atende: Salvador - BA</h3>
                <p><strong>Credenciado:</strong> TCL</p>
                <p><strong>Serviços:</strong> Instalação, manutenção e assistência técnica</p>
                <p><strong>Emitir Nota Fiscal:</strong> Sim</p>
                <p><strong>Tipo de atendimento:</strong> Residencial e Empresarial</p>
                <p><strong>Endereço:</strong>Av. Vasco da Gama, 2698 - Federação, Salvador - BA, 40230-731</p>
            </div>
        </div>
    </div>
    
    <div class="container text-center my-4">
        <h3>Entre em Contato</h3>
        <div class="d-flex justify-content-center gap-3">
            <a href="#" class="btn btn-gradient">WhatsApp</a>
            <a href="#" class="btn btn-gradient">Instagram</a>
            <a href="#" class="btn btn-gradient">Visitar Site</a>
        </div>
    </div>

    <div class="container my-5">
        <h3 class="text-center">Portfólio de Trabalhos</h3>
        <div class="row text-center">
            <div class="col-md-4">
                <img src="https://maisar.com.br/wp-content/uploads/2024/11/instalacao-de-ar-condicionado-em-curitiba.jpg" class="img-fluid rounded mb-3" alt="Trabalho realizado">
            </div>
            <div class="col-md-4">
                <img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia29004/instalacao-de-ar-condicionado-cpt.jpg" class="img-fluid rounded mb-3" alt="Instalação de ar-condicionado">
            </div>
            <div class="col-md-4">
                <img src="https://sienge.com.br/wp-content/uploads/2024/12/ponto-de-ar-condicionado.jpg" class="img-fluid rounded mb-3" alt="Manutenção de ar-condicionado">
            </div>
        </div>
    </div>
        <Footer />
    </div>
</template>

<style>
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
