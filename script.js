function meuEscopo() {
    const formulario = document.querySelector('.formulario')
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

    const enviado = document.querySelector('.enviado');
    enviado.innerHTML = `<p>Enviado com Sucesso!</p>`        

    })


}

meuEscopo();