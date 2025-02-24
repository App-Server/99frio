<template>
    <div>
        <div class="container" style="margin-top: 50px;">
            <div class="alert alert-primary" role="alert">
                Faça o seu cadastro e aparecer para seus clientes.
            </div><br>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div class="card-body">
                        <h5 class="card-title">Pessoa Física</h5>
                        <p class="card-text">Autonômo, Individual</p>
                        <NuxtLink to="/pessoa-fisica" class="btn btn-primary">Cadastro CPF</NuxtLink>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div class="card-body">
                        <h5 class="card-title">Pessoa Jurídica</h5>
                        <p class="card-text">MEI, ME, Sociedade Limitada</p>
                        <NuxtLink to="/pessoa-juridica" class="btn btn-primary">Cadastro PJ</NuxtLink>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>