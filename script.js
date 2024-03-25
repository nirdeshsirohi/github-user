function getUserInfo() {
    const username = document.getElementById('username').value;

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            displayUserInfo(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('userInfo').innerHTML = `<p style="color: red;">User not found</p>`;
        });
}

function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');

    userInfoDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="Profile Picture" style="border-radius: 50%; width: 100px;">
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.login}</p>
        <p><strong>Location:</strong> ${user.location || 'Not provided'}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><strong>Following:</strong> ${user.following}</p>
        <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
    `;
}
