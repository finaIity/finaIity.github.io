// Easter egg for _whoami text
document.addEventListener("DOMContentLoaded", function() {
    const whoamiText = document.getElementById("whoami-text");
    
    if (whoamiText) {
        // Store the original text
        const originalText = whoamiText.textContent;
        
        // For desktop - Change text on mouseover
        whoamiText.addEventListener("mouseover", function() {
            this.textContent = "gianni";
        });
        
        // For desktop - Restore original text on mouseout
        whoamiText.addEventListener("mouseout", function() {
            this.textContent = originalText;
        });
        
        // For mobile - Toggle text on touch
        let isTouched = false;
        whoamiText.addEventListener("touchstart", function(e) {
            e.preventDefault(); // Prevent default touch behavior
            if (!isTouched) {
                this.textContent = "j1ru";
                isTouched = true;
            } else {
                this.textContent = originalText;
                isTouched = false;
            }
        }, false);
    }
});