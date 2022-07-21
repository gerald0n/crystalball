function noSubmit() {
    event.preventDefault()
}

function getQuestion() {
    var question = document.getElementById('input')
    return question.value
}

var arrAnswer = [
    'Claro que sim!',
    'Acho que não :(',
    'Hummm, talvez...',
    'Tente novamente!',
    'Se manque!!!',
    'Com certeza.',
    'Sim.',
    'Vai dar certo!'
]

function showAnswer() {
    var numberRandom = Math.floor(Math.random() * arrAnswer.length - 0)

    if (getQuestion() == '') {
        document.getElementById('input').setAttribute('required', 'required')

        document.getElementById('question').textContent = ''
        document.getElementById('showAnswer').textContent = ''
    } else {
        document.getElementById('question').textContent = getQuestion()
        document.getElementById('showAnswer').textContent =
            arrAnswer[numberRandom]

        document.getElementById('input').value = ''
        document.getElementById('input').removeAttribute('required', 'required')
    }
}
