

document.getElementById('generateCodeBtn').addEventListener('click', function() {
const code = generateAlphaNumericCode(10); // Generates a code of length 10
document.getElementById('displayCode').textContent = code;