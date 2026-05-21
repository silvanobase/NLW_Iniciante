<div align="center">
<img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
<br/>
<br/>
🎮 NLW-Agents — Assistente de Meta para E-sports

Assistente inteligente alimentado por IA para jogadores de e-sports — estratégias, builds e dicas em tempo real com o poder do Google Gemini.

<br/>
<img src="c:\Users\Fany\Pictures\Screenshots\Captura de Tela (523).png">

</div>

📋 Índice

Sobre o Projeto
Funcionalidades
Tecnologias
Como Executar
Estrutura do Projeto
Como Usar
Aprendizados
Autor


🕹️ Sobre o Projeto
O NLW-Agents é uma aplicação web desenvolvida durante a NLW (Next Level Week) da Rocketseat, com o objetivo de criar um assistente virtual especializado em e-sports.
O utilizador pode fazer perguntas sobre estratégias, builds e dicas para os seus jogos favoritos e recebe respostas detalhadas e inteligentes geradas pela API do Gemini (Google AI) em tempo real.
O projeto combina um design dark e moderno com estética gamer com o poder da Inteligência Artificial para oferecer uma experiência imersiva e útil.

✨ Funcionalidades

 Interface dark temática para jogadores
 Campo de perguntas intuitivo
 Integração com a API do Gemini para respostas com IA
 Respostas em tempo real sobre estratégias e builds
 Design responsivo e animado


🛠️ Tecnologias
As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:
TecnologiaFinalidadeHTML5Estrutura e semântica da aplicaçãoCSS3Estilização, tema dark e animaçõesJavaScript (ES6+)Lógica de interação e consumo de APIGemini APIMotor de Inteligência Artificial para as respostas

🚀 Como Executar
Pré-requisitos
Antes de começar, você vai precisar ter instalado na sua máquina:

Git
Um navegador moderno (Chrome, Firefox, Edge)
Uma chave de API do Google Gemini

Passo a passo
bash# Clone o repositório
git clone https://github.com/silvano-ginina/nlw-agents.git

# Acesse a pasta do projeto
cd nlw-agents
Depois, configure a sua chave da API do Gemini no ficheiro de configuração:
javascript// script.js ou config.js
const API_KEY = "SUA_CHAVE_AQUI";
Por fim, abra o ficheiro index.html diretamente no navegador ou utilize a extensão Live Server no VS Code.

📁 Estrutura do Projeto
<br/>
nlw-agents/<br/>
│<br/>
├── 📄 index.html          # Página principal<br/>
├── 🎨 style.css           # Estilos e tema dark<br/>
├── ⚙️  script.js           # Lógica e integração com a API<br/>
├── 📁 assets/<br/>
│   └── 🖼️  preview.png    # Screenshot do projeto<br/>
└── 📄 README.md<br/>

💡 Como Usar

Abra a aplicação no seu navegador
No campo de texto, escreva a sua pergunta sobre estratégias ou builds (ex: "Qual a melhor build para o Valorant?")
Clique no botão "Perguntar"
Aguarde a resposta gerada pela IA e melhore o seu jogo! 🏆


📚 Aprendizados
Durante o desenvolvimento deste projeto, aprofundei os meus conhecimentos em:

Consumo de APIs externas com fetch e async/await em JavaScript
Integração com Inteligência Artificial via Google Gemini API
Design de interfaces com tema escuro e estética gamer
Manipulação do DOM para renderização dinâmica de conteúdo


👤 Autor
<div align="center">
Silvano Ginina
Desenvolvedor Web Fullstack
</div>

<div align="center">
Feito com 💜 durante a NLW da Rocketseat
⭐ Se este projeto te ajudou, deixa uma estrela no repositório!
</div>