function IA2(analysis, raw) {

  switch (analysis.intent) {

    case "greeting":
      return "Bonjour 👋 comment puis-je t'aider ?";

    case "identity":
      return "Je suis une mini IA créée en JavaScript.";

    case "memory":

      if (raw.includes("mon nom est")) {
        let name = raw.split("mon nom est")[1].trim();
        memory.name = name;
        return "Enchanté " + name + " 👋";
      }

      if (raw.includes("comment je m'appelle")) {
        return memory.name
          ? "Tu t'appelles " + memory.name
          : "Je ne connais pas ton nom.";
      }

      return "Je ne comprends pas la demande.";

    case "question":
      return rules(raw);

    default:
      return "Je ne comprends pas 🤔";
  }
}
