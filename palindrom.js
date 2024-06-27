// script.js
document.getElementById('check-btn').addEventListener('click', function () {
    const input = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    if (!input) {
        alert('Please input a value');
        return;
    }

    const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        resultDiv.textContent = `${input} is a palindrome`;
    } else {
        resultDiv.textContent = `${input} is not a palindrome`;
    }
});
