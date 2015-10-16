
$(document).ready(function(){

	var randomVal = Math.floor((Math.random() * 100) + 1);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){


  		randomVal = Math.floor((Math.random() * 100) + 1);
  	});



  	$("#guessButton").click(function(e){

  		var insertedVal = parseInt(document.getElementById('userGuess').value);

  		if(randomVal == insertedVal){
  			
  			$("#feedback").text("Nailed It !");
  			
  			randomVal = Math.floor((Math.random() * 100) + 1);
  			e.preventDefault();
  		}

  		else if((randomVal + 1 < insertedVal && randomVal + 10 > insertedVal) || (insertedVal + 1 < randomVal && insertedVal + 10 > randomVal) ){

  			$("#feedback").text("Very Hot");
  			
  			e.preventDefault();
  		}else if((randomVal + 10  < insertedVal && randomVal + 20 > insertedVal)  || (insertedVal + 10 < randomVal && insertedVal + 20 > randomVal) ){

  			$("#feedback").text("Hot");
  		
  			e.preventDefault();

  		} else if((randomVal + 20  < insertedVal && randomVal + 30 > insertedVal)  || (insertedVal + 20 < randomVal && insertedVal + 30 > randomVal) ){

  			$("#feedback").text("Warm");
  			
  			e.preventDefault();
  		} else if((randomVal + 30  < insertedVal && randomVal + 50 > insertedVal)  || (insertedVal + 30 < randomVal && insertedVal + 50 > randomVal) ){

  			$("#feedback").text("Cold");
  			
  			e.preventDefault();
  		}
  		 else if((randomVal + 50  < insertedVal && randomVal + 100 > insertedVal)  || (insertedVal + 50 < randomVal && insertedVal + 100 > randomVal) ){

  			$("#feedback").text("Ice Cold");
  			
  			e.preventDefault();
  		}
  	});
});





