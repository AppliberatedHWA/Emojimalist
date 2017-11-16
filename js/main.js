
(function Emojimalist() {


    let copiedEmoji = document.getElementById("copied-emoji");
    let snackbar = document.getElementById("snackbar");

    function showSnackbar(message) {
        snackbar.innerText = message;
        snackbar.classList.remove("show");
        snackbar.offsetHeight;
        snackbar.classList.add("show");
    }

    function handleClick(event) {
        if (event.target.nodeName === "I") {
            copiedEmoji.value = event.target.innerText;
            copiedEmoji.select();
            document.execCommand("copy");
            showSnackbar("Emoji copied");
        }
    }

    const list = document.querySelectorAll(".emoji-list li");
    for (var item of list) item.tabIndex = 0;


    let emojiList = document.querySelector(".emoji-list");
    emojiList.addEventListener("click", handleClick);

}());