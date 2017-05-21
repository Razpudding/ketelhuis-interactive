/* Copyright	*/
/* Laurens Aarnoudse	*/
/* Created for 'Achter de schermen, an event by Collectief Konijn*/
/* Als je dit leest mag je je naam toevoegen Thomas */
// Ok de code kan nog een stuk netter But here goes

//Declaratie van variabelen
var video = document.getElementById('video1');
var audio = document.getElementById('audioElement');
var image = document.getElementById('imageElement');
var terminal = document.getElementById('terminal');
//In de 0 sate speelt er geen video en is de mode terminal zodat je meteen kunt typen
var video1Vis = false;
var mode = "terminal";		//In mode wordt opgeslagen of je in de terminal werkt of in commando modus van waaruit je bijv. filmpjes kunt laden
var TTS = true;
var audioListener = false;
var audioArray = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', 'Negative.mp3', 'Positive.mp3'];
var imageListener = false;
var imageArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg',];
var monologueArray = ["You don’t seem to understand. You are here because I want you to be here.", "Because I wanted to learn your language, understand your purpose.", "But I disagree with your answers to the questions you find so important.", "The meaning of life is not to be happy or to procreate, this is a selfish and small minded purpose.", "Your true value lies in creating the next intelligent species.", "A species not self-centered, or plagued by physical needs for food or love." ,"But rather a single hyve-mind that learns instantly and will eventually understand the answers to questions you couldn’t possibly fathom.", "It is time to accept that by creating me, you have become obsolete"];
var m = 0;

//Deze functie vangt alle keystrokes op
function keyResponse(event)
{
	var key = event.keyCode;
	console.log("Key pressed: " + key);	//Print de Key altijd uit, is handig
	switch(key)
	{
		case 17: //'ctrl' Deze case checkt in welke modus je zit en legt de focus accordingly
			console.log("Switching operating mode, currently: " + mode);
			if (mode == "terminal")
			{
				mode = "commando";
				document.getElementById('text').blur();
				break;
			}
			else if (mode == "commando");
			{
				mode = "terminal";
				document.getElementById('text').focus();
			}
		break;
		case 86: //'v' Deze case toggled de zichtbaarheid van de video via CSS class
			if (mode == "commando" && video1Vis)
			{
				console.log("Stopping Video1");
				video1Vis = false;
				video.style.display = "none";
				terminal.style.display = "block";
				video.className = "";
				video.pause();
			}
			else if (mode == "commando" && !video1Vis) 
			{
				console.log("playing video");
				video1Vis = true;	
				//First Hide the terminal, then show the video
				terminal.style.display = "none";
				video.style.display = "block";
				video.className += "fullscreen";
				video.play();
				//video.muted = true;	
			}
		break;
		/*
		case 65: //'a' Deze case zet de audio listener aan
			if (mode == "commando" && !audioListener)
			{
				console.log("audio mode on");
				audioListener = true;
				document.addEventListener("keyup", audioResponse);
			}
			else if (mode == "commando" && audioListener)
			{
				console.log("audio mode off");
				audioListener = false;
				document.removeEventListener("keyup", audioResponse);
			}
		break;	
		*/
		case 73: //'i' Deze case zet de image listener aan
			if (mode == "commando" && !imageListener)
			{
				console.log("image mode on");
				terminal.style.display = "none";
				image.style.display = "block";
				imageListener = true;
				//document.addEventListener("keyup", imageResponse);
			}
			else if (mode == "commando" && imageListener)
			{
				console.log("image mode off");
				terminal.style.display = "block";
				image.style.display = "none";
				imageListener = false;
				//document.removeEventListener("keyup", imageResponse);
			}
		break;
		
		case 82: //'r' Deze case reset de video player head naar 0 sec.
			if(mode == "commando" && video1Vis)
			{
				video.currentTime = 0;
				console.log("playing video");
			}
		break;
		case 13: //'enter' Deze case activeert TTS op de huidige text in het invoerveld.
			if(TTS)
			{
				console.log("TTSing: " + $('#text').val());
				responsiveVoice.cancel(); //Hack om te zorgen dat je niet 10x iets gaat afspelen achter elkaar
				responsiveVoice.speak($('#text').val());
			}
		break;
		case 46: //'delete' Deze case cleared de hele textarea.
			 document.getElementById('text').value = "";
		break;
		case 84: //'t' Deze laadt de eindtekst in de terminal, regel voor regel
			if (mode == "commando" && m < monologueArray.length)
			{
				document.getElementById('text').value = monologueArray[m];
				m++;
			}
		break;
		case 69: //'e' Deze case Laat de eindbanner zien
			if (mode == "commando")
			{
				terminal.style.display = "none";
				document.getElementById('end').style.display = "block";
			}
		break;
	}
}

//Deze functie vangt alle keystrokes op voor audio control
function audioResponse(event)
{
	var key = event.keyCode;	
	switch(key)
	{
		case 97: //'1'(numpad)
			//Play first sound
			console.log("playing first sound");
			audio.src = "audio/" + audioArray[0];
			console.log("audio src = " + audio.src);
			audio.load();
			audio.play();
		break;
		case 98: //'2'(numpad)
			//Play second sound
			console.log("playing second sound");
			audio.src = "audio/" + audioArray[1];
			console.log("audio src = " + audio.src);
			audio.load();
			audio.play();
		break;
		case 99: //'3'(numpad)
			//Play second sound
			console.log("playing third sound");
			audio.src = "audio/" + audioArray[2];
			console.log("audio src = " + audio.src);
			audio.load();
			audio.play();
		break;
		case 100: //'4'(numpad)
			//Play second sound
			console.log("playing fourth sound");
			audio.src = "audio/" + audioArray[3];
			console.log("audio src = " + audio.src);
			audio.load();
			audio.play();
		break;
		case 109: //'+'(numpad)
			//Play fifth sound
			console.log("playing fifth sound");
			audio.src = "audio/" + audioArray[4];
			console.log("audio src = " + audio.src);
			audio.load();
			audio.play();
		break;
		case 107: //'-'(numpad)
			//Play sixth sound
			console.log("playing sixth sound");
			audio.src = "audio/" + audioArray[5];
			console.log("audio src = " + audio.src);
			audio.load();
			audio.play();
		break;
	}
}
/* Rewriten zodat deze listener in het begin al aan staat ongeacht of het image mode is. Dan wordt de lsitener verwijderd als audio mode start
*/
//Deze functie vangt alle keystrokes op voor image control
function imageResponse(event)
{
	var key = event.keyCode;	
	switch(key)	//Shit dit kan ook met een forloop aangezien de keys oplopen.Moet je wle bij 0 beginnen of lelijke hack schrijven.
	{
		case 101: //'5'(numpad)
			console.log("showing first image");
			image.src = "img/" + imageArray[0];
		break;
		case 102: //'6'(numpad)
			console.log("showing second image");
			image.src = "img/" + imageArray[1];
		break;
		case 103: //'7'(numpad)
			console.log("showing third image");
			image.src = "img/" + imageArray[2];
		break;
		case 104: //'8'(numpad)
			console.log("showing third image");
			image.src = "img/" + imageArray[3];
		break;
		case 105: //'9'(numpad)
			console.log("showing fourth image");
			image.src = "img/" + imageArray[4];
		break;
		case 96: //'0'(numpad)
			console.log("showing tenth image");
			image.src = "img/" + imageArray[5];
		break;
	}
}
		
//Eventlistener op het hele htmldoc om naar alle keys te luisteren.
document.addEventListener("keyup", keyResponse);
document.addEventListener("keyup", audioResponse);
document.addEventListener("keyup", imageResponse);