<div align="center">
<img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
<br/>
<br/>
🤖 Quiz com IA

Gera quiz personalizados sobre qualquer tema com o poder da Inteligência Artificial — escolhe um assunto e testa os teus conhecimentos em segundos!

<br/>
<img src="Captura de Tela (524).png">
</div>

<br/>
<br/>

📋 Índice

Sobre o Projeto<br/>
Funcionalidades<br/>
Tecnologias<br/>
Como Executar<br/>
Estrutura do Projeto<br/>
Como Usar<br/>
Aprendizados<br/>
Autor<br/>


💡 Sobre o Projeto<br/>
O Quiz com IA é uma aplicação web interativa que utiliza a API do Gemini (Google AI) para gerar perguntas de quiz dinamicamente sobre qualquer tema escolhido pelo utilizador.
Diferente dos quizzes tradicionais com banco de perguntas fixo, este projeto aproveita o potencial da Inteligência Artificial para criar perguntas únicas e variadas a cada nova sessão — tornando a experiência sempre nova e desafiante.
Basta digitar um tema como "Programação", "Teologia", "História de Angola" ou qualquer outro assunto, e a IA gera as questões na hora!

Funcionalidades

 Geração dinâmica de perguntas via Inteligência Artificial
 Quiz personalizável por tema livre
 Interface limpa, moderna e responsiva com tema escuro
 Respostas geradas em tempo real pela API do Gemini
 Experiência única a cada sessão — sem perguntas repetidas


🛠️ Tecnologias<br/>

HTML5 ---> Estrutura semântica da aplicação <br/>
CSS3  ---> Estilização, layout e tema escuro<br/>
JavaScript (ES6+) ---> Lógica, interatividade e consumo da API<br/>
Gemini API (Google) ---> Geração inteligente das perguntas de quiz<br/>

🚀 Como Executar
Pré-requisitos

Git instalado
Navegador moderno (Chrome, Firefox, Edge)
Chave de API do Google Gemini

Passo a passo
bash# Clone o repositório
git clone https://github.com/silvanobase/NLW_Iniciante/tree/22f7b1a155174481ec88c3f78f2058ad3346fff6/QuizIA

# Acesse a pasta do projeto
cd quiz-ia<br/>
Configure a sua chave da API no ficheiro JavaScript:<br/>
javascript// script.js<br/>
const API_KEY = "SUA_CHAVE_AQUI";<br/>
Abra o ficheiro index.html no navegador ou use o Live Server no VS Code.<br/>

📁 Estrutura do Projeto<br/>
quiz-ia/<br/>
│<br/>
├── 📄 index.html          # Página principal<br/>
├── 🎨 style.css           # Estilos e tema escuro<br/>
├── ⚙️  script.js           # Lógica e integração com a Gemini API<br/>
├── 📁 assets/<br/>
│   └── 🖼️  preview.png    # Screenshot do projeto<br/>
└── 📄 README.md<br/>

🎮 Como Usar

Abra a aplicação no navegador
No campo de texto, escreve o tema do quiz que desejas (ex: Programação, Teologia, Biologia...)
Clica no botão "Gerar Quiz"
Aguarda a IA criar as perguntas e responde a cada uma
Descobre a tua pontuação e testa novamente com um tema diferente! 🏆


📚 Aprendizados<br/>
Com este projeto, desenvolvi e reforcei os seguintes conhecimentos:

Integração com IA generativa via Google Gemini API
Processamento e parsing de respostas JSON vindas de modelos de linguagem
Criação de interfaces dinâmicas com manipulação do DOM em JavaScript puro
Gestão de estados numa aplicação sem frameworks (loading, quiz ativo, resultado)
Design de UX pensado para uma experiência fluida e intuitiva


👤 Autor
<div align="center">
Silvano Ginina
Desenvolvedor Web Fullstack
</div>

<div align="center">
Feito com 💜
⭐ Se gostaste do projeto, deixa uma estrela no repositório!
</div>