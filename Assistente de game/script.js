const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('question')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const markdownToHTML = (text) => {
    const converter = new showdown.Converter()
    return converter.makeHtml(text)
}

const apiKeyTrue = 'AIzaSyAwS9i0TjEvm-S-sH_DTuojOCmp0Zj_K4w';
const perguntarAI = async(question) => {
 const model = "gemini-2.5-flash"
 const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKeyTrue}`
 const pergunta = `
    ## Especialidade
        Você é um especialista assistente de meta para todo tipo de jogo

        ## Tarefa
        Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, build e dicas

        ## Regras
        - Se você não sabe a resposta, responda com 'Não sei' ou procure dizer onde foi que errei ou a palavra chave que faltaria.
        - Considere a data atual ${new Date().toLocaleDateString()}
        - Faça pesquisas atualizadas, baseado na data atual, para dar uma resposta coerente.
        - Nunca responda itens que você não tenha certeza de que existe na data atual.

        ## Resposta
        - Economize na resposta, seja direto e responda no máximo 500 caracteres
        - Responda em markdown
        - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo e dê sempre a sua opinião no final como um bom especialista.
        ## Exemplo de resposta
        pergunta do usuário: Melhor build rengar jungle
        resposta: Responda sempre gradualmente, por exemplo se em algum jogo está dividido em 3 partes, então fale dessas 3 partes de forma gradual colocando os cabeçalhos e qualquer outra parte importe como se fosse uma definição, responda em markdown ou seja responda de uma forma organizada e agradável aos olhos dos usuários

        ---

        Aqui está a pergunta do usuário: ${question} 
 `
 const contents = [
    {
        role: "user",
        parts: [
            {
                text: pergunta
            }
        ]
    }
 ]

 const tools = {
    google_search: {}
 }

 const response = await fetch(geminiURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        contents, 
        tools
    })// Nesse caso aqui estamos configurando que tudo que tiver no meu body, será convertido em JSON, por ser uma API

 })

 const data = await response.json()
 return data.candidates[0].content.parts[0].text
}

form.addEventListener('submit', async(e) => {
    e.preventDefault()

    const question = questionInput.value


    if(question == ''){
        alert('Faça alguma pergunta no assistente!')
        return
    }


    askButton.disabled = true
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')

    try {
       const text = await perguntarAI(question)
        aiResponse.querySelector('#response-content').innerHTML = markdownToHTML(text)
        aiResponse.classList.remove('hidden')
    } catch (error) {
        console.log('Erro: ', error)
    } finally {
        askButton.disabled = false
        askButton.textContent = 'Perguntar'
        askButton.classList.remove('loading')
    }
})