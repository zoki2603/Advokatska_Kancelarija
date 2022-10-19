
//SIDE NAV MENU
        var manuBtn = document.getElementById("manuBtn");
        var sideNav = document.getElementById("sideNav");
        var menu = document.getElementById("menu");
        sideNav.style.right == "-250px"
        manuBtn.addEventListener("click",function(e){
            e.preventDefault();
            if(sideNav.style.right == "-250px"){
                sideNav.style.right ="0";
                menu.src = "img/close.png";
            }else{
                sideNav.style.right ="-250px"
                menu.src = "img/menu.png";
            }
        });
//SCROLL smooth
        var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});