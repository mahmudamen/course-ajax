(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID c5c4badd34e39bef9f3f7f429abfcbae692f778d4b02f17aa222145e3ca23b3a');
unsplashRequest.send();

function addImage(){
}

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });
})();
