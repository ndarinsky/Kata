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

//Solution:
async function showAvatarAsync() {
    const response = fetch('/article/promise-chaining/user.json')
    const user = await response.json()
    const gitResponse = await fetch(`https://api.github.com/users/${user.name}`)
    const gitUser = await gitResponse.json()

    let img = document.createElement('img');
    img.src = gitUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise(resolve => setTimeout(resolve, 3000))
    img.remove()

    return gitUser
}
