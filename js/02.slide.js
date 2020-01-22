/*
var now = 0;
var interval = setInterval(function(){
	console.log(now++);
}, 4000);

$(".intervalDie").click(function(){
	clearInterval(interval);
});
*/

var n = 0;
setInterval(function(){
	if(n == 4) n = 0;
	else n++;
	$(".slide-wrap").stop().animate({"left": (-100*n)+"%"});
}, 3000);