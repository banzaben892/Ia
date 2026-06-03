function sendMessage() {
  let input = document.getElementById("input");
  let msg = input.value.trim();

  if (!msg) return;

  addMessage(msg, "user");

  let analysis = IA1(msg);
  let reply = IA2(analysis, msg);

  setTimeout(() => {
    addMessage(reply, "bot");
  }, 400);

  input.value = "";
}

function addMessage(text, type) {
  let box = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.classList.add("msg", type);
  div.innerText = text;

  box.appendChild(div);

  box.scrollTop = box.scrollHeight;
    }
