for (var i = 0; i < (document.querySelectorAll(".drum")).length; i++) {
    //yha button clicks h by mouse
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btnClick = this.innerHTML;
        makeSound(btnClick);
        animation(btnClick);
    });

    document.querySelectorAll(".drum")[i].addEventListener("mouseover", function () {
        var hoverr=this.innerHTML;
        animation(hoverr);
        this.style.backgroundColor = "gray";
    });
    document.querySelectorAll(".drum")[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
    });

}

// key strokes h yha
document.addEventListener("keydown", function (KeyStroke) {
    makeSound(KeyStroke.key);
    animation(KeyStroke.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log(this.btnineerHtml);
            break;
    }
}

function animation(key){
    var activeBtn = document.querySelector("."+key);
      activeBtn.classList.add("pressed");

      setTimeout(function () {
        activeBtn.classList.remove("pressed")
      }, 100);
}

function animationn(key){
    document.querySelector()
}
