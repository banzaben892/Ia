function IA1(message) {
  let msg = message.toLowerCase().trim();

  let intent = "unknown";

  if (msg.includes("bonjour") || msg.includes("salut")) {
    intent = "greeting";
  }

  else if (msg.includes("qui es tu")) {
    intent = "identity";
  }

  else if (msg.includes("nom")) {
    intent = "memory";
  }

  else if (msg.includes("comment") || msg.includes("pourquoi")) {
    intent = "question";
  }

  return {
    intent,
    clean: msg
  };
}
