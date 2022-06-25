function noSubmit() {
    event.preventDefault()
}

function getQuestion() {
    const question = document.querySelector("#input")
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
    const numberRandom = Math.floor(
        Math.random() * arrAnswer.length - 0
    )

    if (getQuestion() == '') {
        document
            .querySelector("#input")
            .setAttribute('required', 'required')

        document.querySelector("#question").textContent = ''
        document.querySelector("#showAnswer").textContent = ''
    } else {
        document.querySelector("#question").textContent =
            getQuestion()
        document.querySelector("#showAnswer").textContent =
            arrAnswer[numberRandom]

        document.querySelector("#input").value = ''
        document
            .querySelector("#input")
            .removeAttribute('required', 'required')
    }
}