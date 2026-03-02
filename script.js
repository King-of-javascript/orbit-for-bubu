* { margin:0; padding:0; box-sizing:border-box; }

body {
    font-family:'Montserrat', sans-serif;
    background:#000;
    overflow:hidden;
    color:white;
}

/* SCENE */
.scene {
    position:absolute;
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:5vw;
    opacity:0;
    transform:scale(1.05);
    transition:all 1.8s ease;
}

.scene.active {
    opacity:1;
    transform:scale(1);
}

/* TEXT SIZING (Responsive) */
h1 {
    font-family:'Dancing Script', cursive;
    font-size:clamp(2rem, 6vw, 3.5rem);
    color:#ffd700;
}

h2 {
    font-size:clamp(1.5rem, 5vw, 2.5rem);
    background:linear-gradient(45deg,#ff6ec7,#38bdf8,#facc15);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

p {
    font-size:clamp(0.95rem, 3.5vw, 1.1rem);
    margin-top:15px;
    line-height:1.6;
    max-width:600px;
}

.subtitle {
    margin-top:10px;
    opacity:0.9;
}

/* Glass container */
.container {
    background:rgba(255,255,255,0.07);
    padding:clamp(20px,5vw,40px);
    border-radius:20px;
    backdrop-filter:blur(20px);
    width:100%;
    max-width:700px;
}

/* TYPEWRITER */
.typewriter {
    overflow:hidden;
    white-space:nowrap;
    border-right:2px solid #ffd700;
    animation:typing 4s steps(40,end), blink .8s infinite;
}
@keyframes typing { from{width:0} to{width:100%} }
@keyframes blink { 50%{border-color:transparent;} }

/* HEART */
.heart {
    font-size:1.8rem;
    animation:heartbeat 1s infinite;
}
@keyframes heartbeat {
    0%,100%{transform:scale(1);}
    50%{transform:scale(1.4);}
}

.bear-container {
    margin-top:20px;
    display:flex;
    gap:15px;
    align-items:center;
    font-size:clamp(1rem,4vw,1.4rem);
}

/* BACKGROUND */
.space-bg {
    position:fixed;
    width:100%;
    height:100%;
    z-index:-1;
    overflow:hidden;
    background:radial-gradient(circle at center,#0f172a 0%,#000 70%);
}

/* Nebula */
.nebula {
    position:absolute;
    width:clamp(400px,80vw,800px);
    height:clamp(400px,80vw,800px);
    background:radial-gradient(circle,#ff00cc55,#3333ff33,transparent);
    top:10%;
    left:20%;
    animation:rotateNebula 60s linear infinite;
}
@keyframes rotateNebula {
    from{transform:rotate(0deg);}
    to{transform:rotate(360deg);}
}

/* SUN */
.big-sun {
    position:absolute;
    width:clamp(150px,30vw,300px);
    height:clamp(150px,30vw,300px);
    border-radius:50%;
    background:radial-gradient(circle,#ffdd00,#ff5500);
    top:65%;
    left:5%;
    box-shadow:0 0 80px #ff5500;
    animation:pulseSun 4s ease-in-out infinite;
}
@keyframes pulseSun {
    0%,100%{transform:scale(1);}
    50%{transform:scale(1.1);}
}

/* MOON */
.big-moon {
    position:absolute;
    width:clamp(120px,25vw,220px);
    height:clamp(120px,25vw,220px);
    border-radius:50%;
    background:radial-gradient(circle,#ffffff,#aaaaaa);
    top:10%;
    right:5%;
    box-shadow:0 0 40px #ffffff;
    animation:floatMoon 6s ease-in-out infinite alternate;
}
@keyframes floatMoon {
    from{transform:translateY(0);}
    to{transform:translateY(-20px);}
}

/* Shooting Stars */
.shooting-star, .shooting-star.s2 {
    position:absolute;
    width:2px;
    height:80px;
    background:linear-gradient(white,transparent);
    transform:rotate(45deg);
    animation:shoot 6s linear infinite;
}
.shooting-star { top:0; left:70%; }
.shooting-star.s2 { top:20%; left:40%; animation-delay:3s; }

@keyframes shoot {
    from{transform:translateY(-200px) translateX(0) rotate(45deg);}
    to{transform:translateY(800px) translateX(-300px) rotate(45deg);}
}

/* Finale */
.finale {
    font-size:clamp(1.8rem,6vw,3rem);
    color:#ff69b4;
    animation:glowFinal 2s ease-in-out infinite alternate;
}
@keyframes glowFinal {
    from{text-shadow:0 0 15px #ff69b4;}
    to{text-shadow:0 0 35px #ff00ff;}
}
