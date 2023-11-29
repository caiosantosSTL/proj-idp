
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  
      // Show btn if is scrolled down
      window.onscroll = function() {
        toggleBtnTopo();
      };
  
      // check if body top is greater than 20
      function toggleBtnTopo() {
        var btnPhone = document.getElementById("phone-id");
        var btnWts = document.getElementById("wts-id");

        var btnTop = document.getElementById("top-btn-id");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          btnTop.style.display = "block";
        } else {
          btnTop.style.display = "none";
        }

        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          btnWts.style.display = "block";
          btnPhone.style.display = "block";
        }else{
          btnWts.style.display = "none";
          btnPhone.style.display = "none";
        }
      }