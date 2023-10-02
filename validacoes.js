//Essas constantes armazenam a referência aos elementos do formulário de acordo com seu respectivo id:
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 
//Armazena uma expressão regular que valida um número de telefone com 9 dígitos:
const whatsRegex = /\d{9}$/g

//Essa função adiciona na tela a mensagem de erro:
function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

//Essa função remove a mensagem de erro:
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

//Essa função valida o nome digitado pelo usuário:
function nameValidate() {
    if(campos[0].value.length < 11) {
        setError(0);
    } else {
        removeError(0);
    }
}
//Essa função valida o número do telefone digitado pelo usuário:
function telefoneValidate() {
    if(!whatsRegex.test(campos[2].value)) {
        setError(2); 
    } else {
        removeError(2);
    }
}
