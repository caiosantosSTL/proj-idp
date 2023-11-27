var cardBlogArea = document.getElementById("cards-blog-area-id");
var indexCurrent = 0;

function moveContainerBlog() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        var number = -indexCurrent * (280+20);
        console.log('size ', screenWidth)
        cardBlogArea.style.transform = `translateX(${number}px)`;
    }else{

        var number = -indexCurrent * (500+20);
        console.log('size ', screenWidth)
        cardBlogArea.style.transform = `translateX(${number}px)`;
    }
}

function next2() {
    if (indexCurrent < cardBlogArea.children.length - 1) {
        indexCurrent++;
    } else {
        indexCurrent = 0;
    }
    moveContainerBlog();

}
//setTimeout(next, 1000);

function back2() {
    if (indexCurrent > 0) {
        indexCurrent--;
    } else {
        indexCurrent = cardBlogArea.children.length - 1;
    }
    moveContainerBlog();

}

moveContainerBlog()