//open mobile menu
const hamBtn = document.querySelector(".ham-btn");
const menu = document.querySelector(".nav__menu");

const toggleActive = (item) => {
	item.classList.toggle("active");
};

hamBtn.addEventListener("click", () => {
	toggleActive(menu);
	toggleActive(hamBtn);
});
menu.addEventListener("click", (e) => {
	if (e.target.classList.contains("nav__menu-item")) {
		toggleActive(menu);
		toggleActive(hamBtn);
	}
});

// nav
function scrollHeader() {
	const nav = document.querySelector(".nav");
	if (this.scrollY >= 200) nav.classList.add("scroll-nav");
	else nav.classList.remove("scroll-nav");
}
window.addEventListener("scroll", scrollHeader);

//calculate bmi

const height = document.querySelector(".calculate__height");
const weight = document.querySelector(".calculate__weight");
const sendBtn = document.querySelector(".calculate__send");
const resultText = document.querySelector(".result-text");

const checkInputWhetherEmpty = (item) => {
	if (item.value == "") {
		return false;
	}
	return true;
};
const clearInput = (item) => {
	item.value = "";
	item.classList.remove("warning");
};
const calculateResult = () => {
	const calculate = weight.value / Math.pow(height.value / 100, 2);
	let resultContext;
	if (checkInputWhetherEmpty(height) && checkInputWhetherEmpty(weight)) {
		if (calculate < 18.5) {
			resultContext = `Your BMI is ${Math.floor(calculate)} and you are skinny`;
			resultText.classList.add("skinny");
			setTimeout(() => {
				resultText.classList.remove("skinny");
				resultText.textContent = "";
			}, 4000);
		} else if (calculate >= 18.5 && calculate < 24.9) {
			resultContext = `Your BMI is ${Math.floor(
				calculate
			)} and you are healthy`;
			resultText.classList.add("healthy");
			setTimeout(() => {
				resultText.classList.remove("healthy");
				resultText.textContent = "";
			}, 4000);
		} else {
			resultContext = `Your BMI is ${Math.floor(
				calculate
			)} and you are overweight`;
			resultText.classList.add("overweight");
			setTimeout(() => {
				resultText.classList.remove("overweight");
				resultText.textContent = "";
			}, 4000);
		}
		clearInput(weight);
		clearInput(height);
		resultText.textContent = resultContext;
	} else {
		resultText.textContent = "Wrong data";
		resultText.classList.add("warning");
		setTimeout(() => {
			resultText.classList.remove("warning");
			resultText.textContent = "";
		}, 2000);
	}
};

sendBtn.addEventListener("click", calculateResult);

// section active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 140;
		const sectionId = current.getAttribute("id");
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "] ")
				.classList.remove("active-link");
		}
	});
}

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2000,
	delay: 300,
});

sr.reveal(`.home__text`);
sr.reveal(`.home__img .img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos__item, .program__item, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__text-box, .calculate__img-box`, { origin: "right" });
sr.reveal(`.calculate__content,.choose__img-box .img `, { origin: "left" });
