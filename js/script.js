// Gallery
let _container = document.getElementById('container'),
    _overlay = document.getElementById('overlay'),
    _large = document.getElementById('large'),
    _close = document.getElementById('close'),
    _modal = document.getElementById('modal');

/* Creating Arrays */
let thumbnails = [
    "thumb1.png",
    "thumb2.png",
    "thumb3.png",
    "thumb4.png",
	"thumb5.png",
    "thumb6.png",
    "thumb7.png",
    "thumb8.png",
	"thumb9.png"
];

/* Build the gallery */
function buildGallery(thumbnails) {
    let html = "";
    for (let thumbnail of thumbnails) {
        html += '<img class="thumb" src="img/'+thumbnail+'">';
    }
    _container.innerHTML = html;
};

buildGallery(thumbnails);

// Click event to pop up the overlay
_container.addEventListener('click', function(e) {
    if(e.target.classList.contains('thumb')) {
        _overlay.classList.add('pop');
        let imgsrc = e.target.src;
        _modal.src = imgsrc.replace('thumb', 'full');
    }
});

// Keyup event to exit overlay
document.addEventListener('keyup', function(esc) {
    if (esc.which == 27 && _overlay.classList.contains('pop')) {
        _overlay.classList.remove('pop');
    }
});

// Click event exit overlay
_close.addEventListener('click', function(a) {
    if (_overlay.classList.contains('pop')) {
        _overlay.classList.remove('pop');
    }
});

//Click outside to exit overlay
document.addEventListener('click', function(out) {
    if(out.target.classList.contains('large')) {
        _overlay.classList.remove('pop');
    }
});

// Menu
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu1" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu1" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu1" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});


// smooth menu
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (b) {
	    b.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});