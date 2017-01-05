


/*
//////////////////////
//Generating one cell


window.onload = gen_newCard; 
function gen_newCard1()
{
document.getElementById("square10").innerHTML= "99";
}
*/



///////////
//Generating 2 columns  (beginner level)


window.onload = gen_newCard;
function gen_newCard() 
{
	for (var i=0; i<5; i++) 
	{                                // generate 1st column.
		var gen_newNum = Math.floor(Math.random() * 15)+1;   
															   
															 

		document.getElementById("square" + i).innerHTML = gen_newNum;
		
	}
		for (var i=5; i<10; i++) 
	{                                // generate 2nd column.
		var gen_newNum = Math.floor(Math.random() * 15)+16;     
															 
															 

		document.getElementById("square" + i).innerHTML = gen_newNum;
		
		
	}
	for (var i=10; i<14; i++) 
	{                              // generating 3rd column.
		var gen_newNum = Math.floor(Math.random() * 15)+31;     
														  	  
															 

		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
	for (var i=14; i<19; i++) 
	{                              // generating 4th column.
		var gen_newNum = Math.floor(Math.random() * 15)+46;    
														  	
															  

		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
	for (var i=19; i<24; i++) 
	{                              // generating 5th column.
		var gen_newNum = Math.floor(Math.random() * 15)+61;  
														  	   
															  

		document.getElementById("square" + i).innerHTML = gen_newNum;
		}
}

//////////////////////
//Generating 2 columns  (Int. level)
/*
window.onload = gen_newCard;

	
function gen_newCard() 
{   
    var gen_newNum;
	for (var i=0; i<19; i++) 
	{                                // generate 1st column and 3rd column

		if (i < 5) 
		{
			gen_newNum = Math.floor(Math.random() * 15)+1;   // this is the formula to generate all the numbers in column with number between 1 to 15.  
		}
        else if ((i >= 14) && (i < 19))	                     //  checking if "i" is betwn 14(incl) and 19(not incl).  "&&" means "and" logic...
		{
			gen_newNum = Math.floor(Math.random() * 15)+46;   // this is the formula to generate all the numbers in column with number between 46 to 60.  
		}
		else
		{
		    gen_newNum = "";
		}
		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
	

}

*/
//////////////////////
//Generating 2 columns  (Adv. level)
// combine above with just 1 loop and 1 