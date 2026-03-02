document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");

    function startMusic() {
        if (music) {
            music.volume = 0.6; // softer romantic volume
            music.play().catch(() => {});
        }
        document.removeEventListener("click", startMusic);
    }

    document.addEventListener("click", startMusic);

});
