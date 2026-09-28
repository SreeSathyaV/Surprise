```javascript
/* =========================================
   BIRTHDAY WEBSITE - SCRIPT.JS
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const giftBox = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");
const birthdayMessage = document.getElementById("birthdayMessage");

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

const finalGift = document.getElementById("finalGift");


/* =========================================
   OPEN MAIN GIFT
========================================= */

function openGift() {

    if (!giftBox) return;

    // Stop the floating animation
    giftBox.style.animation = "none";

    // Make the gift slightly smaller
    giftBox.style.transform = "scale(0.9)";

    // Change text
    if (giftText) {
        giftText.innerHTML = "✨ Surprise! ✨";
    }

    // Show birthday message
    setTimeout(() => {

        if (birthdayMessage) {
            birthdayMessage.style.display = "block";
        }

    }, 500);

    // Start music
    playMusic();

    // Create confetti
    createConfetti();
}


/* =========================================
   SCROLL TO MEMORIES
========================================= */

function scrollToMemories() {

    const memories = document.getElementById("memories");

    if (memories) {

        memories.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   MUSIC CONTROL
========================================= */

function playMusic() {

    if (!birthdayMusic) return;

    birthdayMusic.volume = 0.35;

    birthdayMusic.play()
        .then(() => {

            if (musicBtn) {
                musicBtn.innerHTML = "🔊";
            }

        })
        .catch(() => {

            /*
                Some browsers block audio until
                the user interacts with the page.

                Since the user clicked the gift,
                music should normally be allowed.
            */

            console.log("Music could not start automatically.");

        });

}


function toggleMusic() {

    if (!birthdayMusic) return;

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        if (musicBtn) {
            musicBtn.innerHTML = "🔊";
        }

    } else {

        birthdayMusic.pause();

        if (musicBtn) {
            musicBtn.innerHTML = "🔇";
        }

    }

}


/* =========================================
   FINAL GIFT
========================================= */

function openFinalGift() {

    if (!finalGift) return;

    finalGift.style.display = "block";

    createConfetti();

    // Scroll slightly so the surprise is visible
    setTimeout(() => {

        finalGift.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

}


/* =========================================
   CONFETTI EFFECT
========================================= */

function createConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "✨",
        "🎂",
        "❤️",
        "🎁",
        "⭐"
    ];

    for (let i = 0; i < 25; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.transition =
            "transform 3s ease, opacity 3s ease";

        document.body.appendChild(confetti);


        // Random falling distance
        const fallDistance =
            window.innerHeight +
            Math.random() * 300;


        // Random horizontal movement
        const horizontalMove =
            (Math.random() - 0.5) * 300;


        setTimeout(() => {

            confetti.style.transform =
                `translate(${horizontalMove}px, ${fallDistance}px) rotate(720deg)`;

            confetti.style.opacity = "0";

        }, 50);


        // Remove from page
        setTimeout(() => {

            confetti.remove();

        }, 3500);

    }

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".memory-card, .award-card, .letter-card, .section-title"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================
   ADD REVEAL CSS DYNAMICALLY
========================================= */

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

    .memory-card,
    .award-card,
    .letter-card,
    .section-title {

        opacity: 0;

        transform: translateY(35px);

        transition:
            opacity 0.8s ease,
            transform 0.8s ease;

    }


    .memory-card.show,
    .award-card.show,
    .letter-card.show,
    .section-title.show {

        opacity: 1;

        transform: translateY(0);

    }

`;

document.head.appendChild(revealStyle);


/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const stars = document.querySelector(".stars");

    if (stars) {

        stars.style.transform =
            `translateY(${scrollPosition * -0.08}px)`;

    }

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    console.log(
        "🎂 Birthday Surprise Website Loaded ❤️"
    );

});
```

### 📁 Your folder should now look like this

```text
birthday-website/
│
├── index.html
├── style.css
├── script.js
│
└── assets/
    ├── birthday-music.mp3
    ├── photo1.jpg
    ├── photo2.jpg
    └── photo3.jpg
```

**Important:** The `birthday-music.mp3` is optional. If you don't add it, everything else will still work.

The next step should be replacing the **Memory One/Two/Three placeholders with your brother's actual photos**, and we can also add a **“How well do you know your sibling?” mini-game** to make the gift much more personal. ❤️🎂
