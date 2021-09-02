
const question = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
    ["thanks", "thank you"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what", "why", "how", "where", "when"]
  ];
  
  const answer = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Nothing much",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["I am nameless", "I don't have a name"],
    ["Why?", "Why? You shouldn't!"],
    ["You're welcome"],
    ["Bye", "Goodbye", "See you later"],
    ["Yes?"]
  ];
    
  const alternative = [
    "Go on...",
    "Try again",
    "I'm listening..."
  ];

  module.exports = {question, answer, alternative};
