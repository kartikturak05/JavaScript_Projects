const emoji = document.querySelector('#emoji');

const emojis = [
    "😂",
    "😍",
    "😊",
    "😁",
    "😎",
    "😜",
    "😋",
    "😉",
    "😘",
    "😆",
    "😇",
    "😅",
    "😄",
    "😃",       
]

emoji.addEventListener("mouseover", function(){
    const random = Math.floor(Math.random() * emojis.length);
    emoji.innerText = emojis[random];
});