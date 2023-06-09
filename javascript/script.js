const body = document.querySelector("body");
const header = document.querySelector("header > h1");
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

greet.textContent = secondWelcomeText;
greet.style.color = "var(--primary)";

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

  if (inputText.value === "" && e.target === addBtn) {
    greet.textContent = `You've added an empty task! Please input a new task`;
    replyEmoji.style.visibility = "visible";
    replyEmoji.style.transition = ".85s ease-in-out";
    replyEmoji.src = "./icon/neutral.png";
  } else {
    greet.textContent = `Task added!`;
    replyEmoji.src = "./icon/confetti.png";
  }

  checkTask.addEventListener("click", (e) => {
    //add functionality to the checkbox
    if (e.currentTarget.tagName === "INPUT" && checkTask.checked && showResult.textContent == "") {
      showResult.style.textDecoration = "line-through";
      greet.textContent = `Oops, that was an empty task!`;
      console.log(`${e.currentTarget.tagName}`);
      replyEmoji.src = "./icon/sad.png";
    } else if (e.currentTarget.tagName === "INPUT" && checkTask.checked && showResult.textContent !== "") {
      showResult.style.textDecoration = "line-through";
      greet.textContent = `Wow, you've accomplished a task, uncheck to continue task or press delete icon to delete task!`;
      console.log(`${e.currentTarget.tagName}`);
      replyEmoji.src = "./icon/party.png";
    } else {
      replyEmoji.src = "./icon/lovely.png";
      showResult.style.textDecoration = "none";
      greet.textContent = `Continue task`;
    }
  });

  deleteTaskIcon.addEventListener(
    "click",
    (e) => {
      //add functionality to the delete
      if (e.currentTarget.tagName === "IMG") {
        greet.textContent = `Task deleted!`;
        form.style.display = "none";
        replyEmoji.src = "./icon/bin.png";
      }
    },
    { capture: true }
  );

  inputText.value = "";
});

addBtn.addEventListener("focus", function () {
  if (document.activeElement === addBtn) {
    addBtn.blur();
    addBtn.style.boxShadow = "1px 1px 10px 1px var(--accent-two)";
  } else {
    addBtn.style.boxShadow = "1px 1px 10px 1px yellow";
  }
});
/*The event that triggers the emoji*/

inputText.addEventListener("focus", (e) => {
	replyEmoji.style.visibility = "visible";
  replyEmoji.style.transition = ".85s ease-in-out";
  replyEmoji.src = "./icon/thinking.png";
  replyEmoji.classList.add("shake");
	replyEmoji.classList.remove("forward");
	greet.textContent = 'waiting for your task...';
});

inputText.addEventListener("keydown", () => {
  replyEmoji.style.visibility = "visible";
  replyEmoji.style.transition = ".85s ease-in-out";
  replyEmoji.src = "./icon/coding.png";
  replyEmoji.classList.remove("shake");
  replyEmoji.classList.add("forward");
  greet.textContent = `Typing...`;
});

inputText.addEventListener("keyup", () => {
  if (inputText.value === "") {
    replyEmoji.style.visibility = "visible";
    replyEmoji.style.transition = ".85s ease-in-out";
    replyEmoji.src = "./icon/sad.png";
    replyEmoji.classList.add("shake");
    replyEmoji.classList.remove("forward");
    greet.textContent = `Please, input a task`;
  }
});

inputText.addEventListener("blur", () => {
  replyEmoji.classList.add("forward");
  replyEmoji.classList.remove("shake");
  if (inputText.value === "") {
    greet.textContent = `Please input a task`;
    replyEmoji.src = "./icon/sad.png";
  } else {
    greet.textContent = `Press (Add) button to add task!`;
    replyEmoji.src = "./icon/correct.png";
  }
});

header.addEventListener("pointerover", (e) => {
  e.target.classList.toggle("shift");
});
