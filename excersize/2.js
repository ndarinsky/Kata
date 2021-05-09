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

async function showAsync() {
    const response = await fetch('/article/promise-chaining/user.json')
    const userInfo = await response.json()
    const user = fetch(`https://api.github.com/users/${userInfo.name}`)
    const gitUser = await user.json()

    let img = document.createElement('img');
    img.src = gitUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise( resolve => setTimeout(img.remove(), 3000))

    alert(`Закончили показ ${githubUser.name}`)
}