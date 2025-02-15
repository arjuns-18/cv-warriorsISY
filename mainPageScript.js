let clickCount = 0;

document.getElementById('openMindfulness').addEventListener('click', function(){

    clickCount++;
        if(clickCount%2 === 0) {
            document.getElementById('mindfulnessModal').style.display = "none";
        }
        else if(clickCount%2 === 1) {
            document.getElementById('mindfulnessModal').style.display = "flex";
        }
} )

