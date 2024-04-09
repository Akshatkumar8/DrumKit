//high order fuction addeventListener()
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    // alert("i got clicked");
    var currentKey=this.innerHTML;
    makesound(currentKey);
    buttonAnimation(currentKey);
})
}
document.addEventListener("keypress",function(event){
 makesound(event.key);
 buttonAnimation(event.key)
})

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log("wrong key clicked")
            break;
    }
}

function buttonAnimation(buttonKey){
   var activeButton= document.querySelector("."+ buttonKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed")
   },100)
}