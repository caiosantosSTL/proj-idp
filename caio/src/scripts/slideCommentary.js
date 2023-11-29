var cardArea = document.querySelector('.comment-area');
var indexCurrent = 0;

function moveContainer() {
    var number = -indexCurrent * (368+16);
    cardArea.style.transform = `translateX(${number}px)`;
}

function next() {
    if (indexCurrent < cardArea.children.length - 1) {
        indexCurrent++;
    } else {
        indexCurrent = 0;
    }
    moveContainer();

}
//setTimeout(next, 1000);

function back() {
    if (indexCurrent > 0) {
        indexCurrent--;
    } else {
        indexCurrent = cardArea.children.length - 1;
    }
    moveContainer();

}

moveContainer();