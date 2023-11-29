function openCardGroup(classNameHere) {

    var areaText = document.querySelectorAll('.' + classNameHere);

    areaText.forEach((dropdown) => {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';

        } else {
            dropdown.style.display = 'none';
        }

    });

}

function openIcon(iconP, iconM) {
    var iconPlus = document.querySelectorAll('.' + iconP);
    var iconMinus = document.querySelectorAll('.' + iconM);

    iconPlus.forEach((ip) => {
        if (ip.style.display === 'block') {
            ip.style.display = 'none';
        } else {
            ip.style.display = 'block';
        }
    });

    iconMinus.forEach((im) => {
        if (im.style.display === 'block') {
            im.style.display = 'none';
        } else {
            im.style.display = 'block';
        }
    });
}