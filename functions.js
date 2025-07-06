
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------

	1. 	Play Button
	2.	Credits

------------------------------------------------------------- */

/*--------------------------------------------------------------
=	0. Play Button
------------------------------------------------------------- */

// Class Toggle
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".button");
    if (btn) {
        btn.addEventListener("click", function(event) {
            btn.classList.toggle("paused");
            event.preventDefault();
        });
    }
});

// Play/Pause Toggle
var theAudio = document.getElementById("audio");
var isPlaying = false;
function togglePlay() {
    if (isPlaying) {
        theAudio.pause();
    } else {
        theAudio.play();
    }
}
theAudio.onplaying = function() {
    isPlaying = true;
};
theAudio.onpause = function() {
    isPlaying = false;
};

/*--------------------------------------------------------------
=	2. Credits
----------------------------------------------------------------

	Title:		Offset.Aura
	Artist:		Yann Novak
	Year:		2020
	Code:		Yann Novak
	Sound:		Yann Novak
	Copyright:	2020 Yann Novak Studio 

------------------------------------------------------------- */