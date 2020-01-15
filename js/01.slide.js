var datas = [
	{id: 1, src: "./img/p1.png", alt: "배너1", link: "#"},
	{id: 2, src: "./img/p2.png", alt: "배너2", link: "#"},
	{id: 3, src: "./img/p3.png", alt: "배너3", link: "#"},
	{id: 4, src: "./img/p4.png", alt: "배너4", link: "#"},
	{id: 5, src: "./img/p5.png", alt: "배너5", link: "#"}
];

function slideMaker(train, dt) {
	console.log(dt);
	var html = '';
	for(var i in dt) {
		html += '<div>';
		html += '<a href="'+dt[i].link+'">';
		html += '<img src="'+dt[i].src+'" alt="'+dt[i].id+'" class="img">';
		html += '</a>';
		html += '</div>';
	}
	train.html(html);
}

function pagerMaker() {

}

function ani() {

}

var $stage = $(".stage");
var $slides =  $stage.find(".slides");
var $slide =  $stage.find(".slide");

slideMaker($slides, datas);




