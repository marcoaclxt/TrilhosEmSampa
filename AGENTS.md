# AGENTS.md

## Visão geral

Este projeto é o meu projeto individual do primeiro semestre da faculdade São Paulo Tech School no curso de Análise e Desenvolvimento de Sistemas, uma aplicação web sobre o Metrô de São Paulo. Seu objetivo é apresentar uma visão geral do sistema metroviário por meio de informações sobre seu funcionamento e sua história, além de gráficos e indicadores, como as linhas e estações mais utilizadas e as linhas com melhor e pior avaliação. Os principais usuários da aplicação são pessoas que utilizam diariamente o Metrô de São Paulo.

## Tecnologias

**HTML5**
**CSS3**
**JavaScript**
**ChartJS**
**Node.js** 
**Express** 
**MySQL** 

## Comandos

Para executar a API:
npm install - instala as dependências
npm start - inicia o projeto

## Arquitetura

O projeto utiliza uma separação em camadas. O front-end fica no diretório `public`, enquanto o back-end e o acesso ao banco de dados ficam no diretório `src`.

A pasta public guarda as páginas, os estilos, imagens e arquivos de JavaScript utilizados. O arquivo app.js inicia o sistema e faz a ligação entre as páginas e as funcionalidades.

A pasta src contém os arquivos responsáveis por receber as informações, verificar dados e acessar o banco de dados. Dentro dela, routes organiza os caminhos da aplicação, controllers controla as ações, models realiza as consultas e database guarda a configuração e o arquivo de criação das tabelas.

Novas funcionalidades devem seguir essa mesma organização.

## Padrões de desenvolvimento

Utilizar var e function, como já é feito no código da API;
Seguir a arquitetura existente, mantendo as responsabilidades separadas entre routes, controllers, models e database.
Utilizar `camelCase` para nomes de variáveis e funções JavaScript.
Utilizar a convenção `snake_case` para nomes em para tabelas, colunas e chaves estrangeiras no banco de dados.
Validar no controller os dados recebidos antes de chamar o model.
Manter as instruções SQL dentro dos models e o gerenciamento da conexão dentro de `src/database/config.js`.
Manter os arquivos visuais e scripts do navegador dentro das respectivas pastas de `public`.
Reaproveitar a estrutura existente antes de criar novos padrões ou diretórios.

## Cuidados e restrições

Não alterar ou excluir arquivos importantes sem verificar onde eles são utilizados.
Não alterar o package.json nem adicionar bibliotecas novas;
Não adicionar senhas ou dados do banco de dados diretamente no código ou arquivos .env e .env.dev.
Não alterar a pasta DOCUMENTOS_DE_APOIO;
Manter o padrão já utilizado no projeto ao criar novas funcionalidades.
Não excluir ou alterar funcionalidades que já estejam funcionando.
Validar os dados informados pelo usuário antes de enviá-los ao banco.

## Regra geral: 
Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto. Além disso, antes de qualquer implementação descreva a mudança que pretende fazer para que eu aprove ou reprove.
