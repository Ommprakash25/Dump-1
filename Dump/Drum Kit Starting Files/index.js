var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var w_audio = new Audio("sounds\\tom-1.mp3")
            w_audio.play();
            break;
        case "a":
            var a_audio = new Audio("sounds\\tom-2.mp3")
            a_audio.play();
            break;
        case "s":
            var s_audio = new Audio("sounds\\tom-3.mp3")
            s_audio.play();
            break;
        case "d":
            var d_audio = new Audio("sounds\\tom-4.mp3")
            d_audio.play();
            break;
        case "j":
            var j_audio = new Audio("sounds\\snare.mp3")
            j_audio.play();
            break;
        case "k":
            var k_audio = new Audio("sounds\\crash.mp3")
            k_audio.play();
            break;
        case "l":
            var l_audio = new Audio("sounds\\kick-bass.mp3")
            l_audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }