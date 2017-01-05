 var my_name = "Mr. Yu";
 var my_ans;
 
 alert("Welcome to my second alert page");
 alert (" My name is " +my_name );
 alert ("Your name is Bob?");
 alert ("Hi Bob. I hope you like this page.");
 alert ("Woah, Bob? That's the coolest name I've ever heard!")
 
 if (confirm("How's our service the second time?"))
		{	alert("I know you would say \"Yes\", "+my_name+" is such a genius.");
			alert("Could you explain why you have selected \"Yes\"?");}
 else 
		{	alert("Why \"Cancel\"? "+my_name+ " spent a lot of time on this awesome webpage.");
			alert("Could you explain why you have selected \"Cancel\"?");}
			
my_ans = prompt (my_name+"'s visitor, please explain your choice:",":");
if (my_ans)
	{	alert(my_name+" thinks you are satisfied with the website's services.") ;}
else
	{	alert(my_name+" thinks you are blank minded.");}