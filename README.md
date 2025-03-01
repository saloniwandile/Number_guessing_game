# 🎯 Number Guessing Game  

A simple and interactive number guessing game built with **React**. The objective is to guess a randomly generated number between **1 and 10**, with feedback provided on whether the guess is **warmer** (closer) or **colder** (further).  

---

## 🚀 Features  
✅ Generates a **random number** between 1 and 10.  
✅ Provides real-time feedback on how close or far the guess is.  
✅ Displays hints like **"Warmer"** or **"Colder"** for better guessing.  
✅ Option to **replay the game** after a correct guess.  

---

## 📁 Project Structure  
```
/src
│── App.js          # Main entry point that renders the game
│── guessNum.js     # Contains the game logic and user interactions
│── NumberGuessGame.css  # Styling for the game
```

### **App.js (Main Component)**
This is the root component that renders the **NumberGuessingGame** component.  

```jsx
import NumberGuessingGame from "./guessNum.js";

function App() {
  return (
    <div className="App">
      <NumberGuessingGame />
    </div>
  );
}

export default App;
```

### **guessNum.js (Game Logic)**
Handles:  
✔ **State Management** (random number, user input, feedback).  
✔ **Game Logic** (evaluating guesses, providing hints).  
✔ **Replay Option** (reset the game after a correct guess).  

---

## 🛠 Installation & Setup  

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/number-guess-game.git
cd number-guess-game
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Run the Application**
```sh
npm start
```
The app will be available at **http://localhost:3000** in your browser.  

---

## 🎮 How to Play  
1️⃣ The game selects a **random number** between **1 and 10**.  
2️⃣ Enter your guess in the input field and click **"Guess"**.  
3️⃣ The game provides feedback:  
   - **🔥 "Warmer!"** → Getting closer!  
   - **❄️ "Colder!"** → Moving away!  
   - **⬆️ "Try a higher number"** / **⬇️ "Try a lower number"**  
4️⃣ **Win the game!** 🎉  
5️⃣ Click **"Replay"** to start a new game.  

---

## 📜 License  
This project is open-source and available under the **MIT License**.  

---
