var datas = [
	{id: 1, src: "./img/p1.png", alt: "배너1", link: "#"},
	{id: 2, src: "./img/p2.png", alt: "배너2", link: "#"},
	{id: 3, src: "./img/p3.png", alt: "배너3", link: "#"},
	{id: 4, src: "./img/p4.png", alt: "배너4", link: "#"},
	{id: 5, src: "./img/p5.png", alt: "배너5", link: "#"}
];

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

var $stage = $(".stage");
var $slides =  $stage.find(".slides");
var $slide =  $stage.find(".slide");
var $pager = $stage.find(".pagers");

slideMaker($slides, datas, "slide", true);
pagerMaker($pager, datas, "pager");




