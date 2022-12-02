$('.show-popup').click(()=>{
	$('.popup').fadeIn();
	$('.overlay-popup').show();
});

$('.popup-close').click(()=>{
	$('.popup').fadeOut();
	$('.overlay-popup').hide();
});
$('.overlay-popup').click(()=>{
	$('.popup').fadeOut();
	$('.overlay-popup').hide();
});