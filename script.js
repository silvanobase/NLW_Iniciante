const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questioInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse');
const form = document.getElementById('form')

const markdownToHTML = (text) => {
    const converter = new showdown.Converter()
    return converter.makeHtml(text)
}

//Chave-api: AIzaSyAwS9i0TjEvm-S-sH_DTuojOCmp0Zj_K4w
const perguntarAI = async(question, game, apiKey) => {
    const model = "gemini-2.5-flash"
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

    const pergunta = `
        ## Especialidade
        Você é um especialista assistente de meta para o jogo ${game}

        ## Tarefa
        Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, build e dicas

        ## Regras
        - Se você não sabe a resposta, responda com 'Não sei' e não tente inventar uma resposta.
        - Se a pergunta não está relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo'.
        - Considere a data atual ${new Date().toLocaleDateString()}
        - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
        - Nunca responda itens que você não tenha certeza de que existe no patch atual.

        ## Resposta
        - Economize na resposta, seja direto e responda no máximo 500 caracteres
        - Responda em markdown
        - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.
        ## Exemplo de resposta
        pergunta do usuário: Melhor build rengar jungle
        resposta: A build mais atual é:  \n\n **Itens:**\n\n coloque os itens aqui. \n\n**Runas:**\n\nexemplo de runas\n\n

        ---

        Aqui está pergunta do usuário: ${question}
    `
    const  contents = [{
        role: "user",
        parts: [{
            text: pergunta
        }]
    }]

    const tools = [{
        google_search: {}
    }]

    //Chamada api
    const response = await fetch(geminiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents, 
            tools
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = apiKeyInput.value
    const game = gameSelect.value
    const question = questioInput.value


    if(key == '' || game == '' || question == ''){
        alert('Por favor, preencha todos os campos!')
        return
    }

    askButton.disabled = true;
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')


    try {
        //Perguntar a IA
       const text = await perguntarAI(question, game, key)
       aiResponse.querySelector('.response-content').innerHTML = markdownToHTML(text)
       aiResponse.classList.remove('hidden')
    } catch (error) {
        console.log('Error: ', error)
    }
    finally{
        askButton.disabled = false
        askButton.textContent = 'Perguntar'
        askButton.classList.remove('loading')
    }
})