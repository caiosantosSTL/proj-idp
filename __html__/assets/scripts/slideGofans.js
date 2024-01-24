var cardArea = document.querySelector('.cards-area');
var indexCurrent = 0;

function moveContainer() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        var number = -indexCurrent * 367;
        console.log('size ', screenWidth)
        cardArea.style.transform = `translateX(${number}px)`;
    }else{

        var number = -indexCurrent * 600;
        console.log('size ', screenWidth)
        cardArea.style.transform = `translateX(${number}px)`;
    }
}

function next() {
    if (indexCurrent < cardArea.children.length - 1) {
        indexCurrent++;
    } else {
        indexCurrent = 0;
    }
    moveContainer();

}

function back() {
    if (indexCurrent > 0) {
        indexCurrent--;
    } else {
        indexCurrent = cardArea.children.length - 1;
    }
    moveContainer();

}

//moveContainer()