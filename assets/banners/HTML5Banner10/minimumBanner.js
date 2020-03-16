function init() {

var targetTag = document.getElementsByTagName('figure');
TweenMax.to(targetTag, .1, {delay:1, opacity:1});

var targetTag = document.getElementsByTagName('h1');
TweenMax.from(targetTag, 1, {delay:2, x:-300});

var targetTag = document.getElementsByTagName('h2');
TweenMax.from(targetTag, 1, {delay:1.5, x:300});


var targetTag = document.getElementsByTagName('h1');
TweenMax.to(targetTag, .3, {delay:4, opacity:0});

var targetTag = document.getElementsByTagName('h2');
TweenMax.to(targetTag, .3, {delay:4, opacity:0});


var targetTag = document.getElementsByTagName('figure');
TweenMax.to(targetTag, 2, {delay:4.5, backgroundPosition:"top left"});

var targetTag = document.getElementsByTagName('li');
TweenMax.staggerFrom(targetTag, .7, {delay:5,x:300}, .5);

var targetTag = document.getElementsByTagName('a');
TweenMax.from(targetTag, 1, {delay:6, scale:0, ease:Back.easeout});

}
window.onload = init;