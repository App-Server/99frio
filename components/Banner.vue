<template>
    <div>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card-body">
                            <h3 class="card-title">
                                <strong style="color: #0059FF;">99Frio</strong> 
                                Conectando Fabricantes, Instaladores e Clientes
                                <strong style="color: #0059FF;">ar condicionado!</strong>
                            </h3>
                            <p style="margin-top: 30px;">
                                Objetivo: Criar um ecossistema onde fabricantes, instaladores e clientes possam fechar negócios de forma rápida e confiável.
                            </p>
                            <p> Uma plataforma que facilita a conexão entre usuários e profissionais especializados na instalação de ar condicionado em sua região. </p>
                            <div class="d-grid gap-2">
                                <NuxtLink to="/cadastro" class="btn btn-primary">Sou instalador e quero cadastrar</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card-body">
                            <div class="video-container">
                                <iframe 
                                    src="https://www.youtube.com/embed/6Fh5Hs_0iz0?si=V08IAhadakGug58x" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.banner {
    margin-top: 80px;
}

/* Responsividade do vídeo */
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Proporção 16:9 */
    height: 0;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>