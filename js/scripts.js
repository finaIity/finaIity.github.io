// Easter egg for _whoami text
document.addEventListener("DOMContentLoaded", function() {
    const whoamiText = document.getElementById("whoami-text");
    
    if (whoamiText) {
        // Store the original text
        const originalText = whoamiText.textContent;
        
        // Change text on mouseover
        whoamiText.addEventListener("mouseover", function() {
            this.textContent = "j1ru";
        });
        
        // Restore original text on mouseout
        whoamiText.addEventListener("mouseout", function() {
            this.textContent = originalText;
        });
    }
});