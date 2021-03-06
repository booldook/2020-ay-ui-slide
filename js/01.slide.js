/*
$(window).resize(function(){
	console.log("hi~");
});

var wid = [];
wid[0] = $(".box").width();
wid[1] = $(".box").innerWidth();
wid[2] = $(".box").outerWidth();
wid[3] = $(".box").outerWidth(true);
console.log(wid);

// $(객체).resize(function(){});
*/


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
		html += '<a href="'+dt[i].link+'">';
		html += '<img src="'+dt[i].src+'" alt="'+dt[i].id+'" class="img">';
		html += '</a>';
		html += '</div>';
	}
	$obj.html(html);
	if(isClone) $obj.append(	$("."+clsName).eq(0).clone()	);
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
}



/* 프로그램 시작 */

/* 가로형 */
(function(){
	/* jQuery객체선언 및 전역변수 선언 */
	var $stage = $("#stage1");
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
	
	$pager = $stage.find(".pager");
	$slide = $slides.find(".slide");
	last = $slide.length;
	
	/* 이벤트선언 */
	var interval = setInterval(intervalSlide, delay);
	$stage.mouseenter(pauseSlide);
	$stage.mouseleave(playSlide);
	$prev.click(prevSlide);
	$next.click(nextSlide);
	$pager.click(movingSlide);
	$(window).resize(resizeSlide);
	pagerChg();
	
	/* 함수 */
	function ani() {
		$slides.stop().animate({"left": -now*100+"%"}, speed);
		pagerChg();
	}
	function resizeSlide() {
		console.log(	$slide.outerHeight()	);
	}
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
})();

/* 세로형 */
(function(){
	/* jQuery객체선언 및 전역변수 선언 */
	var $stage = $("#stage2");
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
	
	$pager = $stage.find(".pager");
	$slide = $slides.find(".slide");
	last = $slide.length;
	
	/* 이벤트선언 */
	var interval = setInterval(intervalSlide, delay);
	$stage.mouseenter(pauseSlide);
	$stage.mouseleave(playSlide);
	$prev.click(prevSlide);
	$next.click(nextSlide);
	$pager.click(movingSlide);
	console.log("이미지로딩전:" + $stage.outerHeight());
	$stage.imagesLoaded(function(){
		$(window).resize(resizeSlide).trigger("resize");
		console.log("이미지로딩후:" + $stage.outerHeight());
	});
	pagerChg();
	
	/* 함수 */
	function ani() {
		$slides.stop().animate({"top": -now*100+"%"}, speed);
		pagerChg();
	}
	function resizeSlide() {
		var hei = $slide.outerHeight();
		$stage.outerHeight(hei);
	}
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
})();

/* 페이드형 */
(function(){
	/* jQuery객체선언 및 전역변수 선언 */
	var $stage = $("#stage3");
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
	
	$pager = $stage.find(".pager");
	$slide = $slides.find(".slide");
	last = $slide.length;
	
	/* 이벤트선언 */
	var interval = setInterval(intervalSlide, delay);
	$stage.mouseenter(pauseSlide);
	$stage.mouseleave(playSlide);
	$prev.click(prevSlide);
	$next.click(nextSlide);
	$pager.click(movingSlide);
	$stage.imagesLoaded(function(){
		$(window).resize(resizeSlide).trigger("resize");
	});
	pagerChg();
	
	/* 함수 */
	function ani() {
		$slide.stop().animate({"opacity": 0}, speed);
		$slide.eq(now).stop().animate({"opacity": 1}, speed);
		pagerChg();
	}
	function resizeSlide() {
		var hei = $slide.outerHeight();
		$stage.outerHeight(hei);
	}
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
})();


