// materialize sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


// scrollrevealjs
// headline
ScrollReveal().reveal('.avatar', {distance: "200px", easing: "ease-out"});
ScrollReveal().reveal('#hi', {delay:400, distance: "200px", easing: "ease-out"});
ScrollReveal().reveal('#i-am', {delay:1000, distance: "200px", easing: "ease-out"});
ScrollReveal().reveal('#here', {delay:1400, distance: "200px", easing: "ease-out"});
ScrollReveal().reveal('#here', {delay:1400, distance: "200px", easing: "ease-out"});
ScrollReveal().reveal('.content-break', {delay:1400, distance: "200px", easing: "ease-out"});
// works
// ScrollReveal().reveal('#card-1', {delay:1500, interval:600, distance: "200px", easing: "ease-out"});
// ScrollReveal().reveal('#card-2', {delay:2200, interval:400, distance: "200px", easing: "ease-out"});
// ScrollReveal().reveal('#card-3', {delay:2400, interval:400, distance: "200px", easing: "ease-out"});