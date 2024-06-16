window.onload = function () {
    for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            switch (this.innerHTML) {
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
        });
    }

    for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.addEventListener("keydown", function (e) {
            switch (e.key) {
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
        });
    }
}