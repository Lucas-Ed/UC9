# ProjetoAngular

## Lista dos comandos no Angular-CLI

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 13.0.1.

## Servidor de desenvolvimento

Run `ng serve` para um servidor de desenvolvimento. Navegar para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Code scaffolding

Run `ng generate component component-name`para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construir

Run `ng build` para construir o projeto. Os artefatos de construção serão armazenados no `dist/` diretório.

## Executando testes de unidade

Run `ng test` para executar os testes de unidade via[Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` para executar os testes ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta.

## Ajuda adicional

Para obter mais ajuda sobre o uso da CLI Angular `ng help` ou vá conferir o [Angular CLI Overview and Command Reference](https://angular.io/cli) pagína.

### alguns comandos
ng-app:	                                Declara um elemento como raiz da aplicação.
ng-model:	                              É utilizado para fazer ligação entre data binding e view.
ng-class:	                              Permite que os atributos das classes sejam carregados dinamicamente.
ng-click:	                              Utilizado para declarar um evento quando o usuário clicar.
ng-show e ng-hide:                     	Mostra ou esconde um elemento.
cd projeto : ng serve --port 333 -o     Executar o server em uma porta específica.

# Passo a passo
- criar um projeto: ng new nome do projeto
- adicionar o pacote angular material para construção de componente: ng add @angular/material
- Adicionar os modulos no arquivo app.module.ts
- Em app.routing.ts informar as rotas chamando o component
- buscar o componente desejado no site: https://material.angular.io/components/categories
- Começar a construção com uma nova pasta dentro de app com o nome view
- Dentro da pasta view criar os arquivos componente com o comando generate: ng g c views/home
-------------------------------------------------------------------------------------------
- Criar o roteamento para o home component.ts no arquivo  app.routing.modele.ts
- Digitar o caminho com path e chamar o component: 
----------------------------------------------------------------------------------------------
- * criar o service para a comunicação com o backend com o comando: ng g s shared/service/live
- Definir a URL.
- Gerar um novo módulo: ng g module nome do modulo
- usar um componente dentro de outro:
  1° copiar o selector do componente que será usado, exemplo: selector: 'app-header'
  - Na pagína que será exibida, criar uma tag com o nome do selector exemplo: <app-header></app-header>


-Instalar Bootstrap: npm install --save bootstrap
em angular.json colocar em styles[]: "./node_modules/bootstrap/dist/css/bootstrap.css"// importação do bootstrap
e incluir tbm o js : "./node_modules/bootstrap/dist/js/bootstrap.min.js"
incluir o jquery, comando: npm install --save jquery e incluir em angular.json-scripts[ "./node_modules/jquery/dist/jquery.js"]
---------------------------------------------------------------------------------------------
impotar ícones angular material

-Importar o modulo do componente em app.modulo.
-copiar os códigos do site material.angular.io 
--------------------------------------------------------------------------------------------
                      ***Simular backend***
 - criar uma pasta chamada backend: mkdir backend
 - criar os arquivo package json: npm init -y
 - Instalat as depend~encias do json server: npm i json-server
 - Criar o arquivo db.json e dentro colocar os dados; para copiar os dados e colar abaixo do anterior seleciona-se o que quer e faz: alt+shift+setaPraBaixo
 - Criando um script em package.json:  "start": "json-server --watch db.json --port 3001"
 - instalar o servidor json: npm install -g json-server e depois rodar o comando: json-server info.json ou tbm dentro da pasta backend rodar o comando: npm start.

-------------------------***Criar app nativo***------------------------------------
- Installar o native script: npm install -g nativescript 
- Para criar um novo projeto, execute: ns create NomedoApp --angular // or --ng for short