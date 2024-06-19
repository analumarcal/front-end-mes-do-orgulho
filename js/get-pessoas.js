const divPessoas = document.querySelector('#pessoas');

async function consultarPessoas() {
    const retorno = await fetch('https://back-end-mes-do-orgulho.onrender.com/pessoas');
    const pessoas = await retorno.json();
    preencherPessoas(pessoas);
    console.log("Pessoas.")
}

function preencherPessoas (pessoas) {
    pessoas.forEach(pessoa => {
        const novaPessoaHTML = `
            <div id="pessoa">
            <h2 class="subtitulo" id="exibir-nome">${pessoa.nome}</h2>
            <div id="container-imagem">
                <img id="exibir-imagem" src="${pessoa.imagem}" alt="">
            </div>
            <img id="exibir-bandeira" src="${pessoa.bandeira}" alt="">
            <p class="texto" id="exibir-bio">${pessoa.bio}</p>
        </div>
        `
        divPessoas.innerHTML += novaPessoaHTML;
    });
}

consultarPessoas();