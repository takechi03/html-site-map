var window_width_video = $(window).width(),
    window_height_video = $(window).height(),
    flagwrapper = $(".flag-wrapper").width(),
    language = $(".language").height(),
    heightpicture,
    data = "translateY(calc(62% + 5em))";

heightpicture = window_height_video / 2.40 - 30;
paddingforcard2 = heightpicture * 0.05;

console.log("padding " + paddingforcard2 + "height picture : " + heightpicture + " | Flagwrapper : " + flagwrapper + " | language height : " + language);
$(".map-kingpower").css("height", window_height_video);
$(".map-kingpower").css("width", window_width_video);

$(".map-kingpower-page-1").css("height", window_height_video - 50);
$(".map-kingpower-page-1").css("width", window_width_video);

$(".map-kingpower div.wrapper").css({
    "min-height": heightpicture
});
// $(".map-kingpower-page-1 div.wrapper").css({
//     "min-height": window_height_video 
// });

$(".map-kingpower-page-1 .language").css({
    "padding-top" : language,
    "padding-bottom" : language,
    "padding-left" : language/2,
    "padding-right" : language/2
});

$(".card .content").css({
    //"height": heightpicture
    "padding":paddingforcard2,
});

$(".card2 .content").css({
    "padding":paddingforcard2,
    //"height": heightpicture
});

$(".map-kingpower .flag-wrapper").css({
    "height": flagwrapper,
    "width": flagwrapper
});
if (window_width_video > 768) {
    $(".map-kingpower,.map-kingpower-page-1").css("overflow", "hidden");
}

console.log(window_height_video + " : " + window_width_video + " : MIN-HEIGHT = " + heightpicture);