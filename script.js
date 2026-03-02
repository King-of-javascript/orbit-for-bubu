document.addEventListener("DOMContentLoaded", function () {

    const scenes = document.querySelectorAll(".scene");
    const music = document.getElementById("bgMusic");

    let currentScene = 0;
    const sceneDuration = 5000; // 5 seconds per scene

    // Start music on first click (browser policy safe)
    function startMusic() {
        music.play().catch(() => {});
        document.removeEventListener("click", startMusic);
    }

    document.addEventListener("click", startMusic);

    function showNextScene() {
        scenes[currentScene].classList.remove("active");

        currentScene++;

        if (currentScene < scenes.length) {
            scenes[currentScene].classList.add("active");
        } else {
            clearInterval(sceneInterval);
        }
    }

    const sceneInterval = setInterval(showNextScene, sceneDuration);

});
