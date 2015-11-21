//hero height

function heroResize() {
    var windowHeight = $(window).height(),
        navHeight = $("header").height();
    
    var heroHeight = windowHeight - (2 * navHeight);
    
    if (windowHeight > (350 + (2 * navHeight))) {
        $("#hero").css("height", heroHeight + "px");
    } else {
        $("#hero").css("height", 350 + "px");
    }
}
if ($(window).scrollTop() === 0){
    heroResize();
    $(window).resize(heroResize);
}

//scroller

(function () {
    if ($(window).scrollTop() === 0){
        $("#scroller").show();
    }
    $(window).on("scroll", function () {
        $("#scroller").css("opacity", 0).css("height", 0 + "px");
    });
})();

//testimonials

$.getJSON("./js/testimonialfeed.js", function(data){
    var items = [];
    var pagination = [];
    var testimonialarray = data.testimonials;
    for(i=0; i<testimonialarray.length; i++) {
        items.push("<div class='testimonial" + [i] + "'><p class='quote'>" + testimonialarray[i].quote + "</p><p class='name'>- " + testimonialarray[i].name + ", " + testimonialarray[i].company + "</p></div>");
    }
    
    $("<div/>", {
        "class": "testimonials",
        html: items.join("")
    }).insertAfter("#testimonials h3");
    
    for(i=0; i<testimonialarray.length; i++) {
        pagination.push("<li></li>");
    }
    
    $("<ul/>", {
        "class": "pagination",
        html: "<a class=\"arrowleft\"><</a>" + pagination.join("") + "<a class=\"arrowright\">></a>"
      }).appendTo("#testimonials .container");
});





//preloader

$(window).load(function() {
    setTimeout(function(){
        $(".preloader .cyan").animate({
            left: "0px",
            opacity: 1
        }, 1600);
        $(".preloader .magenta").animate({
            left: "15px",
            opacity: 1
        }, 1400);
        $(".preloader .yellow").animate({
            left: "30px",
            opacity: 1
        }, 1200);
        $(".preloader .black").animate({
            left: "45px",
            opacity: 1
        }, 1000);
    }, 200);
    setTimeout(function(){
        $("#preloaderbg").fadeOut();
    }, 2000);
});