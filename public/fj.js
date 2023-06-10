
// Hero Effect Forked from Eric Porter
// https://codepen.io/EricPorter/pen/MeQwWG
// Can do fun things with this code
(function () {
	document.getElementById('audio').play();
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .0004; // higher number for more zoom
      var Num2mod = Num2 + 1;
      var Num3 = $(window).scrollTop() * .2; // Title speed
        var Num3mod = Num3 + 1;
        return $('.shade-effect').css('opacity', Num),
        $(".video-hero-wrapper figcaption").css({"transform":"scale(" + Num2mod + ")"})
    });




}.call(this));

