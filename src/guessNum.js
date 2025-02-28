import { useState } from "react";
import "./NumberGuessGame.css";

export default function NumberGuessingGame() {
  const [gameNum, setGameNum] = useState(Math.floor(Math.random() * 10) + 1);
  const [userRes, setUserRes] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100");
  const [prevDiff, setPrevDiff] = useState(null);
  const [prevGuess, setPrevGuess] = useState(null);
  const [gameOver, setGameOver] =useState(false);

  const handleGuess = () => {
    const guess = parseInt(userRes.trim(), 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      setMessage("❌ Please enter a number between 1 and 10");
      return;
    }

    if (guess === prevGuess) {
      setMessage("⚠️ You already guessed that number! Try a new one.");
      return;
    }

    const diff = Math.abs(gameNum - guess);

    if (guess === gameNum) {
      setMessage("🎉 Congratulations! You guessed the correct number!");
      setGameOver(true)
    } else {
      let newMessage = "";
      if (prevDiff !== null) {
        newMessage =
          diff < prevDiff
            ? "🔥 Warmer! You're getting closer!"
            : "❄️ Colder! You're moving away!";
      } else {
        newMessage =
          guess > gameNum ? "⬇️ Try a lower number" : "⬆️ Try a higher number";
      }
      setMessage(newMessage);
      setPrevDiff(diff);
      setPrevGuess(guess);
    }

    setUserRes(""); // Reset input field after guess
  };

  const handleReplay = () => {
    setGameNum(Math.floor(Math.random()*10)+1);
    setUserRes("");
    setMessage("Enter number 1 and 10");
    setPrevDiff(null);
    setPrevGuess(null);
    setGameOver(false);

  }

  return (
    <div className="game-container">
      <h1 className="game-title">🔢 Number Guess Game</h1>
      <p className="game-message">{message}</p>
      <input
        type="number"
        value={userRes}
        onChange={(e) => setUserRes(e.target.value)}
        placeholder="Enter a number"
        className="game-input"
        min="1"
        max="100"
        disabled={gameOver}
      />
      <button onClick={handleGuess} className="game-button" disabled={gameOver}>
        Guess
      </button>
      <button onClick={handleReplay} className="game-button">
        Replay
      </button>
    </div>
  );
}

