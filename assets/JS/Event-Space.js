$(function() {
	$('.btn-toggle').click(function() {
		$('.nav-toggle').slideToggle();
	});

	$('.nav-link').hover(
		function() {
			$(this).css('border-color', '#D5B12A');
		},
		function() {
			$(this).css('border-color', 'transparent');
		}
	);


	$(function() {
		$('[data-toggle="popover"]').popover();
	});

	$('.popover-dismiss').popover({
		trigger: 'focus'
	});
});


