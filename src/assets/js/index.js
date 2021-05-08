document.addEventListener("DOMContentLoaded", () => {
    typeWriterFunc();
    progressFunc();
});

/**
 * Progress bar on post pages.
 */
function progressFunc() {
    const docElem = document.documentElement;
    const docBody = document.body;

    // elements
    const progress = document.getElementById("progress");

    progress &&
        document.addEventListener("scroll", () => {
            const top = docElem["scrollTop"] || docBody["scrollTop"];
            const height = docElem["scrollHeight"] || docBody["scrollHeight"];
            const scroll = (top / (height - docElem.clientHeight)) * 100;
            // update progress
            progress.style.setProperty("--scroll", `${scroll}%`);
        });
}

/**
 * Typewriter effect on landing page.
 */
function typeWriterFunc() {
    const elem = document.getElementById("text-elem");

    const phrases = [
        "Software Engineer",
        "Tech-Enthusiast",
        "Self-Proclaimed Burgerholic",
    ];
    let text = "|";
    let initWordIndex = 0;
    let wait = 2000;
    let isDeleting = false;

    function typing() {
        const fullText = phrases[initWordIndex % phrases.length];
        let typeSpeed = 200;

        const textLen = isDeleting ? text.length - 1 : text.length + 1;
        text = fullText.substring(0, textLen);
        elem.innerHTML = `${text}`;

        if (isDeleting) {
            typeSpeed /= 3;
        }

        if (!isDeleting && text === fullText) {
            typeSpeed = wait;
            isDeleting = true;
        } else if (isDeleting && text === "") {
            isDeleting = false;
            initWordIndex++;
            typeSpeed = 600;
        }
        setTimeout(() => typing(), typeSpeed);
    }
    elem && typing();
}
