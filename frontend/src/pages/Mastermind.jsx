import { useState, useEffect } from "react";
import { useCallback } from "react";

// hooks
import { useIntAPI } from "../hooks/useIntAPI";
import { useUpdateStats } from "../hooks/useUpdateStats";

// components
import Slot from "../components/Slot";
import Marbles from "../components/Marbles";
import GameRules from "../components/GameRules";
import Countdown from "../components/Countdown";

const Mastermind = () => {
    // game state
    const [group, setGroup] = useState(10);
    const [slot, setSlot] = useState(0);
    const [value, setValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [showReset, setShowReset] = useState(false);
    const [showGameRules, setShowGameRules] = useState(false);
    const [showTimeAndGuess, setShowTimeAndGuess] = useState(false);
    const [time, setTime] = useState(null);
    const [guesses, setGuesses] = useState(10);
    const [winner, setWinner] = useState(null);

    // destructuring hooks
    const { fetchData, data, isLoading } = useIntAPI();
    const { addResult } = useUpdateStats();

    // display game rules
    const viewGameRules = () => {
        if (!showGameRules) {
            setShowGameRules(true);
        } else {
            setShowGameRules(false);
        }
    };

    //**************************************/
    // ENABLING THIS CODE REMOVES DUPLICATES
    //**************************************/
    // rerun fetchData if numbers are not unique
    // const ensureUniqueData = (str) => {
    //     return new Set(str).size === str.length;
    // };

    // hide api code on start
    const hideCode = () => {
        let answerColumn = document.getElementById(`group-0`);
        let answerSlots = answerColumn.querySelectorAll(".large-hole");
        answerSlots.forEach((slot, i) => {
            let marble = document.getElementById(data[i]);
            slot.className = `hole ${marble.classList.item(1)} blackout`;
        });
    };

    // show api code in win or loss
    const showCode = () => {
        let answerColumn = document.getElementById(`group-0`);
        let answerSlots = answerColumn.querySelectorAll(".large-hole");
        answerSlots.forEach((slot, i) => {
            slot.classList.remove("blackout");
        });
    };

    // start the game and fetch initial API data
    const playGame = useCallback(async () => {
        setShowReset(true);
        setIsDisabled(false);
        setTime(300);
        setShowTimeAndGuess(true);

        if (!isLoading) {
            await fetchData();
        }
    }, [fetchData, isLoading]);

    //**************************************/
    // ENABLING THIS CODE REMOVES DUPLICATES
    //**************************************/
    // rerun api if data is not unique
    // useEffect(() => {
    //     if (data) {
    //         if (!ensureUniqueData(data)) {
    //             playGame();
    //         }
    //     }
    // }, [data]);

    // create answer column with api data
    useEffect(() => {
        if (data) {
            hideCode();
        }
    }, [data]);

    // show the answer in console log for debug
    useEffect(() => {
        if (data) {
            console.log(`Secret Code: ${data}`);
        }
    }, [data]);

    // provide feedback
    const provideFeedback = () => {
        const correctPos = value
            .split("")
            .filter((num, i) => num === data[i]).length;
        const correctColor = value
            .split("")
            .filter((num, i) => data.includes(num) && num !== data[i]).length;

        console.log(
            `${
                correctPos + correctColor
            } correct number(s) and ${correctPos} correct location(s)`
        );

        let feedbackGroup = document.getElementById(`group-${group}`);
        let feedbackSlots = feedbackGroup.querySelectorAll(".small-marble");

        // set classes for styling feedback
        feedbackSlots.forEach((slot, i) => {
            if (slot.id[slot.id.length - 1] <= correctPos) {
                return (slot.className = "small-marble correct-pos");
            } else if (
                slot.id[slot.id.length - 1] <=
                correctColor + correctPos
            ) {
                return (slot.className = "small-marble correct-color");
            }
        });
    };

    //**************************************/
    // ENABLING THIS CODE REMOVES DUPLICATES
    //**************************************/
    // remove hidden class from marbles after each guess
    // const removeHidden = () => {
    //     for (let i = 1; i < 9; i++) {
    //         document.getElementById(`${i}`).classList.remove("hidden");
    //     }
    //     return;
    // };

    // handle marble positions on board
    const handleClick = (e) => {
        // e.target.classList.add("hidden"); ***ENABLING THIS CODE REMOVES DUPLICATES***
        setValue(value + e.target.id);
        let currentGroup = document.getElementById(`group-${group}`);
        let currentSlot = currentGroup.querySelector(`#slot-${slot}`);
        currentSlot.className = `hole ${e.target.classList.item(1)}`;

        // move onto next slot
        setSlot(slot + 1);
    };

    // Check for win after every 4 entries &&
    // reset marble slot and position after each guess
    useEffect(() => {
        if (value.length >= 4) {
            provideFeedback();
            // removeHidden(); ***ENABLING THIS CODE REMOVES DUPLICATES***
            setSlot(0);
            setGroup(group - 1);
            setGuesses(guesses - 1);
            console.log(`Guess: ${value}`);
            console.log(`Guesses left: ${guesses - 1}`);

            if (value === data) {
                // confetti here
                setWinner(true);
                setTime(300);
                addResult("win");
                showCode();
                console.log("You win!");
                setIsVisible(true);
                setIsDisabled(true);
            }
            setValue("");
        }

        // reset positions after last guess and display play again
        if ((group === 1 && slot === 4 && value !== data) || time === 0) {
            addResult("loss");
            showCode();
            console.log(`you lose: ${data}`);
            provideFeedback();
            setTime(0);
            setIsVisible(true);
            setIsDisabled(true);
        }
    }, [value, time]);

    // Reset the board when game ends
    const playAgain = async () => {
        setIsVisible(false);
        setIsDisabled(false);
        setWinner(null);
        setTime(300);
        setGuesses(10);
        setGroup(10);
        setSlot(0);
        setValue("");
        const allMarbles = document.querySelectorAll(".hole");
        allMarbles.forEach((marble) => {
            marble.className = `large-hole`;
        });
        const allSmallMarbles = document.querySelectorAll(".small-marble");
        allSmallMarbles.forEach(
            (marble) => (marble.className = "small-marble")
        );

        if (!isLoading) {
            await fetchData();
        }

        // removeHidden(); ***ENABLING THIS CODE REMOVES DUPLICATES***
    };

    // render slots for marbles
    const slots = [];
    for (let i = 0; i < 11; i++) {
        slots.push(<Slot id={`group-${i}`} key={i} />);
    }

    return (
        <>
            <h1 className="game-title">Mastermind</h1>
            <div className="game-container">
                <div className="play-rules">
                    <div>
                        {!showReset ? (
                            <button
                                className="play-game btn"
                                onClick={playGame}
                            >
                                Play
                            </button>
                        ) : (
                            <button
                                className="play-game btn"
                                onClick={playAgain}
                            >
                                Reset
                            </button>
                        )}
                        <button
                            className="how-to-btn btn"
                            onClick={viewGameRules}
                        >
                            Rules
                        </button>
                    </div>
                </div>
                {showGameRules && <GameRules viewGameRules={viewGameRules} />}
                <div className="board">
                    {showTimeAndGuess ? (
                        <div className="time-guess">
                            <Countdown time={time} setTime={setTime} />
                            <div className="guesses">Guesses: {guesses}</div>
                        </div>
                    ) : (
                        <div className="time-guess">
                            Press&nbsp;<u>Play</u>&nbsp;to Begin
                        </div>
                    )}
                    <div className="slot-container">{slots}</div>
                    <Marbles
                        data={data}
                        handleClick={handleClick}
                        isDisabled={isDisabled}
                    />
                </div>
                {isVisible ? (
                    winner ? (
                        <button className="play-again btn" onClick={playAgain}>
                            You win! <br /> Play Again?
                        </button>
                    ) : (
                        <button className="play-again btn" onClick={playAgain}>
                            You lose. <br /> Try Again?
                        </button>
                    )
                ) : null}
            </div>
        </>
    );
};

export default Mastermind;
