(function () {
	emailjs.init("GH5t6EmjRaxS_uMDp");
})();

const subscribeForm = document.getElementById("subscribe-form");
const email = document.querySelector(".input-email");
const concactMessage = document.querySelector(".subscribe-message");

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};
const sendEmail = (e) => {
	e.preventDefault();

	if (email.value === "" && validateEmail(email.value)) {
		concactMessage.classList.add("notGood");
		concactMessage.textContent = "Your email is incorrect";

		setTimeout(() => {
			concactMessage.textContent = "";
		}, 4000);
	} else {
		emailjs
			.sendForm(
				"service_9py3aao",
				"template_7lnngh1",
				"#subscribe-form",
				"GH5t6EmjRaxS_uMDp"
			)
			.then(
				() => {
					concactMessage.classList.add("isGood");
					concactMessage.textContent = "Your registered successfull";

					setTimeout(() => {
						concactMessage.textContent = "";
					}, 4000);
				},
				(error) => {
					alert("Ops, Something Has Failed...", error);
				}
			);
		email.value = "";
	}
};

subscribeForm.addEventListener("submit", sendEmail);
