function codeGenerate() {
  // Randomly choose a length: either 6, 7, or 8 digits
  const length = Math.floor(Math.random() * 3) + 6; 
  let friendCode = '';
  for (let i = 0; i < length; i++) {
      friendCode += Math.floor(Math.random() * 10); // Appends a random digit (0-9)
  }

  // Update the text content inside the paragraph
  document.getElementById('friendCode').textContent = "Code: " + friendCode;

  // Show the code in the modal
  document.getElementById('largeCode').textContent = friendCode;
  document.getElementById('codeModal').style.display = "block";
}

// Close the modal when the close button is clicked
document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('codeModal').style.display = "none";
});

// Pass the function reference (no parentheses)
document.getElementById('codeButton').addEventListener('click', codeGenerate);
