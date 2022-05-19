function meuEscopo() {
    const formulario = document.querySelector('.formulario')
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        message('Enviado com sucesso!');
    })

    function message (msg) {
        const enviado = document.querySelector('.enviado');
        enviado.innerHTML = `<p>${msg}</p>`;
    }
}

meuEscopo();