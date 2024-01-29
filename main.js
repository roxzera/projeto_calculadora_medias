const button = document.getElementById('forms')
const aprovadoReprovado = document.querySelector('.resultado')
const imgHappy = '<img src="./imagens/aprovado.png" alt="aprovado">'
const imgSad = '<img src="./imagens/reprovado.png" alt="reprovado">'
const active = []
const note = []
const minimumGrade = parseFloat(prompt('Digite a nota minima'))

let mediaa = 0

lines = ''

function media(notas, index) {
    return notas / index
}

button.addEventListener('submit', function(e) {
    e.preventDefault()

    addLines();
    updateTable();
    checker();
})

function addLines() {
    const notas = document.getElementById('notas')
    const nameActivity = document.getElementById('names')

    if (active.includes(nameActivity.value)) {
        alert(`A atividade ${nameActivity.value} ja foi inclusa`)
    } else {
        active.push(nameActivity.value)
        note.push(parseFloat(notas.value))

        let linha = '<tr>'
        linha += `<td>${nameActivity.value}</td>`
        linha += `<td>${notas.value}</td>`
        if (notas.value >= minimumGrade) {
            linha += `<td>${imgHappy}</td>`
        } else {
            linha += `<td>${imgSad}</td>`
        }
        linha += `</tr>`
        lines += linha    
    }
    nameActivity.value = ''
    notas.value = ''
}

function updateTable() {
    let somaDasNotas = 0
    let contador = 0

    for (let i = 0; i < note.length; i++) {
        somaDasNotas += note[i]
        contador++
    }

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = lines

    mediaa = media(somaDasNotas, contador)
    const notaMedia = document.getElementById('nota-media').textContent = mediaa.toFixed(2)
}


function checker() {
    if (mediaa >= minimumGrade) {
        aprovadoReprovado.textContent = 'Aprovado'
        aprovadoReprovado.classList.add('aprovado')
        aprovadoReprovado.classList.remove('reprovado')
    } else {
        aprovadoReprovado.textContent = 'Reprovado'
        aprovadoReprovado.classList.add('reprovado')
        aprovadoReprovado.classList.remove('aprovado')
    }
}