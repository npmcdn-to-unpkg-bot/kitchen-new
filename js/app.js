$(document).foundation();

// Initialize Masonry inside Foundation 5.5 Tab component
$(window).load(function() {
  $('.grid').masonry({
    itemSelector: '.grid'
  });
});

// Reinitialize masonry inside each panel after the relative tab link is clicked - 
$('.tabs-title a').on('click', function() {
	// do async to allow menu to open
	setTimeout( function() {
		$('.grid').masonry({
			itemSelector: '.grid'
		}, 500);
	});
});