/**
 * write send request
 */
const fetch = require('node-fetch');

async function start() {
 let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
 let response = await fetch(url);
 
 let commits = await response.json(); // читаем ответ в формате JSON
 
 console.log(commits[0].author.login);
}

start()