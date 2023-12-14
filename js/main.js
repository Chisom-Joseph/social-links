const changeText = document.querySelector(".changeText")

const captions = [
    "facebook account",
    "tiktok",
    "facebook group",
    "twitter",
    "instagram",
    "snapchat account",
    "whatsapp number",
]

let count = 0
let currentLetter = 0;
let cursorSpeed = 500;

const addText = () => {
    cursorSpeed = 100
    changeText.innerHTML += captions[count][currentLetter]
    const addTextTimeout = setTimeout(addText, 150)
    currentLetter++
    if(currentLetter == captions[count].length){
        count++
        currentLetter = 0
        clearInterval(addTextTimeout)
        setTimeout(clearText, 2000)
        if(count == captions.length){count = 0}
        cursorSpeed = 500
    }
}

const clearText = () => {
    cursorSpeed = 100
    const clearTextTimeOut = setTimeout(clearText, 100)
    
    // clearing text
    changeText.innerHTML = changeText.innerHTML.substring(0, changeText.innerHTML.length -1)
    if(changeText.innerHTML.length == 0) {
        clearTimeout(clearTextTimeOut)
        setTimeout(addText, 1000)
        cursorSpeed = 500
    }

}
setTimeout(clearText, 2000)



const changeTextCursor = document.querySelector('.changeTextCursor')
const animateCursor = () => {
    if(getComputedStyle(changeTextCursor).opacity == 1) {
        changeTextCursor.style.opacity = "0";
    }else {
        changeTextCursor.style.opacity = "1";
}
    setTimeout(animateCursor, cursorSpeed);
}

animateCursor()