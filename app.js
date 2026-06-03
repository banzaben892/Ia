function sendMessage() {
  let input = document.getElementById("input");
  let msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";

  showTyping();

  let analysis = IA1(msg);
  let reply = IA2(analysis, msg);

  setTimeout(() => {
    removeTyping();
    typeMessage(reply);
  }, 900);
}

/* ADD MESSAGE */
function addMessage(text, type) {
  let box = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.classList.add("msg", type);
  div.innerText = text;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

/* TYPING INDICATOR */
function showTyping() {
  let box = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.classList.add("msg", "bot");
  div.id = "typing";
  div.innerHTML = `
    <div class="typing">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  `;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function removeTyping() {
  let t = document.getElementById("typing");
  if (t) t.remove();
}

/* TYPEWRITER EFFECT */
function typeMessage(text) {
  let box = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.classList.add("msg", "bot");
  box.appendChild(div);

  let i = 0;

  function typing() {
    if (i < text.length) {
      div.innerText += text.charAt(i);
      i++;
      setTimeout(typing, 15);
    }
  }

  typing();

  box.scrollTop = box.scrollHeight;
}
