# Teste Google Shopping
 Teste da área de compras do Google, utilizando [Cypress](https://www.cypress.io/).
 
# Roteiro de Testes
### Foi utilizada a técnica Behavior Driven Development (BDD) para a elaboração do roteiro, contendo dois cenários, falha e sucesso no teste.
![Roteiros](/images/BDD.PNG)

## Requisitos
Para executar esse projeto são necessários os seguintes programas:
- [Node.js](https://nodejs.org/en/): Necessário para executar o projeto em JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Para o desenvolvimento do projeto.

## Começado
De início, é necessário clonar o projeto contido no GitHub, em um diretório desejado.
Com o [Git](https://git-scm.com/) instalando, vá até o terminal e digite:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/enzolfernandes/teste-google-shopping.git
```
## Executando os teste
O arquivo que contém o algoritmo do teste está em `...\cypress\integration\GoogleTest.specs.js`. Para executá-lo, devemos abrir a interface, digitando no terminal:
```shell
npm run cypress:open
```
Em seguida, abrir o arquivo do teste, na interface que irá aparecer, o Cypress vai executar o teste de forma automática em um navegador próprio, mostrando um relatório no lado esquerdo. Podemos alterar os valores da busca, mudando as strings contidas no objeto `produto`.
