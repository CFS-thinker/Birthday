document.getElementById('wishButton').addEventListener('click', () => {
    // 1. Get the music element
    const music = document.getElementById('birthdayMusic');
    
    // 2. Start the music
    music.play().catch(error => {
        console.log("Audio play failed:", error);
    });

    // 3. Show the alert message
    alert("Make a wish, Didi! 🎂✨ May all your hopes and dreams come true!");
});