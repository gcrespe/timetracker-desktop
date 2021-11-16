# Bem vindo ao Timetracker!

O Timetracker é um projeto criado a partir do projeto de extensão ERUS e tem como objetivo principal o desenvolvimento de uma aplicação que tenha uma utilidade no meio social de alguma forma.
O foco do Timetracker é ser uma aplicação de gerenciamento de horas, onde é possível criar projetos e atividades e acompanhar o desenvolvimento dos mesmos, observando principalmente o tempo gasto

## Criação

Inicialmente, a ideia era de ser um projeto para gerenciamento de equipes. Por conta de mudanças ao longo do desenvolvimento do projeto, ele precisou ser simplificado e hoje
é uma ferramenta para uso pessoal, mas que pode ser usada para acompanhar qualquer tipo de projeto

## Como utilizar

O Timetracker pode ser baixado diretamente do Timetracker Web, que possui um link de download do instalador. Após instalar, basta registrar-se e já será possível utilizar o Timetracker.
Dentro da aplicação existem diversas possibilidades, mas o foco principal é a adição de projetos e tarefas e acompanhamento do tempo de desenvolvimento desses. Caso esqueça sua senha, é possível utilizar a funcionalidade de "Esqueci minha senha" que existe na tela de login.

Vale lembrar que, como não é desenvolvido por um profissional reconhecido pela Microsoft, provavelmente alguns antivirus irão soar falso-positivo e realizar um escaneamento na aplicação, que em pouco deve acabar. Apenas aguardando a instalação se dará nornmalmente, mesmo com os avisos.

Ao baixar também é possível que o navegador classifique o projeto como potencialmente malicioso, o que também é um falso positivo resultante do desconhecimento do autor/grupo de autores.
### `npm start`

Inicia o projeto em [http://localhost:3000](http://localhost:3000).

### `npm run electron`

Inicia a visualização em Electron, como na aplicação real. É necessário que a aplicação já esteja rodando, e por padrão irá renderizar o projeto que está no Heroku

### `npm run build`

Realiza o build do projeto na pasta Build. Gera uma build otimizada para performance, mas é valido lembrar que os projetos em ReactJS são um pouco mais pesados do que outros projetos.

### `npm run dist`

Gera um executável do electron com base no conteúdo da pasta Build. Este executável é do mesmo tipo que pode ser baixado diretamente pelo Timetracker Web.

## Como contribuir?

VocÊ pode enviar um email para sptimetracker@gmail.com que teremos todo o prazer de receber críticas e sugestões. Em caso de algum problema, também pode nos contatar e faremos todo o possível para disponibilizar uma solução.

## Outros projetos

Também existem outros dois projetos que fazem parte deste, que são 

[Timetracker Web](https://github.com/gcrespe/timetracker-webpage)

A aplicação web é a porta de entrada do Timetracker, lugar por onde este pode ser baixado e posteriormente instalado

[Timetracker API](https://github.com/gcrespe/timetracker-api)

É a api que o Timetracker utiliza. Contém todos os serviços da aplicação e utiliza um banco ClearBD
