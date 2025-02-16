let clickCount = 0;
const openButton = document.getElementById('openMindfulness');
const modal = document.getElementById('mindfulnessModal');
const closeModal = document.getElementById('closeModal');

// Toggle modal visibility
openButton.addEventListener('click', function () {
    clickCount++;
    if (clickCount % 2 === 0) {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function () {
    modal.style.display = "none";
});

