//Create divs with random height
var count = 20;
var maxHeight = 200;
for (var i = 0; i < count; i++){
	var container = document.getElementById('main');
	var div = document.createElement('div');
	div.className = 'stream';
	newHeight = Math.floor(Math.random()*maxHeight) + 150;
	div.style.height = newHeight + "px";
	container.appendChild(div);
}

/******PINTEREST LAYOUT******/

var windowWidth = 0,
	columnCount = 0, 
	columnWidth = 220,
	columnItems = [],  //consists of values for each column
	margin = 10,
	spaceOnLeft = 0;

$(function(){
	$(window).resize(setStream);
});

function setStream(){
	windowWidth = $(window).width();
	colwidth = $('.stream').outerWidth();
	columnItems = [];
	columnCount = Math.floor(windowWidth/(colwidth + margin*2));
	spaceOnLeft = (windowWidth - ((colwidth*columnCount) + (margin*(columnCount - 1)))) / 2
	//create values for each column
	for(var i = 0; i < columnCount; i++) {
	    columnItems.push(margin);
	}	
	position();
}

//positioning the blocks
//find the column with minimum value and get index
//left = index* (columnWidth+margin) + margin
//top = value of column 

function position (){
	$('.stream').each(function(){
		var min = Array.min(columnItems); //Math.min.apply(Math, columnItems);//
		var index = $.inArray(min, columnItems);
		var left = (index*(columnWidth+margin)) + margin;
		$(this).css({
			'left': (left+spaceOnLeft) + 'px',
			'top': min + 'px'
		});
		columnItems[index] = min + $(this).outerHeight() + margin;
	})
}
Array.min = function(array) {
  return Math.min.apply(Math, array);
};