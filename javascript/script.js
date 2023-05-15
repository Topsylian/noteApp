const body = document.querySelector("body");
const header = document.querySelector("header");
const container = document.querySelector(".todo-container");
const greet = document.querySelector("p.show");
const addBtn = document.querySelector(".text-wrapper >button");
const inputText = document.querySelector("input[type=text]");
const replyEmoji = document.querySelector("section.reply-img > img");
const inputHolder = document.querySelector(".list-result");

const correct = document.createElement("img");
correct.style.width = "40px";
correct.src = "./icon/correct.png";
inputText.appendChild(correct);

/*The welcome texts*/

let firstWelcomeText = `Hello, welcome to your Todo list app. `;
let secondWelcomeText = `What are your tasks for today?!`;
greet.textContent = firstWelcomeText;

setTimeout(() => {
  greet.textContent = secondWelcomeText;
  greet.style.color = "var(--primary)";
}, 2000);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const formResult = document.createElement("form");
  const checkTaskBox = document.createElement("section");
  const showResult = document.createElement("p");
  const checkTask = document.createElement("input");
  const deleteTask = document.createElement("section");
  const deleteTaskIcon = document.createElement("img");

  /*style the form holding the result*/

  formResult.setAttribute("id", "todo-list");
	formResult.setAttribute("action", "#");
	formResult.style.gap = "5px";

  /*style the container holding checkbox input*/

  formResult.appendChild(checkTaskBox);
  checkTaskBox.setAttribute("class", "check-wrapper");
  checkTaskBox.appendChild(checkTask);
  myCheck = checkTask.setAttribute("type", "checkbox");
  checkTask.setAttribute("id", "check");
  /*style the p element that show tasks*/

  formResult.appendChild(showResult);
  showResult.setAttribute("class", "show-task");
  showResult.style.fontSize = "1.4rem";
  showResult.textContent = "";

  /*style the container holding checkbox input*/

  formResult.appendChild(deleteTask);
  deleteTask.setAttribute("class", "todo-clear");
  deleteTask.appendChild(deleteTaskIcon);
  deleteTaskIcon.src = "./icon/delete.png";
  let form = formResult;
  let value = inputText.value;
  let formWrap = inputHolder;
  formWrap.appendChild(form);
	showResult.textContent = value;

	/*add reply emoji when the button is also clicked and input filed is empty and when something was written*/

  if (inputText.value === "") {
    greet.textContent = `You've added an empty task! Please input a new task`;
    replyEmoji.style.visibility = "visible";
    replyEmoji.style.transition = ".85s ease-in-out";
    replyEmoji.src = "./icon/sad.png";
  } else {
    greet.textContent = `You've added a task!`;
    replyEmoji.src = "./icon/party.png";
	}
	
	//add functionality to the checkbox
	if (e.target.tagName === 'input') {
		console.log("Please, I'm select button");
	}
});

/*The event that triggers the emoji*/

inputText.addEventListener("focus", () => {
  replyEmoji.style.visibility = "visible";
  replyEmoji.style.transition = ".85s ease-in-out";
  replyEmoji.src = "./icon/thinking.png";
  replyEmoji.classList.add("shake");
  replyEmoji.classList.remove("forward");
  greet.textContent = `Typing...`;
});

inputText.addEventListener("blur", () => {
  replyEmoji.classList.add("forward");
  replyEmoji.classList.remove("shake");
  if (inputText.value === "") {
    greet.textContent = `You've added an empty task! Please input a new task`;
    replyEmoji.src = "./icon/sad.png";
  } else {
    greet.textContent = `You've added a task!`;
    replyEmoji.src = "./icon/party.png";
  }
});

header.addEventListener("pointerover", (e) => {
  e.target.classList.add("shift");
}, true);

header.addEventListener("pointerout", (e) => {
  e.target.classList.remove("shift");
}, true);
/*input text result functionality*/

/*select elements that are going to change in th result*/

/*add event to the add button to add tasks*/
