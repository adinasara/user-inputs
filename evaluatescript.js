$(function() {
	$("#goat-submit").click(function(){
		var goatString = $("#goat").val();
		var goat = parseInt(goatString);
		if ( goatString < 5 ) {
      $("#goat-form").hide();
      $("#answer").text("Believe in yourself! You're worth at least six goats");
      
    } else {
      $("#answer").text("Well somebody thinks that they're important. I would say six goats max ");
     
    }
  });

});





