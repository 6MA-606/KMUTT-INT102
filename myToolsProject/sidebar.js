function clickSidenav() {
    sidenav = document.getElementById("mySidenav");
    sidebtn = document.getElementById("sidebtn");
    content = document.getElementById("content");

    if (sidenav.state == "closed") {
        sidenav.style.width = "250px";
        sidebtn.style.marginLeft = "250px";
        sidebtn.style.tranform = "rotate(0deg)";
        content.style.marginLeft = "350px";
        sidenav.state = "opened";
    } else {
        sidenav.style.width = "0px";
        sidebtn.style.marginLeft = "0px";
        sidebtn.style.tranform = "rotate(180deg)";
        content.style.marginLeft = "100px";
        sidenav.state = "closed";
    }
    
}