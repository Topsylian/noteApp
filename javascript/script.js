const body = document.querySelector("body");
const addBtn = document.querySelector("button");
const replyEmoji = document.querySelector("section.reply-img > img");

addBtn.addEventListener("click", () => {
    replyEmoji.setAttribute("src", "./icon/delete.png");
});