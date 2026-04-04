document.getElementById('wishButton').addEventListener('click', () => {
    const music = document.getElementById('birthdayMusic');
    
    // This starts the music when they click the button
    music.play().catch(error => {
        console.log("Browser blocked autoplay until interaction:", error);
    });

    alert("Make a wish, Didi! 🎂✨ May all your hopes and dreams come true!");
});