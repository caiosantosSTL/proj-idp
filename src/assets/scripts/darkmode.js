function darkMode() {
    var pageBody = document.body
    pageBody.classList.toggle('dark');
    SetDarkComponents();
    
}

// check dark mode to update page
function checkDarkMode() {
    const darkModeOn = localStorage.getItem('dark')    
    if (darkModeOn && darkModeOn == '1') {
        document.body.classList.toggle('dark');
        SetDarkComponents();
    }
}

function SetDarkComponents(){
    // cookie persistence
    const darkModeOn = document.body.classList.contains('dark');

    localStorage.setItem('dark', darkModeOn ? '1' : '0')

    //LOGO
    var LogoPathElement = document.getElementById('logo');
    var LogoFooterPathElement = document.getElementById('logo-footer');
    
    // Realiza um toggle no valor do atributo 'd'
    var newLogo = darkModeOn 
    ? 'assets/images/LogosColorDark.svg' 
    : 'assets/images/LogosColor.svg';

    LogoPathElement.setAttribute('src', newLogo);
    LogoFooterPathElement.setAttribute('src', newLogo);


    // ICONE LIGHT/DARK
    var IconPathElement = document.getElementById('toggleSvg').querySelector('path');    

    // Realiza um toggle no valor do atributo 'd'
    var newD = darkModeOn 
    ? 'M1.33301 7.99999C1.33294 9.04676 1.57937 10.0788 2.05235 11.0127C2.52532 11.9465 3.21154 12.7558 4.05546 13.3751C4.89937 13.9944 5.87726 14.4063 6.90996 14.5774C7.94265 14.7485 9.00112 14.674 9.99967 14.36C8.64607 13.9346 7.46348 13.0884 6.62395 11.9446C5.78441 10.8007 5.33172 9.41887 5.33172 7.99999C5.33172 6.58111 5.78441 5.19924 6.62395 4.05539C7.46348 2.91154 8.64607 2.06538 9.99967 1.63999C9.00112 1.32596 7.94265 1.25148 6.90996 1.42258C5.87726 1.59368 4.89937 2.00556 4.05546 2.62486C3.21154 3.24417 2.52532 4.05349 2.05235 4.98732C1.57937 5.92114 1.33294 6.95322 1.33301 7.99999Z' 
    : 'M2.36699 12.7267L3.30699 13.6667L4.50699 12.4733L3.56033 11.5267M8.00033 3.99999C5.79366 3.99999 4.00033 5.79332 4.00033 7.99999C4.00033 10.2067 5.79366 12 8.00033 12C10.207 12 12.0003 10.2067 12.0003 7.99999C12.0003 5.78666 10.207 3.99999 8.00033 3.99999ZM13.3337 8.66666H15.3337V7.33332H13.3337M11.4937 12.4733L12.6937 13.6667L13.6337 12.7267L12.4403 11.5267M13.6337 3.33332L12.6937 2.39999L11.4937 3.59332L12.4403 4.53999M8.66699 0.666656H7.33366V2.66666H8.66699M4.50699 3.59332L3.30699 2.39999L2.36699 3.33332L3.56033 4.53999L4.50699 3.59332ZM0.666992 8.66666H2.66699V7.33332H0.666992M8.66699 13.3333H7.33366V15.3333H8.66699';

    IconPathElement.setAttribute('d', newD);
}