<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nome = ref("");
const email = ref("");
const whatsapp = ref("");
const cpf = ref("");
const estado = ref("");

const submitForm = async (event) => {
  event.preventDefault();

  const data = {
    nome_completo: nome.value,
    email: email.value,
    whatsapp: whatsapp.value,
    cpf: cpf.value,
    estado: estado.value,
  };

  try {
    const response = await fetch(
      "https://app-6anock.us-east-1.xata.sh/db/database-cloud:main/tables/instaladores-ac-pf/data",
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3hhdGEuaW8iLCJzdWIiOiJ1c3JfMzdxaTBydW1nbDFkcmJqODV2MjU3azlnaG8iLCJleHAiOjE3NDAzNTUyMDcsImlhdCI6MTc0MDM1NDMwNywid29ya3NwYWNlcyI6eyI2YW5vY2siOnsicm9sZSI6Im93bmVyIn19LCJlbWFpbCI6ImVwaWNhcHBjb2RlQGdtYWlsLmNvbSIsIkZpbGVTdG9yYWdlSUQiOiIifQ.iRDTC7VOAEIe_nlresjGNiWtM0DZyQagzqpXIeNtUkKmoo8WtrHYYImhGeVejYiHrgC_wcOmMfQ1gU7DHapwDA',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      console.log("Cadastro realizado com sucesso!");
      router.push("/pagamento"); // Redirecionamento para a página de pagamento
    } else {
      console.error("Erro ao cadastrar:", await response.json());
    }
  } catch (error) {
    console.error("Erro ao conectar com a API:", error);
  }
};
</script>

<template>
  <div>
    <div class="container" style="margin-top: 50px;">
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-body">
          <form @submit="submitForm" class="row g-3 needs-validation" novalidate>
            <div class="col-md-6">
              <label class="form-label">Nome Completo</label>
              <input v-model="nome" type="text" class="form-control" required />
            </div>
            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input v-model="email" type="email" class="form-control" required />
            </div>
            <div class="col-md-4">
              <label class="form-label">Whatsapp</label>
              <input v-model="whatsapp" type="text" class="form-control" required />
            </div>
            <div class="col-md-4">
              <label class="form-label">CPF</label>
              <input v-model="cpf" type="text" class="form-control" required />
            </div>
            <div class="col-md-4">
              <label class="form-label">Qual estado você presta serviços de refrigeração?</label>
              <select v-model="estado" class="form-select" required>
                <option selected disabled>Selecione um estado</option>
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
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Cadastro Pessoa Física</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
