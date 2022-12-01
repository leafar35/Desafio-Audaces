## Parte teórica.

 - Utilizei uma ferramenta online para criar o fluxo do usuário e descrever como o sistema iria funcionar.
 - Ferramenta.: https://app.diagrams.net/
 - Na raiz do projeto tem um FluxoUsuario.pdf, contendo descrição de como iria resolver o problema.

## (Aplicação) Governo Digital.

 - Desenvolvido nas tecnologias de sqllite, nestjs com typescript, typeorm e arquitetura limpa.
 - Inicialmente criei Docker para desenvolver essa solução apenas de CURD simples.
 - Apliquei Mongodb e Nestjs com Docker, mas o container teve alguns problemas, não forma por conta do mongo e sim do nestjs servidores
estavam ocupados, alterei para o SQLite para não demorar no DEV.

## Requires (Sem Docker)

 - Node latest
 - Npm latest
 - Comandos
   - npm install

## Requires (Com Docker)

 - Docker latest.
 - Docker (tanto windows como linux)
 - Docker e docker-compose
 - Comandos
   - docker-compose up -d
   - docker exec -it nestjsapp bash
   - cd home/audaces -> npm install.
   - Depois do comando acima terminar.
   - npm run start:dev

## Estrutura é uma versão hibrida do clear architecture.
  - Camada de aplicação
    - Providers
    - Rerouces   (implementação do teste, abstract class | interface)
    - Restmodels (O que irá para o usuário)
    - Converters
  - Camada de Dominio.
    - Converters
    - Entitis 
    - Casos de uso (base para implementação do teste)
    - Services (irá conter todas as minhas regras de negocio)
    - Data providers

## Caso executar no insonia e não conectar
  - Rode o seguinte comando fora do container.
  - sudo docker ps, vai dar as colunas com os containers Id
  - sudo docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' containerId
  - Substitua o ip pelo retorno do comando acima.

## Plugins VSCode
  - SQLite Viewer (Serve para visualizar os registros do SQLite).
  - Pode usar a seguinte URL também.: https://sqliteviewer.app/
  - Botão direito no mouse no governmentdigital abrir com SQLViwer.

## Exportei via Insonia.
 - Todos os Endpoints foram exportados via insonia (se encontram na raiz do projeto)