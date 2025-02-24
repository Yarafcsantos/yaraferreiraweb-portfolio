const arrowRight = document.querySelector ('.portfolio-box .navigation .arrow-right')
const arrowLeft = document.querySelector ('.portfolio-box .navigation .arrow-left')

let index = 0

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide')
    const portfolioDetails = document.querySelectorAll('.portfolio-detail')


    imgSlide.style.transform = ` translateX(calc(${index * -100}% - ${index * 1 }rem))`
    
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    })
    portfolioDetails[index].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++
        arrowLeft.classList.remove('disabled')
    }
    else {
        index = 5
        arrowRight.classList.add('disabled')
    }

    activePortfolio()
})

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--
        arrowRight.classList.remove('disabled')
    }
    else {
        index = 0
        arrowLeft.classList.add('disabled')
    }

    activePortfolio()
})

/** Formulario */
document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores do formulário
    let nome = document.querySelector("input[placeholder='Digite seu nome completo']").value;
    let telefone = document.querySelector("input[placeholder='(55) 22222-2222']").value;
    let email = document.querySelector("input[placeholder='Seu melhor email']").value;
    let mensagem = document.querySelector("#mensagem").value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (nome === "" || telefone === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    // Formata a mensagem para o WhatsApp
    let mensagemFormatada = `Olá! Tenho interesse em um projeto e gostaria de mais informações. 👋%0A%0A`
        + `📌 *Nome:* ${nome}%0A`
        + `📌 *Telefone:* ${telefone}%0A`
        + `📌 *Email:* ${email}%0A`
        + `📝 *Objetivo do Contato:* ${mensagem}`;

    // Número do WhatsApp para onde a mensagem será enviada (adicione seu número)
    let numeroWhatsApp = "5574991398908"; // Substitua pelo seu número com DDD (sem + ou -)

    // Monta o link do WhatsApp
    let url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemFormatada}`;

    // Redireciona para o WhatsApp
    window.open(url, "_blank");
});
