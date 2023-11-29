const searchBar = document.getElementById('searchbar');

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

var scrollDirection=0;
// check if body top is greater than 20
function toggleComponents() {

  let currentScroll = window.scrollY ||  document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  var scrollUp = scrollDirection >= currentScroll || currentScroll <= 120;    
  
  if (scrollUp && !searchBar.className.includes("show")){
    searchBar.className += ' show'
  } else if (!scrollUp) {
    searchBar.className =  searchBar.className.replace(' show', '')    
  }

  scrollDirection = currentScroll;

  var btnTop = document.getElementById("top-btn-id");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }

  //var btnPhone = document.getElementById("phone-id");
  //var btnWts = document.getElementById("wts-id");
  
  //if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  //  btnWts.style.display = "block";
  //  btnPhone.style.display = "block";
  //} else {
  //  btnWts.style.display = "none";
  //  btnPhone.style.display = "none";
  //}


}

// Show btn if is scrolled down
window.onscroll = function (e) {
  toggleComponents();
};