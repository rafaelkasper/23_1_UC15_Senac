# Atividade sobre API -> axios

- Criar um app em que tenha uma lógica de busca de algum dado via api.

  - A tela deve ter um input para a entrada de dados em um botão de buscar.
  - No botão de buscar implementar o onPress chamando uma função que será responsável por fazer a requisição.
  - No onChangeText do input deve chamar o set do useState.
  - Implemente a função que pegará o valor digitado no input e fará a requisição com parâmetros.
  - Salvar o retorno da api em um useState
  - Exibir os dados retornados em uma flatlist.

- Criar o projeto com `npx create-expo-app --template`
- Instalar o axios -> `npm install axios` ou `yarn add axios`

- Api's de sugestão:
  - https://jsonplaceholder.typicode.com/
  - https://rickandmortyapi.com
  - https://api.github.com/users/{user}/repos
  - Avançada: https://openweathermap.org/current#name
