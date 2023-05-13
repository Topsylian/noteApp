const body = document.querySelector("body");
const addBtn = document.querySelector("button");
const inputText = document.querySelector("input[type=text]");
const replyEmoji = document.querySelector("section.reply-img > img");

inputText.addEventListener("focus", () => {
	replyEmoji.style.display = "block";
	replyEmoji.src = './icon/thinking.png';
	replyEmoji.classList.add('shake');
	replyEmoji.classList.remove('forward');
});

inputText.addEventListener("blur", () => {
	replyEmoji.src = './icon/party.png';
	replyEmoji.classList.add('forward');
	replyEmoji.classList.remove('shake');
})