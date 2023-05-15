const body = document.querySelector("body");
const header = document.querySelector("header");
const container = document.querySelector(".todo-container");
const greet = document.querySelector("p.show");
const addBtn = document.querySelector(".text-wrapper >button");
const inputText = document.querySelector("input[type=text]");
const replyEmoji = document.querySelector("section.reply-img > img");



/*The welcome texts*/

let firstWelcomeText = `Hello, welcome to your Todo list app. `;
let secondWelcomeText = `What are your tasks for today?!`;
greet.textContent = firstWelcomeText;

setTimeout(() => {
	greet.textContent = secondWelcomeText;
	greet.style.color = 'var(--primary)';
}, 5000);

const listResult = document.createElement("section");

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	
	let value = inputText.value;

  const formResult = document.createElement("form");
  const checkTaskBox = document.createElement("section");
  const showResult = document.createElement("p");
  const checkTask = document.createElement("input");
  const deleteTask = document.createElement("section");
  const deleteTaskIcon = document.createElement("img");

  /*style the form holding the result*/

  container.appendChild(listResult);
  listResult.appendChild(formResult);
  listResult.setAttribute("class", "list-result");
  formResult.setAttribute("id", "todo-list");
  formResult.setAttribute("action", "#");

  /*style the container holding checkbox input*/

  formResult.appendChild(checkTaskBox);
  checkTaskBox.setAttribute("class", "check-wrapper");
  checkTaskBox.appendChild(checkTask);
	myCheck = checkTask.setAttribute("type", "checkbox");
  checkTask.setAttribute("id", "check");
  /*style the p element that show tasks*/

  formResult.appendChild(showResult);
  showResult.setAttribute("class", "show-task");
  showResult.textContent = "";

  /*style the container holding checkbox input*/

  formResult.appendChild(deleteTask);
  deleteTask.setAttribute("class", "todo-clear");
  deleteTask.appendChild(deleteTaskIcon);
  deleteTaskIcon.src = "./icon/delete.png";

  showResult.textContent = value;
});

/*The event that triggers the emoji*/

inputText.addEventListener("focus", () => {
  replyEmoji.style.visibility = "visible";
  replyEmoji.style.transition = ".85s ease-in-out";
  replyEmoji.src = "./icon/thinking.png";
  replyEmoji.classList.add("shake");
  replyEmoji.classList.remove("forward");
});

inputText.addEventListener("blur", () => {
  replyEmoji.src = "./icon/party.png";
  replyEmoji.classList.add("forward");
  replyEmoji.classList.remove("shake");
});

inputText.addEventListener("touchmove", () => {
	header.classList.toggle('shift');
});

/*input text result functionality*/

/*select elements that are going to change in th result*/

/*add event to the add button to add tasks*/
