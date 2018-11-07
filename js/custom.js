//Nav scroll
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            $('nav').addClass('grey darken-3');
            $('#logo').removeClass('logo');
            
        } else {
            $('nav').removeClass('grey darken-3');
            $('#logo').addClass('logo');
        }
    });
});
// SideNav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});
//SmoothScroll with anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

