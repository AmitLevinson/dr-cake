// https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/
let cards = document.querySelectorAll('.card')

function liveSearch () {
    let searchQuery = document.getElementById("searchbox").value;
    console.log(searchQuery)
}
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
})

