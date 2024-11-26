//DOM cache:
const soundTrigger = document.querySelector(".soundTrigger");

// initialize audio object:
const srcPrefix = "http://wwwcourses.github.io/ProgressBG-Front-End-Dev/pages/themes/beginners/Appendix/soundsOnHover";
const audio = new Audio(`${srcPrefix}/sounds/login.wav`);

// play sound on hover (mouseover)
soundTrigger.addEventListener("mouseover", function (e) {
	audio.play();
});

// pause sound on mouseleave
soundTrigger.addEventListener("mouseleave", function (e) {
	// console.log(audio.duration);
	audio.pause();
	audio.currentTime = 0;
});
