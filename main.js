document.addEventListener('DOMContentLoaded', function () {
  // Add your JavaScript logic here
  const savingsTypeSection = document.getElementById('savingsTypeSection');
  const groupSavingsDetails = document.getElementById('groupSavingsDetails');
  const otherPaymentMethodSection = document.getElementById('otherPaymentMethod');

  const savingsTypeSelect = document.getElementById('savingsType');
  const paymentMethodSelect = document.getElementById('paymentMethod');

  savingsTypeSelect.addEventListener('change', function () {
    if (savingsTypeSelect.value === 'group') {
      groupSavingsDetails.classList.remove('hidden');
    } else {
      groupSavingsDetails.classList.add('hidden');
    }
  });

  paymentMethodSelect.addEventListener('change', function () {
    if (paymentMethodSelect.value === 'other') {
      otherPaymentMethodSection.classList.remove('hidden');
    } else {
      otherPaymentMethodSection.classList.add('hidden');
    }
  });
});
// Add this code inside the document.addEventListener block

const contributionFrequencySelect = document.getElementById('contributionFrequency');
const otherFrequencyForm = document.getElementById('otherFrequencyForm');

contributionFrequencySelect.addEventListener('change', function () {
  if (contributionFrequencySelect.value === 'other') {
    otherFrequencyForm.classList.remove('hidden');
  } else {
    otherFrequencyForm.classList.add('hidden');
  }
});

const contributionCurrencySelect = document.getElementById('contributionCurrency');

// Sample list of currencies (you can replace this with a dynamic data source)
const currencies = ['USD', 'EUR','CAD', 'NGN'];

// Function to populate the Contribution Currency dropdown
function populateCurrencyDropdown() {
  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    contributionCurrencySelect.add(option);
  });
}

// Call the function to populate the dropdown on page load
populateCurrencyDropdown();

/**const contributionFrequencySelect = document.getElementById('contributionFrequency');
const otherFrequencyForm = document.getElementById('otherFrequencyForm');
const paymentMethodSelect = document.getElementById('paymentMethod');
const otherPaymentMethodForm = document.getElementById('otherPaymentMethodForm');

function toggleOtherForm(selectElement, formElement) {
  selectElement.addEventListener('change', function () {
    if (selectElement.value === 'other') {
      formElement.classList.remove('hidden');
    } else {
      formElement.classList.add('hidden');
    }
  });
}

// Call the function to toggle the 'Other Frequency' form
toggleOtherForm(contributionFrequencySelect, otherFrequencyForm);
// Call the function to toggle the 'Other Payment Method' form
toggleOtherForm(paymentMethodSelect, otherPaymentMethodForm);
**/
