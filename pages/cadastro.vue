<template>
    <div>
        <br>
        <div class="container">
            <h3>Cadastro de instalador</h3>
            <div v-if="mensagemAlerta" :class="tipoAlerta === 'success' ? 'alert-success' : 'alert-error'">
            {{ mensagemAlerta }}
            </div>
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="cadastrar">
                        <div class="mb-3">
                            <label class="form-label">Nome completo (para empresa razão social)</label>
                            <input v-model="form.nome" type="text" class="form-control" placeholder="Obrigatório" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input v-model="form.email" type="email" class="form-control" placeholder="Obrigatório" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Whatsapp</label>
                            <input v-model="form.whatsapp" type="text" class="form-control" placeholder="Obrigatório" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">CPF</label>
                            <input v-model="form.cpf" type="text" class="form-control" placeholder="Obrigatório" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">CNPJ</label>
                            <input v-model="form.cnpj" type="text" class="form-control" placeholder="Para empresas MEI, ME, Ltda, S/A">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Quantos anos de experiência você tem na área de climatização?</label>
                            <select v-model="form.anos_experiencia" class="form-select" required>
                                <option value="" disabled selected>Selecione</option>
                                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Escolha o estado de atuação *</label>
                            <select v-model="form.estado" class="form-select" required>
                                <option value="" disabled selected>Selecione</option>
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
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Emitir Nota Fiscal? *</label>
                            <select v-model="form.nota_fiscal" class="form-select" required>
                                <option value="" disabled selected>Selecione</option>
                                <option value="1">Sim</option>
                                <option value="2">Não</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Link do Site</label>
                            <input v-model="form.link_site" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Link do Instagram</label>
                            <input v-model="form.link_instagram" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Deixe sua mensagem para seus clientes</label>
                            <textarea v-model="form.mensagem" class="form-control" placeholder="Obrigatório" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  nome: '',
  email: '',
  whatsapp: '',
  cpf: '',
  cnpj: '',
  estado: '',
  nota_fiscal: '',
  link_site: '',
  link_instagram: '',
  mensagem: ''
});
const mensagemAlerta = ref('');
const tipoAlerta = ref('');

const cadastrar = async () => {
  try {
    const response = await fetch('/api/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });

    const result = await response.json();

    if (result.success) {
      mensagemAlerta.value = result.message;
      tipoAlerta.value = 'success';
      setTimeout(() => {
        router.push('/planos');
      }, 4000);
    } else {
      mensagemAlerta.value = result.message;
      tipoAlerta.value = 'error';
    }
  } catch (error) {
    mensagemAlerta.value = 'Erro ao conectar ao servidor.';
    tipoAlerta.value = 'error';
  }
};
</script>