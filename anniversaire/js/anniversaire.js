$(function() {
	var $bouton = $('#mainItem');

	$bouton.on("click", function() {
		var $cible = $('#firstMessage');
		console.log("Clic");
		$cible.css = ("visibility", "visible");
	});
});