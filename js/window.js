let button = document.getElementById('navigateButton');

if(window.location.pathname === '/index.html'){
    button.textContent = 'Blog';

    button.addEventListener('click', function(){
        window.location.href = '/blog.html';
        sessionStorage.setItem('secondPageVisited', true);
    })
}

else {
// else if(window.location.pathname === '/blog.html'){
    if(sessionStorage.getItem('secondPageVisited')){
        button.textContent = 'Home';
    }

    button.addEventListener('click', function(){
        window.location.href = './index.html';
        sessionStorage.removeItem('secondPageVisited');
    })
}