import { useEffect } from "react";
import { useState } from "react";

const GameRules = ({ viewGameRules }) => {
    const [darkMode, setDarkMode] = useState(false);

    const bodyClasses = document.body.classList.item(0);

    useEffect(() => {
        if (bodyClasses === "dark-mode") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    });
    return (
        <div className={darkMode ? "dark-mode game-rules" : "game-rules"}>
            <h1>Game Rules</h1>
            <ul>
                <li>To start the game, click "Play Game"</li>
                <li>
                    The game will randomly place four colored marbles into the
                    first column, colors hidden and duplicates allowed.
                </li>
                <li>
                    Click on a marble to place a guess, but&nbsp;
                    <strong>beware</strong> as there are no take-backs!
                </li>
                <li>
                    Once you have entered all four guesses, the game will
                    determine whether you guessed correctly or not.
                </li>
                <li>If you guessed correctly, CONGRATS! YOU WIN!</li>
                <li>
                    If not, no worries! The game is kind enough to provide you
                    some feedback as follows:
                </li>
                <ul>
                    <li>
                        <div className="rules-black-marble"></div> marbles
                        indicate that you place a correct marble in the&nbsp;
                        <strong>correct</strong> position.
                    </li>
                    <li>
                        {/* White marbles&nbsp; */}
                        <div className="rules-white-marble"></div> marbles
                        indicate that you placed a correct marble in the&nbsp;
                        <strong>wrong</strong> position.
                    </li>
                </ul>
                <li>
                    You have a total of ten guesses (or until time runs out!) to
                    break the code before the game ends.
                </li>
                <li>Good luck!</li>
            </ul>
            <button className="btn" onClick={viewGameRules}>
                Close
            </button>
        </div>
    );
};

export default GameRules;
