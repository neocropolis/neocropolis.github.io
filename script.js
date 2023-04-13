document.addEventListener("contextmenu", (event) => event.preventDefault());

var started = false;

var audio = new Audio("https://cdn.discordapp.com/attachments/1034232455055544412/1095860051572437133/Summer_Walker_Ft._NO1-NOAH_White_Tee_Naijaflavour.com.mp3");
function play() {
	started = !started;
	if (started) {
		audio.volume = 0.25;
		audio.play();
		document.getElementById("playbutton").style.display = "none";
		document.getElementById("pausebutton").style.display = "block";
	} else {
		audio.pause();
		document.getElementById("playbutton").style.display = "block";
		document.getElementById("pausebutton").style.display = "none";
	}
}
