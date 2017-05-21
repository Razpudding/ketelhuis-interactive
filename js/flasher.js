//FightClub flasher (mag later in aparte js file)
var flashImg = document.getElementById('flash');
flashImg.style.display = "none";

function fightClubFlash()
{
	console.log("flashing!");
	if (flashImg.style.display == "none")
	{
		//terminal.style.display = "none";
		flashImg.style.display = "block";
		setTimeout( function() { flashImg.style.display = "none";} , 10);
	}
	else if (flashImg.style.display = "block")
	{
		flashImg.style.display = "none";
	}
}

(function loop() {
    var rand = Math.round((Math.random() * 20000) + 300000);
    setTimeout(function() {
            fightClubFlash();
            loop();  
    }, rand);
}());