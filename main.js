const title = document.querySelector('h1');
const user = document.querySelector('#username');

user.addEventListener('input', (e) => {
    if (user.value === '') {
        title.innerText = 'Enter Your Username';
    } else {
        title.innerText = `Welcome, ${user.value}`;
    }
})