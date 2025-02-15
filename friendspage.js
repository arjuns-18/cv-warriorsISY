function codeGenerate() {
    // Randomly choose a length: either 6, 7, or 8 digits
    const length = Math.floor(Math.random() * 3) + 6; 
    let friendCode = '';
    for (let i = 0; i < length; i++) {
      friendCode += Math.floor(Math.random() * 10); // Appends a random digit (0-9)
    }

    // Update the text content directly inside the function
    document.getElementById('friendCode').textContent = "Code: " + friendCode;
  }

  // Pass the function reference (no parentheses)
  document.getElementById('codeButton').addEventListener('click', codeGenerate);