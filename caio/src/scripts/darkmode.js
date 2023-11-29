function darkMode() {
    var pageBody = document.body
    pageBody.classList.toggle('dark')

    // cookie persistence
    const darkModeOn = document.body.classList.contains('dark');
    document.cookie = `darkMode=${darkModeOn}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;


}
// check dark mode to update page
function checkDarkMode() {
    const darkModeOn = document.cookie.includes('darkMode=true');
    if (darkModeOn) {
        document.body.classList.toggle('dark')
    }
}

checkDarkMode();