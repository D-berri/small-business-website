// Select the input, button, and CTA <h2>
const input = document.querySelector('input');
const button = document.querySelector('button');
const ctaH2 = document.querySelector('h2.cta');

// Add event listener to update CTA text based on input value
button.addEventListener('click', () => {
    if (input && ctaH2) {
        ctaH2.textContent = input.value;
    }
});