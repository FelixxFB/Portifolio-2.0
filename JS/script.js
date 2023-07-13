// Validando os imputs
const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nomeform");
const emailInput = document.querySelector("#emailform");
const msgInput = document.querySelector("#msgform");
const btnSubmit = document.querySelector("#submitform");


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