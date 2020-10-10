$('#check').click(() => {
	if ($('#more').val().length < 6) {
		alert('MOOOOORE!');
	}
	if ($('#less').val().length > 6) {
		alert('LESSSSSS!');
	}
});
