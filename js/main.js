var window_width_video = $(window).width(),
    window_height_video = $(window).height(),
    flagwrapper = $(".flag-wrapper").width(),
    heightpicture,
    data = "translateY(calc(62% + 5em))";

heightpicture = window_height_video / 2.40 - 30;
$(".map-kingpower").css("height", window_height_video);
$(".map-kingpower").css("width", window_width_video);

$(".map-kingpower-page-1").css("height", window_height_video - 50);
$(".map-kingpower-page-1").css("width", window_width_video);

$(".map-kingpower div.wrapper").css({
    "min-height": heightpicture
});
$(".map-kingpower-page-1 div.wrapper").css({
    "min-height": window_height_video 
});


$(".card .content").css({
    "height": heightpicture
});

$(".map-kingpower-page-1 .card .content").css({
    "height": window_height_video
});

$(".flag-wrapper").css({
    "height": flagwrapper,
    "width": flagwrapper
});
if (window_width_video > 768) {
    $(".map-kingpower,.map-kingpower-page-1").css("overflow", "hidden");
}

console.log(window_height_video + " : " + window_width_video + " : MIN-HEIGHT = " + heightpicture);