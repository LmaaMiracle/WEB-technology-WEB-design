const form = document.getElementById('theForm');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let res = checkData();
	if (res.errors.length === 0) {
		form.submit();
	}
});

function checkData () {
	let formData = new FormData(form);

	// регулярные выражения
	const email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const phone_re = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

	let res = {
		errors: []
	};

	if (formData.get('name').length < 2) {
		res.errors.push({ field: 'name', message: "Field 'name' should be filled" });
	}

	if (!email_re.test(formData.get('email'))) {
		res.errors.push({ field: 'email', message: "Field 'email' should be formated such as name@domain.com" });
	}

	if (!phone_re.test(formData.get('phone'))) {
		res.errors.push({
			field: 'phone',
			message: "Field 'Phone number' should be formated such as XXXXXXXXXX, XXX-XXX-XXXX or XXX XXX XXXX"
		});
	}
	showErrors(res.errors);
	return res;
}

function showErrors (errors) {
	const errors_block = document.querySelector('.errors');
	errors_block.innerHTML = '';
	let inputs = form.querySelectorAll('input');
	for (i of inputs) {
		i.classList.remove('invalid');
	}
	for (e of errors) {
		let d = document.createElement('div');
		d.classList.add('error');
		d.innerHTML = e.message;
		errors_block.appendChild(d);
		form.querySelector(`input[name="${e.field}"]`).classList.add('invalid');
	}
}
