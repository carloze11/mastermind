import Slot from "../components/Slot";
import Marbles from "../components/Marbles";
import { useIntAPI } from "../hooks/useIntAPI";
import { useState, useEffect } from "react";

const Mastermind = () => {
    const [group, setGroup] = useState(10);
    const [slot, setSlot] = useState(0);
    const [value, setValue] = useState("");
    const [win, setWin] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const { fetchData, data, isLoading } = useIntAPI();

    // rerun fetchData if numbers are not unique
    const ensureUniqueData = (str) => {
        return new Set(str).size === str.length;
    };

    // start the game and fetch initial API data
    const playGame = async () => {
        setIsDisabled(false);

        if (!isLoading) {
            await fetchData();
        }
    };

    useEffect(() => {
        if (data) {
            if (!ensureUniqueData(data)) {
                playGame();
            }
        }
    }, [data]);

    // create answer column with api data
    useEffect(() => {
        if (data) {
            console.log(data);
            let answerColumn = document.getElementById(`group-0`);
            let answerSlots = answerColumn.querySelectorAll(".large-marble");
            answerSlots.forEach((slot, i) => {
                let marble = document.getElementById(data[i]);
                slot.className = `large-marble ${marble.classList.item(1)}`;
            });
        }
    }, [data]);

    // provide feedback
    const provideFeedback = () => {
        const valueArr = value.split("");
        const correctPos = valueArr.filter((num, i) => num === data[i]).length;

        const correctColor = valueArr.filter(
            (num, i) => data.includes(num) && num !== data[i]
        ).length;

        const incorrect = valueArr.filter((num) => !data.includes(num)).length;

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
            } else {
                return (slot.className = "small-marble incorrect");
            }
        });
    };

    // remove hidden class from marbles after each guess
    const removeHidden = () => {
        for (let i = 1; i < 9; i++) {
            document.getElementById(`${i}`).classList.remove("hidden");
        }
        return;
    };

    // handle marble positions on board
    const handleClick = (e) => {
        e.target.classList.add("hidden");
        setValue(value + e.target.id);
        let currentGroup = document.getElementById(`group-${group}`);
        let currentSlot = currentGroup.querySelector(`#slot-${slot}`);
        currentSlot.className = `large-marble ${e.target.classList.item(1)}`;

        // move onto next slot
        setSlot(slot + 1);
    };

    // Check for win after every 4 entries &&
    // reset marble slot and position after each guess
    useEffect(() => {
        if (value.length >= 4) {
            provideFeedback();
            removeHidden();
            setSlot(0);
            setGroup(group - 1);
            console.log(`Guess: ${value}`);

            if (value === data) {
                console.log("You win!");
                setWin(true);
                setIsVisible(true);
                setIsDisabled(true);
            }
            setValue("");
        }
        // reset positions after last attempt and display play again
        if (group === 1 && slot === 4) {
            console.log(`you lose: ${data}`);
            provideFeedback();
            setGroup(10);
            setSlot(0);
            setIsVisible(true);
            setIsDisabled(true);
        }
    }, [value]);

    // Reset the board when game ends
    const playAgain = async () => {
        setIsVisible(false);
        setIsDisabled(false);
        setGroup(10);
        setSlot(0);
        const allMarbles = document.querySelectorAll(".large-marble");
        allMarbles.forEach((marble) => {
            marble.className = `large-marble`;
        });
        const allSmallMarbles = document.querySelectorAll(".small-marble");
        allSmallMarbles.forEach(
            (marble) => (marble.className = "small-marble")
        );

        if (!isLoading) {
            await fetchData();
        }

        removeHidden();
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
                <div className="board">
                    <div className="slot-container">{slots}</div>
                    <Marbles
                        data={data}
                        handleClick={handleClick}
                        isDisabled={isDisabled}
                    />
                </div>
                {isVisible && (
                    <button className="play-game" onClick={playAgain}>
                        Play Again?
                    </button>
                )}
            </div>
            <button className="play-game" onClick={playGame}>
                Play
            </button>
        </>
    );
};

export default Mastermind;
