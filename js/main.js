// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event) {
    //keycode
    let audioKeyCode = getKeyCode(event);
    //typed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
    //if key exists
    const cantFoundAnyKey = !key;

    if(cantFoundAnyKey) {
        return;
    }
    addPlayingClass(key);
    playAudio(audioKeyCode);
};

function getKeyCode(event) {
    let keyCode;

    const isKeyBoard = event.type === "keydown"

    if (isKeyBoard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    
    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play()
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function registerEvents() {
    // click with mouse
keys.forEach( key => {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})
// keyboard type
window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)