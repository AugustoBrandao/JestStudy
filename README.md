# Jest - Testes Unitários

## Como Instalar a Biblioteca Jest
Antes de instalar o Jest, vamos verificar se o npm está configurado corretamente na máquina local.

`````
npm -v
`````

Se tiver aparecido a versão do npm, é sinal de que está tudo corretamente configurado.

## package.json
É um arquivo importante que serve para armazenar algumas informações importantes do projeto, como:
- A versão do Node e do npm utilizadas
- A url do repositório
- A versão na qual o seu projeto se encontra
- Dependências de prdução e de desenvolvimento.

````
npm init -y
````

Agora precisamos editar o arquivo package.json para que o JavaScript saiba que iremos utilizar o Jest como uma biblioteca de testes.

`````
{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest" //aqui
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`````

Dentro da pasta do projeto, execute o comando: 

````
npm install --save-dev jest
````

Para verificar se está tudo bem com a instalação, vamos para o arquivo package.json, lá você verá que em devDependencies vai aparecer a versão de instalação do Jest:

````
{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^27.0.6"   // aqui
  }
}
````

Também vai aparecer o arquivo package-lock.json, que é responsável por "travar" as versões das dependências instaladas no projeto, e impedindo que quando uma outra pessoa desenvolvedora for clonar esse projeto, versões diferentes das utilizadas sejam instaladas e comprometam a execução do código.
</br>
</br>

# Documentação Oficial do Jest
- https://jestjs.io/docs/getting-started
