// https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/

function liveSearch () {
    var input, filter, cards, cardContainer, text, i;
    input = document.getElementById('searchbox');
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById('myCakes')
    cards = cardContainer.getElementsByClassName('card');
    for(i = 0; i < cards.length; i ++) {
        text = cards[i].querySelector('.card-body');
        if(text.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
