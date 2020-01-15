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

function ani() {

}

/* 프로그램 시작 */

/* jQuery객체선언 및 전역변수 선언 */
var $stage = $(".stage");
var $slides =  $stage.find(".slides");
var $slide =  $stage.find(".slide");
var $pager = $stage.find(".pagers");
var interval;
var speed = 500;
var delay = 4000;
var now = 0;

/* 객체(슬라이드 및 페이저) 생성 */
slideMaker($slides, datas, "slide", true);
pagerMaker($pager, datas, "pager");


/* 이벤트선언 */
interval = setInterval(intervalFn, delay);

/* 함수 */
function intervalFn() {
	console.log("실행");
}
