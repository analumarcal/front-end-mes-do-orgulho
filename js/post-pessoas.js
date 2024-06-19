const btn = document.querySelector('#cadastrar');

btn.addEventListener('click', () => {
    const pessoa = getDadosForm();
    enviarDadosParaAPI(pessoa);
})

function getDadosForm() {
    const inputNome = document.querySelector('#nome');
    const inputImagem = document.querySelector('#imagem');
    const inputBandeira = document.querySelector('#bandeira');
    const inputBio = document.querySelector('#bio');

    const pessoa = {
        nome: inputNome.value,
        imagem: inputImagem.value,
        bandeira: inputBandeira.value,
        bio: inputBio.value
    }
    return pessoa;
}

async function enviarDadosParaAPI (pessoa) {
    const resposta = await fetch('https://back-end-mes-do-orgulho.onrender.com/pessoas', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(pessoa)
    });
    try {
        if (resposta.status === 201) {
            limparCampos();
            window.location.href('./index.html');
        } else {
            console.log('Erro ao adicionar pessoa.')
        }
    }
    catch (e) {
        console.log(e);
    }
    

}

function limparCampos(){
    document.querySelector('#nome').value = '';
    document.querySelector('#imagem').value = '';
    document.querySelector('#bandeira').value = '';
    document.querySelector('#bio').value = '';
}