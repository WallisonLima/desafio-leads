# [![](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)](https://pptr.dev/)

### DESAFIO [LEADSOK](http://leadsok.com.br/)


## Projeto!!

* Desafio proposto pela [LeadsOK](http://leadsok.com.br/)

* Neste projeto foi implementado JavaScript e NodeJS.

Como requisito neste projeto, deve haver instalado na maquina em questão os seguinte:

* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)

e uma IDE, como estou usando o VSCode deixo também um link para download:

* [VsCode](https://code.visualstudio.com/)

Feito e instalação das ferramentas utilizadas nesse projeto, siga os passo abaixo para testar o projeto em questão:

1. Abra a IDE escolhida, no meu caso o VsCode
2. Abra um terminal na pasta do projeto(que você criou com o nome de prefência, exemplo 'ProjetoPup'), no caso do VsCode localizado na barra de tarefas, descrito como `Terminal`, `new Terminal` OU digite `CTRL + ALTgr + j`
3. [Clone](https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository#:~:text=10%2C%20done.-,Clonar%20um%20reposit%C3%B3rio%20no%20GitHub%20Desktop,Desktop%20para%20concluir%20o%20clone.) o projeto em questão.
4. Acesse a pasta clonada com `cd desafio-leads`
5. Instale todas as dependências necessárias com npm: `npm install puppeteer` e `npm install request`
6. Feito o download corretamente de tudo, rode no mesmo terminal aberto na pasta do projeto o seguinte comando: `node app.js`

Logo verá nossa aplicação rodando. Caso tenha alguma opinião em relação a melhora do processo ou implementação de algo (que com certeza haverá rsrs), deixe sua sugestão sem medo, será muito bem-vinda. Afinal sou somente um aprendiz e quero progredir com quem sabe. 



## Atenção!
Caso dê algo errado, tente baixar manualmente o navegador [Chromium](https://www.techtudo.com.br/listas/2021/03/o-que-e-chromium-entenda-o-projeto-em-que-o-chrome-e-baseado.ghtml).


#### Obrigado!


## O que é o Puppeteer?

  > O Puppeteer é uma biblioteca Node.js que fornece uma API de alto nível para controle programático do Chrome ou Chromium por meio do protocolo DevTools. Esse       controle pode ocorrer nos bastidores (segundo plano sem lançamento de janela), ou se preferir, é possível acompanhar toda a execução de forma visual ao           solicitar o lançamento da interface gráfica do navegador. [Artigo Medium](https://bityli.com/l70dc)                        


## O que ela faz?

  Basicamente, qualquer “coisa” feita via uso do Chrome ou Chromium pode ser automatizada via Puppeteer. Veja alguns exemplos:
  * Simular ações de usuários, tais como navegar nas páginas, clicar em links/botões, preencher formulários e enviá-los;
  * Disparar capturas de tela (screenshots) das páginas;
  * Salvar determinado conteúdo em PDF;
  * Monitorar determinado valor ou condição da página para disparar uma ação secundaria;
  * Buscar dados dentro das páginas e muito mais…
  
  De fato as possibilidades são infinitas! O Puppeteer pode ser utilizando tanto para Web Scraping quanto para Web Crawling. Vejamos rapidamente o que cada termo   significa:
  
  >  Web Scraping: ato de baixar automaticamente os dados de uma ou mais páginas tendo como principal objetivo extrair informações muito especificas; Automatizar   ações realizadas via uso da interface do navegador, tais como preencher e submeter formulários ou até mesmo simular a navegação de um usuário dentro do “site”.
    
  >  Web Crawling: ato de baixar automaticamente os dados de uma página web, extrair os hiperlinks contidos nela e segui-los de forma recursiva. De modo grosseiro e simplório, imagine que essa é uma das técnicas utilizadas por buscadores como Google, Bing e outros. 
  
  [Artigo Medium](https://bityli.com/l70dc)








