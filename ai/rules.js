function rules(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("ça va")) return "Oui 😊 et toi ?";
  if (msg.includes("heure")) return "Je ne connais pas l'heure système.";
  if (msg.includes("comment")) return "Explique-moi mieux 🤔";

  return "Je ne comprends pas encore cette question.";
}
