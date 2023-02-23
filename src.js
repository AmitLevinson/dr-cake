// https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/
// let cards = document.querySelectorAll('div.card');
// console.log(cards)
// var cards = [...document.querySelectorAll("div")];
// console.log(cards.length);
// var elms = document.querySelectorAll('selectors');

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

// let typingTimer;
// let typeInterval = 500;
// let searchInput = document.getElementById('searchbox');

// searchInput.addEventListener('keyup', () => {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(liveSearch, typeInterval);
// })

