$(document).ready(function() {

	var button = document.getElementById("compare");

	button.addEventListener("click", function() {
	  var text1 = document.getElementById("text1").value;

	  var text2 = document.getElementById("text2").value;

	  if (text1 === '') {
	  	$('#head').fadeOut(500)
	  	document.getElementById('head').innerHTML = "text area 1 is empty"
	  	$('#head').fadeIn(500)
	  } else if (text2 === '') {
	  	$('#head').fadeOut(500)
	  	document.getElementById('head').innerHTML = "text area 2 is empty"
	  	$('#head').fadeIn(500)
	  } else if (text1 === text2) {
	  	$('#head').fadeOut(500)
	  	document.getElementById('head').innerHTML = "<span style='color:#00e676;'>MATCH</span>"
	  	$('#head').fadeIn(500)
	  } else if (text1 != text2) {
	  	$('#head').fadeOut(500)
	  	document.getElementById('head').innerHTML = "<span style='color:#f44336;'>NO MATCH</span>"
	  	$('#head').fadeIn(500)
	  }

	  $("html, body").animate({ scrollTop: 0 }, 600);

	});

});