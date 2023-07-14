// Validando os imputs

const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nomeform");
const emailInput = document.querySelector("#emailform");
const msgInput = document.querySelector("#msgform");

const btnSubmit = document.querySelector("#submitform");
const toastLiveExample = document.getElementById('liveToast')




form.addEventListener("submit", (e) => {

    e.preventDefault();

    //verifica se o nome está vazio
    if (nomeInput.value == "") {

        alert("Por favor nforme seu nome.")
        return;
    }

    //verifica se o email esta preenchido e valido
    if (emailInput.value == "" || !emailvalido(emailInput.value)) {

        alert("Por favor informe seu email.")
        return;
    }
    // verifica se há msg
    if (msgInput.value == "") {

        alert("Por favor digite uma mensagem.")
        return;
    }

   
    form.submit();
});

//Função que valida email
function emailvalido(email) {

    const regexEmail = new RegExp(

        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (regexEmail.test(email)) {

        return true;
    }
    return false;

}



  if (btnSubmit) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    btnSubmit.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
  
  








/*portifolio.templates = {

    MsgEnvioEmail: `<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div> `,

}*/