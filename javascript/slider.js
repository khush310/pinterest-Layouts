$(document).ready(function() {	
	$('.toggle-nav').click(function(e) {
		$('body').toggleClass('showSidebar');
		e.preventDefault();
	});

	$(".dropDown > a").click(function(e) {
		if ($(this).parent().hasClass("active")) {

		} else {
			$(".dropDown.active").removeClass("active");
		}
		$(this).parent().toggleClass("active");
	});

	//Create divs with random height
	var count = 20;
	var maxHeight = 200;
	for (var i = 0; i < count; i++) {
		var container = document.getElementById('main');
		var div = document.createElement('div');
		div.className = 'stream';
		newHeight = Math.floor(Math.random() * maxHeight) + 150;
		div.style.height = newHeight + "px";
		container.appendChild(div);
	}


});


