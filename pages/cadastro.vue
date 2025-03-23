<template>
    <div>
        <br>
        <div class="container">
            <h3>Cadastro de instalador</h3>
            <div class="card">
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nome completo (para empresa razão social) </label>
                            <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Obrigatório" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Obrigatório" required>
                        </div>
                        <div class="mb-3">
                            <label for="whatsapp" class="form-label">Whatsapp</label>
                            <input type="text" name="whatsapp" class="form-control" id="whatsapp"  aria-describedby="emailHelp" placeholder="Obrigatório" required>
                        </div>
                        <div class="mb-3">
                            <label for="cpf" class="form-label">CPF</label>
                            <input type="text" name="cpf" class="form-control" id="cpf" aria-describedby="emailHelp"  placeholder="Obrigatório" required>
                        </div>

                        <div class="mb-3">
                            <label for="cnpj" class="form-label">CNPJ</label>
                            <input type="text" name="cnpj" class="form-control" id="cnpj" aria-describedby="emailHelp" placeholder="Para empresas MEI, ME, Ltda, S/A" >
                        </div>                
                        <label for="exampleInputEmail1" class="form-label">Quantos anos de experiência você tem na área de climatizaçãp?</label>
                        <select class="form-select mb-3" name="anos_experiencia" aria-label="Default select example" placeholder="Obrigatório" required>
                            <option selected></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>   
                        
                        <label for="exampleInputEmail1" class="form-label">Escolha o estado de atuação *</label>
                        <select class="form-select mb-3" name="estado" aria-label="Escolha o estado de atuação" required>
                            <option selected></option>
                            <option value="NA">Todo o Brasil</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        
                        <label for="exampleInputEmail1" class="form-label" >Emitir Nota Fiscal? *</label>
                        <select class="form-select mb-3" name="nota_fiscal" aria-label="Default select example" required >
                            <option selected ></option>
                            <option value="1">Sim</option>
                            <option value="2">Não</option>
                        </select> 

                        <div class=" mb-3">
                            <label for="exampleInputEmail1" class="form-label">Link do Site</label>
                            <input type="text" name="link_site" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Link do Instagram</label>
                            <input type="text" name="link_instagram" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Link do LinkedIn</label>
                            <input type="text" name="link_linkedin" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                            
                        <div class="mb-3">
                            <label for="validationCustom04" class="form-label">Deixe a sua mensagem para seus clientes</label>                                    
                            <textarea type="name" name="mensagem" class="form-control" id="comments" style="height: 100px" placeholder="Obrigatório" required></textarea>
                        </div>       
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>