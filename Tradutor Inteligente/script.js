const apiKey = "AIzaSyDUGt61XZ42BX-DkYmd1MKr229E7c4JVYI"
const model = "gemini-2.5-flash"
const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

document.getElementById('translateBtn').addEventListener('click', async() => {
    const fromLang = document.getElementById('fromLang').value
    const toLang = document.getElementById('toLang').value
    const textInput= document.getElementById('textInput').value
    const output = document.getElementById('translatedText')

    if(!textInput){
        output.innerText = 'Digite um texto para traduzir'
        return
    }

    try{
        const prompt = fromLang === 'auto'
        ? `Detecte o idioma do seguinte texto, não precisa explicar nada, apenas mostre a tradução para ${toLang}: ${textInput}`:
        `Traduza somente este texto do idioma ${fromLang} para ${toLang}: ${textInput}, não precisa explicar nada, apenas mostre a tradução.`

        const response = await fetch(geminiURL, 
            {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            }
        )

        const data = await response.json()
        output.innerText = data.candidates[0].content.parts[0].text
    }catch(error){
        console.error(error)
        output.innerText = 'Erro ao traduzir. Tente novamente!'
    }
})

const hiddenText = () => {
    const copiedText = document.getElementById('copiedText')
    setTimeout(function(){
        copiedText.textContent = ''
    }, 3000)
}

// 📋 Copiar texto
document.getElementById('copyBtn').addEventListener('click', () => {
    const translatedText = document.getElementById('translatedText').innerText
    const copiedText = document.getElementById('copiedText')
    if(translatedText){
        navigator.clipboard.writeText(translatedText)
        copiedText.innerText = 'Texto copiado com sucesso'
        hiddenText()
    }
})

// 🔊 Falar texto
document.getElementById('speakBtn').addEventListener('click', ()=> {
    const textoTraduzido = document.getElementById('translatedText').innerText
    if(textoTraduzido){
        const utterance = new SpeechSynthesisUtterance(textoTraduzido)
        speechSynthesis.speak(utterance)
    }
})