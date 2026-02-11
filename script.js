let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let yesSize = 1;
let noSize = 1;

noBtn.addEventListener("click", () => {
    yesSize += 0.2;
    noSize -= 0.1;

    yesBtn.style.transform = `scale(${yesSize})`;
    noBtn.style.transform = `scale(${noSize})`;

    if (noSize <= 0.3) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});
