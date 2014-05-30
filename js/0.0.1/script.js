$(window).load(function(){
$('#dvLoading').fadeOut(2000);
});
$(document).ready(function() {
	$('#info-block h1, #info-block span').fadeIn(3000);
	$('#calculate').click(function() {
		$('#modal-window div').css('display','none');
		$(' #modal-window, #modal-window #calculate-window').fadeOut(200);
	})
})
