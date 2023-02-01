import "./styles.css";
import React, { useState } from "react";

//emogi dictionary array
var emogiDictionary = {
  "🫠": "Melting face",
  "🤩": "Star struck",
  "🫢": "Face with Open Eyes and Hand Over Mouth",
  "🫣": "Face with Peeking Eye",
  "🫡": "Saluting Face",
  "🫶": "Heart Hands",
  "😆": "Grinning Squinting Face",
  "😇": "Smiling Face with Halo",
  "🤪": "Zany Face",
  "🤑": "Money-Mouth Face"
};

var emogiWeKnow = Object.keys(emogiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emogiInputHandler(event) {
    //handles the user input emogi
    var userInput = event.target.value;
    var meaning = emogiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have it in the database";
    }
    setMeaning(meaning);
  }

  function emogiClickHandler(emogi) {
    var meaning = emogiDictionary[emogi];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome to Emogi Interpreter</h1>
      <input onChange={emogiInputHandler} />
      <div> Means: {meaning}</div>

      <h3>Emogi we know</h3>
      {emogiWeKnow.map(function (emogi) {
        return (
          <span
            onClick={() => emogiClickHandler(emogi)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emogi}
          >
            {emogi}
          </span>
        );
      })}
    </div>
  );
}
