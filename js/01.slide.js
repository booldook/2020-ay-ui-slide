/* Data */
var datas = [
	{id: 1, src: "./img/p1.png", alt: "배너1", link: "#"},
	{id: 2, src: "./img/p2.png", alt: "배너2", link: "#"},
	{id: 3, src: "./img/p3.png", alt: "배너3", link: "#"},
	{id: 4, src: "./img/p4.png", alt: "배너4", link: "#"},
	{id: 5, src: "./img/p5.png", alt: "배너5", link: "#"}
];


/* Slide 만드는 함수 */
function slideMaker($obj, dt, clsName, isClone) {
	var html = '';
	for(var i in dt) {
		html += '<div class="'+clsName+'">';
		console.log(dt[i].src);
		html += '<a href="'+dt[i].link+'">';
		html += '<img src="'+dt[i].src+'" alt="'+dt[i].id+'" class="img">';
		html += '</a>';
		html += '</div>';
	}
	$obj.html(html);
	if(isClone) $obj.append(	$("."+clsName).eq(0).clone()	);
	$slide = $("."+clsName);
	last = $slide.length;
}

/* Pager 만드는 함수 */
function pagerMaker($obj, dt, clsName) {
	var html = '';
	for(var i in dt) {
		html += '<div class="'+clsName+'">';
		html += '<span>●</span>';
		html += '</div>';
	}
	$obj.html(html);
	$pager = $("."+clsName);
}

function ani() {
	$slides.stop().animate({"left": -now*100+"%"}, speed);
	pagerChg();
}

/* 프로그램 시작 */

/* jQuery객체선언 및 전역변수 선언 */
var $stage = $(".stage");
var $slides =  $stage.find(".slides");
var $pagers = $stage.find(".pagers");
var $prev = $stage.find(".prev");
var $next = $stage.find(".next");
var interval;
var speed = 500;
var delay = 4000;
var now = 0;
var last, $slide, $pager;

/* 객체(슬라이드 및 페이저) 생성 */
slideMaker($slides, datas, "slide", true);
pagerMaker($pagers, datas, "pager");

/* 이벤트선언 */
var interval = setInterval(intervalSlide, delay);
$stage.mouseenter(pauseSlide);
$stage.mouseleave(playSlide);
$prev.click(prevSlide);
$next.click(nextSlide);
$pager.click(movingSlide);
pagerChg();

/* 함수 */
function pagerChg() {
	$pager.removeClass("active");
	$pager.eq(now).addClass("active");
	if(now == last - 1) $pager.eq(0).addClass("active");
}
function movingSlide() {
	now = $(this).index();
	ani();
}
function nextSlide() {
	if(now < last - 2) now++;
	ani();
}
function prevSlide() {
	if(now > 0) now--;
	ani();
}
function playSlide() {
	interval = setInterval(intervalSlide, delay);
}
function pauseSlide() {
	clearInterval(interval);
}
function intervalSlide() {
	if(now == last - 1) {
		now = 0;
		$slides.css({"left": 0});
	}
	now++;
	ani();
}
