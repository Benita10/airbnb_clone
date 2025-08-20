 function showMenu(menuId) {
    // hide all menu tables
    document.querySelectorAll('.about-item').forEach(item => {
      item.classList.remove('active');
    });

    // show the clicked one
    document.getElementById(menuId).classList.add('active');
  }
  function topclick(){
    document.getElementById("poll").style.display ="block";
}
    function body() {
    document.getElementById("poll").style.display ="none";
  }
