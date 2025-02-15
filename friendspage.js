
function codeGenerate() {
const friendCode = generateAlphaNumericCode(10); // Generates a code of length 10
document.getElementById('displayCode').textContent = friendCode; }

document.getElementById('codeButton').addEventListener('click', codeGenerate());