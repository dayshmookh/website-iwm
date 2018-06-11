// Global Script

var sidenavinstance;


$(document).ready(function () {
    M.AutoInit();
    var sidenav = document.querySelector('.sidenav');
    sidenavinstance = M.Sidenav.init(sidenav);
    AOS.init();
});


