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
const macbook = selectDom('#macbook');
const innerMacbook = selectDom('.macbook');
const watch_up = selectDom('.watch-up');
const watch_down = selectDom('.watch-down');
const watch_left = selectDom('.watch-left');
const watch_right = selectDom('.watch-right');
const watch_bands = selectDom('.watch-bands');
const watch_cases = selectDom('.watch-cases');

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

//when macbook click add animate class

// macbook.addEventListener('click', function () {
// 	innerMacbook.classList.add('animate');
// });

//intersection observer
const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.4,
};

const callback = (entry, obs) => {
	let [ent] = entry;
	if (ent.isIntersecting) {
		innerMacbook.classList.add('animate');
	}
};
const observer = new IntersectionObserver(callback, options);
const target = document.querySelector('#macbook');
observer.observe(target);

//watch section

let watch_y = 0;
let watch_x = 0;

watch_up.addEventListener('click', function () {
	watch_y -= 25;
	console.log(watch_y);
	watch_cases.style.marginTop = `${watch_y}rem`;
	if (watch_y === -100) {
		this.classList.add('hide');
		return;
	} else {
		this.classList.remove('hide');
		watch_down.classList.remove('hide');
	}
});
watch_down.addEventListener('click', function () {
	watch_y += 25;
	watch_cases.style.marginTop = `${watch_y}rem`;

	if (watch_y === 100) {
		this.classList.add('hide');
		return;
	} else {
		this.classList.remove('hide');
		watch_up.classList.remove('hide');
	}
});
watch_right.addEventListener('click', function () {
	watch_x -= 25;
	watch_bands.style.marginLeft = `${watch_x}rem`;

	if (watch_x === -100) {
		this.classList.add('hide');
		return;
	} else {
		this.classList.remove('hide');
		watch_left.classList.remove('hide');
	}
});
watch_left.addEventListener('click', function () {
	watch_x += 25;
	watch_bands.style.marginLeft = `${watch_x}rem`;
	if (watch_x === 100) {
		this.classList.add('hide');
		return;
	} else {
		this.classList.remove('hide');
		watch_right.classList.remove('hide');
	}
});
