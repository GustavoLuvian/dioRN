# Minha experiência desenvolvendo em JS (28.05.22)
## Eu pretendo escrever alguns outros readme's, mesmo não tendo curtido muito a linguagem de Javascript, além de que pretendo continuar estudando-a do mesmo modo para melhorar as minhas habilidades como desenvolvedor.
#### Antes de qualquer questionamento quanto a funcionalidade do código, não esqueça de averiguar o caminho de execução do mesmo.


![image](https://user-images.githubusercontent.com/103908402/170836581-09aac49a-eece-431b-b4e9-db483694052f.png)

*Inicio* - Sobre o Código

*Notas do Autor* - Falo minha experiência lidando com a linguagem.


# Sobre o Código
A ideia de desenvolvimento de software apresentada pelo professor Ismael Moreira _(Digital Innovation One)_ foi justamente ter uma página em um emulador Android a qual
quando clicassemos no botão, iriamos cair direto no Github. Em quesito código, isso funcionou perfeitamente. Entretanto por problemas no emulador e pelo prazo de entrega ser até a
data de amanhã, eu ainda não consegui descobrir qual foi a questão do software, entretanto eu já identifiquei que a questão é a conexão do ADB com o Emulador.
![image](https://user-images.githubusercontent.com/103908402/170836986-ba45730e-9a05-4217-a459-dbc0c3f567cf.png)

_Além disso, meu professor fez algumas configurações no PC por erros na hora de execução. Coisa que não aconteceu comigo._ 
No meu caso, o problema foi o próprio ADB.

![image](https://user-images.githubusercontent.com/103908402/170837129-72e4356f-e576-4c67-b969-fac73db4322d.png)
A introdução do código é simples. Ela determina as bibliotécas que serão exportadas e a declaração de suas variáveis.

![image](https://user-images.githubusercontent.com/103908402/170837983-c31d5801-36ac-4480-b1e8-be44dee88bd3.png)

Já na imagem em questão, determinamos o como seria a reação do botão quando efetuassemos o click. Se você, leitor, voltar um pouquinho, vai ver que a variável com a URL
do site está ali já declarada como *linkmyGithub* sendo as linhas de *console.log* designadas com o impeto de dar uma resposta no Terminal quanto a determinado comando.


![image](https://user-images.githubusercontent.com/103908402/170838081-94e77273-d1f4-4a57-bfe6-e5de695098f3.png)

Este campo do código, é determinado para falar sobre a interface de usuario e sua respectiva acessibilidade.

            <Text accessibilityLabel="Nome: GL"
            style={[style.defaultText, style.name]}>Gustavo Luvian</Text>
            <Text accessibilityLabel="Apelido: Fox"
            style={[style.defaultText, style.nickname]}>MajorFoxL</Text>
            <Text accessibilityLabel="Descrição: " 
            style={[style.defaultText, style.description]}>Sou fã do Vasco e de aviões
            
*AccessibilityLabel* = Determina a IDE que vai executar esse código, vai ler as suas checkbox na inspenção da mesma.
*Style.name,nickname,description* = São a sua descrição, apelido e nome.

![image](https://user-images.githubusercontent.com/103908402/170838478-c5f1628e-258d-4e21-a4bd-258c7fb33f2b.png)

Aba de *content* e *avatar* são feitas para alinhar os posicionamentos do avatar (minha foto.)

![image](https://user-images.githubusercontent.com/103908402/170838533-3fc43fc6-3530-4177-9cf4-d1871c047942.png)

Default Text = colorFontGithub **(Variável declarada lá em cima com o código da cor.)**
Name, nickname, description, button e textButton = Abaixo dessas escritas de código, estão as suas determinadas resoluções.

Logo ao fim, o código´e finalizado.



