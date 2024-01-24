

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

var scrollDirection=0;

function toggleComponents() {
  const headerBar = document.getElementById('header');
  const menuProfile = document.getElementById('menuprofile');
  
  let currentScroll = window.scrollY ||  document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  var scrollUp = scrollDirection >= currentScroll || currentScroll <= 160;    
  
  if (!scrollUp && !headerBar.className.includes("hideheader")){
    headerBar.className += ' hideheader'
  } else if (scrollUp) {
    headerBar.className =  headerBar.className.replace(' hideheader', '')    
  }

  if(menuProfile){           
    const profileBar = document.querySelector('.profile-image');    
    const profileBarHeight = profileBar.getBoundingClientRect().height
    const headerBarHeight = headerBar.getBoundingClientRect().height
    const menuBarHeight = menuProfile.getBoundingClientRect().height
    
    if (currentScroll >= profileBarHeight + headerBarHeight + menuBarHeight && !menuProfile.className.includes("pinned")) {
      menuProfile.className += ' pinned';
    } else if (currentScroll < profileBarHeight + headerBarHeight + menuBarHeight) {
      menuProfile.className = menuProfile.className.replace(' hidebar', '');
      menuProfile.className = menuProfile.className.replace(' pinned', '');
      menuProfile.className = menuProfile.className.replace(' scrolledup', '');   
    }

    if (!scrollUp && currentScroll >= (profileBarHeight + headerBarHeight) && !menuProfile.className.includes("hidebar") ){
      menuProfile.className += ' hidebar';
      menuProfile.className = menuProfile.className.replace(' scrolledup', '');
    } else if (scrollUp) {
      menuProfile.className =  menuProfile.className.replace(' hidebar', '');   
      if (menuProfile.className.includes("pinned") && !menuProfile.className.includes("scrolledup"))      
      {
        menuProfile.className += ' scrolledup';
      }       
    }
  }
 

  scrollDirection = currentScroll;

  var btnTop = document.getElementById("top-btn-id");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }

  var barContact = document.querySelector(".contact-bar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    barContact.style.display = "";
  } else {
    barContact.style.display = "none";
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