//   function topclick(){
//     document.getElementById("poll").style.display ="block";
// }
//     function body() {
//     document.getElementById("poll").style.display ="none";
//   }

  function topclick() {
    document.getElementById("poll").classList.toggle("show");
  }

  // Close dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.closest('.icon-wraper')) {
      let dropdown = document.getElementById("poll");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }

  let lastScroll = 0; // store last scroll position
  const navbar = document.querySelector('.down-nav1');

  window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScroll) {
      // scrolling down
      navbar.classList.add("hide");
    } else {
      // scrolling up
      navbar.classList.remove("hide");
    }

    lastScroll = scrollTop <= 0 ? 0 : scrollTop; // avoid negative scroll
  }, false);
