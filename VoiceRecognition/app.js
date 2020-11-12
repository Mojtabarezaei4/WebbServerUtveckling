const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greetings = ['Im good you little piece of shiit',
    'Doing good bitch',
    'Like you care?',
    'Does it matter for you',
    'Leave me alone noob'
]

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition()

recognition.onstart = function () {
    console.log('voice is activated!')
}

recognition.onresult = function (event) {
    const current = event.resultIndex

    const transcript = event.results[current][0].transcript
    content.textContent = transcript

    readOutLoud(transcript)

}

btn.addEventListener('click', () => {
    recognition.start()
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance()

    speech.text = 'I dont care'
    console.log(message)

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)]
        
        speech.text = finalText
    }

    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)

}