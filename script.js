// =====================
// Botão Contraste
// =====================
const btnContrast = document.getElementById("btnContrast");
btnContrast.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

// =====================
// Botão Aumentar Fonte
// =====================
const btnFont = document.getElementById("btnFont");
btnFont.addEventListener("click", () => {
  document.body.classList.toggle("large-font");
});

// =====================
// Botão Reservar Agora
// =====================
const btnReserve = document.getElementById("btnReserve");
btnReserve.addEventListener("click", () => {
  // Redireciona para a página de reservas
  window.location.href = "reservas.html";
});

// =====================
// Botão Login
// =====================
const btnLogin = document.querySelector(".login-btn");
btnLogin.addEventListener("click", () => {
  window.location.href = "login.html";
});

// =====================
// Botão Cadastro
// =====================
const btnSignup = document.querySelector(".signup-btn");
btnSignup.addEventListener("click", () => {
  window.location.href = "cadastro.html";
});

// =====================
// Função de pesquisa
// =====================
function handleSearch(event) {
  event.preventDefault();
  const location = document.getElementById("search-location").value;
  const date = document.getElementById("search-date").value;
  const people = document.getElementById("search-people").value;

  alert(`Buscando: \nLocal: ${location}\nData: ${date}\nPessoas: ${people}`);
  // Aqui você pode redirecionar para uma página de resultados se quiser:
  // window.location.href = `resultados.html?local=${location}&data=${date}&pessoas=${people}`;
}

