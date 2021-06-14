/**
 * KATA: wrap setTimeout() function with promise, and use it
 */

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(ms, resolve('DONE'))
    })
}

console.log('start')

delay(3000).then(result => console.log('after delay ' + result))

console.log('finish')

/**
 * KATA: Rewrite example function using async await
 * It load user avatar from github and hides it after 3sec
 */
//Example:
function showAvatar() {
    fetch('/article/promise-chaining/user.json')
        .then(response => response.json())
        .then(user => fetch(`https://api.github.com/users/${user.name}`))
        .then(response => response.json())
        .then(githubUser => new Promise(function(resolve, reject) {
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);

            setTimeout(() => {
                img.remove();
                resolve(githubUser);
            }, 3000);
        })).then(githubUser => alert(`Закончили показ ${githubUser.name}`));
}

async function load() {
    const result1 = await fetch('/article/promise-chaining/user.json')
    const user = await result1.json()
    const result2 = await fetch(`https://api.github.com/users/${user.name}`)
    const githubUser = await result2.json()

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await setTimeout(() => {
        img.remove();
    }, 3000);

    alert(`Закончили показ ${githubUser.name}`)
}