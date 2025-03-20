<template>
    <div class="container my-5">
      <h3 class="text-center text-primary">Encontre Profissionais: Busque por localização ou tipo de serviço.</h3>
      <div class="row g-4 mt-4">
        <div class="col-md-4" v-for="(profissional, index) in profissionais" :key="index">
          <div class="card card-custom">
            <div class="card-header-custom">{{ profissional.nome }}</div>
            <div class="card-body text-center">
              <p><strong>📍 Atende:</strong> {{ profissional.local }}</p>
              <p><strong>🏆 Credenciado:</strong> {{ profissional.credenciado }}</p>
              <p><strong>🔧 Serviços:</strong> {{ profissional.servicos }}</p>
              <NuxtLink :to="profissional.link" class="btn btn-gradient mt-3">Contato</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profissionais: [
          { nome: "Kaique Rodrigo Guilherme Freitas", local: "Aracaju - SE", credenciado: "Gree", servicos: "Instalação e manutenção de ar condicionado", link: "/kaique" },
          { nome: "Raimundo Refrigeração", local: "São Paulo - SP", credenciado: "TCL", servicos: "Instalação e manutenção de ar condicionado", link: "#" },
          { nome: "Carlos & Pedro Climatização", local: "São Paulo - SP", credenciado: "Midea", servicos: "Instalação e manutenção de ar condicionado", link: "#" },
          { nome: "FH Climatização", local: "Minas Gerais - MG", credenciado: "Hitachi", servicos: "Instalação e manutenção de ar condicionado", link: "#" },
          { nome: "JJ Refrigeração", local: "Recife - PE", credenciado: "Agratto", servicos: "Instalação e manutenção de ar condicionado", link: "#" },
          { nome: "Levi Refrigeração", local: "Bahia - BA", credenciado: "LG", servicos: "Instalação e manutenção de ar condicionado", link: "#" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos dos Cards */
  .card-custom {
    border: none;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    min-height: 250px;
    background-color: #fff;
  }
  
  .card-custom:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* Cabeçalho do Card */
  .card-header-custom {
    background: linear-gradient(45deg, #0059FF, #003399);
    color: white;
    text-align: center;
    padding: 15px;
    font-weight: bold;
    font-size: 18px;
  }
  
  /* Botão */
  .btn-gradient {
    background: linear-gradient(45deg, #007bff, #6610f2);
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 50px;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
  }
  
  .btn-gradient:hover {
    background: linear-gradient(45deg, #0056b3, #520dc2);
    transform: scale(1.05);
    color: white;
  }
  </style>
  