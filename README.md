Number Guessing Game
-----------------------------------------------------------

This is a simple Number Guessing Game built with React. The goal of the game is for the user to guess a randomly generated number between 1 and 10. The game will give feedback on whether the guess is "warmer" (closer to the number) or "colder" (further away), along with whether to try a higher or lower number.
-------------------------------------------------------------------
Features
The game generates a random number between 1 and 10 for the player to guess.
Provides feedback about how close or far the player is from the correct answer.
Displays messages like "Warmer" and "Colder" based on the player's guess.
Option to replay the game after a correct guess.
Project Structure
App.js: Main application component that renders the NumberGuessingGame component.
guessNum.js: Contains the game logic, user input handling, and the game's feedback messages.
App.js
This is the main entry point of the application. It imports and renders the NumberGuessingGame component.
----------------------------------------
// import { useState } from 'react';
import NumberGuessingGame from "./guessNum.js";

function App() {
  return (
    <div className="App">
      <NumberGuessingGame />
    </div>
  );
}

export default App;
--------------------------------------------
guessNum.js
The NumberGuessingGame component contains the following:

State Management: Manages the state for the randomly generated number, user input, feedback message, and game status.
Game Logic: Handles user guesses and provides feedback.
Replay Option: Resets the game after the correct guess.
---------------------------------------
Installation
Clone the repository or download the files.

Navigate to the project directory.

Install dependencies using npm:

npm install

Start the development server:
npm start
---
The application will run on http://localhost:3000.