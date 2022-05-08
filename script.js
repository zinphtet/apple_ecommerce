const selectDom = (selector) => document.querySelector(selector);
//variable declare
const cube = selectDom('.cube');
const x_up = selectDom('.x-up-arrow');
const x_down = selectDom('.x-down-arrow');
const y_left = selectDom('.y-left-arrow');
const y_right = selectDom('.y-right-arrow');
const z_up = selectDom('.z-up-arrow');
const z_down = selectDom('.z-down-arrow');
const control = selectDom('.rotate-arrows');
const header_section = selectDom('header');
let x = 0;
let y = 0;
let z = 0;

x_up.addEventListener('click', () => {
	x += 20;
	cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
x_down.addEventListener('click', () => {
	x -= 20;
	cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
y_right.addEventListener('click', () => {
	y += 20;
	cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
y_left.addEventListener('click', () => {
	y -= 20;
	cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
z_up.addEventListener('click', () => {
	z += 20;
	cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
z_down.addEventListener('click', () => {
	z -= 20;
	cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

// stop global var
let stop = setInterval(() => {
	y += 5;
	cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}, 200);

//rotate Phone
// rotatePhone();
control.addEventListener('mouseover', () => {
	clearInterval(stop);
});
control.addEventListener('mouseleave', () => {
	stop = setInterval(() => {
		y += 5;
		cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
	}, 200);
});

//Change Background
let i = 1;
setInterval(() => {
	if (i === 5) i = 1;
	header_section.style.backgroundImage = `url(./images/slideshow/bg_${i}.jpg)`;
	header_section.style.transistion = 'background-image 5s';
	i++;
}, 10000);
