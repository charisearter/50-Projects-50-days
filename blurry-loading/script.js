const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

// set interval to unblur every 30 milliseconds
let int = setInterval(blurring, 30);

function blurring() {
	load++;

	if (load > 99) {
		clearInterval(int);
	}

	loadText.innerText = `${load}%`;
	// fade out as loading gets closer to 100%
	// opacity is either 0 (gone) or 1 (visible)
	//fading loader from 1 to 0 as it loads
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	//max of blur (filter is 30px)
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//from stack overflow
// map a range of numbers to another range of numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
