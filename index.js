window.onload = function () {
    for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            handle(this.innerHTML);
            animation(this.innerHTML);
        });
    }

    document.addEventListener("keydown", function (e) {
        handle(e.key);
        animation(e.key);
    });
}

function handle(key) {
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/snare.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            new Audio("sounds/kick-bass.mp3").play();
    }
}

function animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}