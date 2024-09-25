const loan = document.querySelector('#loan-amount')
const interest = document.querySelector('#interest-rate')
const months = document.querySelector('#month')
const cal = document.querySelector('#btn')
const EMI = document.querySelector('#emi')


function calculateEMI() {
	if (loan.value === '' || interest.value === '' || months.value === '') {
		alert('please enter all the value')
		return;
	}
	else {
		const p = loan.value;
		const r = interest.value / 1200;
		const n = months.value;

		const emiValue = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
		EMI.textContent = emiValue.toFixed(2);
	}
}

cal.addEventListener('click', calculateEMI);