//site que recebe o nome de que o usuário digitar, adiciona em uma array e sorteia algum dos nomes

let lista_com_nomes = []
let btn_sortear = document.querySelector('#sortear')
let btn_adicionar = document.querySelector('#adicionar')
let lista = document.querySelector('#lista-nomes')
let sorteado = document.querySelector('#sorteado')

function adicionar() {

  let nome = document.querySelector('#nome').value

  if (nome == '') {
    alert('Preencha o campo')
  } else {
    lista_com_nomes.push(nome)
    console.log(lista_com_nomes)

    let novo_nome = document.createElement('li')
    novo_nome.classList.add('item-lista')
    novo_nome.innerText = nome
    lista.appendChild(novo_nome)
    nome.value = ''
    return lista_com_nomes
  }

}

function apaga_texto() {
  let nome = document.querySelector('#nome')
  nome.value = ''
  nome.focus()
}

function sortear() {
  let random = Math.floor(Math.random() * lista_com_nomes.length)
  sorteado.innerHTML = 'O sorteado é: ' + lista_com_nomes[random]
}

btn_adicionar.addEventListener('click', adicionar)
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    adicionar()
    apaga_texto()
  }
})
btn_adicionar.addEventListener('click', apaga_texto)
btn_sortear.addEventListener('click', sortear)
