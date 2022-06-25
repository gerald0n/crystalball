const arrAnswer = [
    'Claro que sim!',
    'Acho que não :(',
    'Hummm, talvez...',
    'Tente novamente!',
    'Se manque!!!',
    'Com certeza.',
    'Sim.',
    'Vai dar certo!'
]

function noSubmit() {
    event.preventDefault()
}

function showAnswer() {
    const numberRandom = Math.floor(Math.random() * arrAnswer.length - 0)
    const question = document.querySelector('#input')
    const answer = (document.querySelector('#showAnswer').textContent =
        arrAnswer[numberRandom])

    if (question.value == '') {
        document.querySelector('#input').setAttribute('required', 'required')

        document.querySelector('#question').textContent = ''
        document.querySelector('#showAnswer').textContent = ''
    } else {
        document.querySelector('#question').textContent = question.value

        document.querySelector('#input').value = ''
        document.querySelector('#input').removeAttribute('required', 'required')

        setTimeout(() => {
            document.querySelector('#question').textContent = ''
            document.querySelector('#showAnswer').textContent = ''
        }, 10000)
    }
}
