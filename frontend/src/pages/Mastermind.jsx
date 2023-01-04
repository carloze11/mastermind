import Slot from "../components/Slot";
import Marbles from "../components/Marbles";
import { useIntAPI } from "../hooks/useIntAPI";
import { useState, useEffect } from "react";

const Mastermind = () => {
    const [group, setGroup] = useState(10);
    const [slot, setSlot] = useState(0);
    const [value, setValue] = useState("");
    const [color, setColor] = useState("");
    const [win, setWin] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const { fetchData, data, isLoading } = useIntAPI();

    // start the game and fetch initial API data
    const playGame = async () => {
        setIsDisabled(false);

        if (!isLoading) {
            await fetchData();
        }
    };

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

    // Reset the board when out of guesses or player wins
    const playAgain = async () => {
        const allMarbles = document.querySelectorAll(".large-marble");
        allMarbles.forEach((marble) => {
            marble.className = `large-marble`;
        });
        if (!isLoading) {
            await fetchData();
        }
        setIsVisible(false);
        setIsDisabled(false);
    };

    // provide feedback
    const provideFeedback = () => {
        const valueArr = value.split("");

        const correctPos = valueArr.filter((num, i) => num === data[i]).length;
        console.log(`Number of correct colors in correct pos: ${correctPos}`);

        const correctColor = valueArr.filter(
            (num, i) => data.includes(num) && num !== data[i]
        ).length;
        console.log(`Number of correct color in wrong pos: ${correctColor}`);

        const incorrect = valueArr.filter((num) => !data.includes(num)).length;
        console.log(`Number of incorrect marbles: ${incorrect}`);

        let feedbackGroup = document.getElementById(`group-${group}`);
        let feedbackSlots = feedbackGroup.querySelectorAll(".small-marble");

        // randomly select feedback slots for the above variables
        // for now will just go in order
        feedbackSlots.forEach((slot, i) => {
            if (slot.id[slot.id.length - 1] < correctPos) {
                return (slot.className = "small-marble correct-pos");
            } else if (slot.id[slot.id.length - 1] < correctColor) {
                return (slot.className = "small-marble correct-color");
            } else {
                return (slot.className = "small-marble incorrect");
            }
        });
    };

    // Check for win after every 4 entries
    useEffect(() => {
        if (value.length >= 4) {
            console.log(`Guess: ${value}`);

            if (value === data) {
                console.log("You win!");
                setWin(true);
            } else {
                console.log(`you lose: ${data}`);
            }
            setValue("");
        }
    }, [value]);

    useEffect(() => {});

    // handle marble positions on board
    const handleClick = (e) => {
        setValue(value + e.target.id);
        setColor(e.target.classList.item(1));
        let currentGroup = document.getElementById(`group-${group}`);
        let currentSlot = currentGroup.querySelector(`#slot-${slot}`);
        currentSlot.className = `large-marble ${e.target.classList.item(1)}`;

        // move onto next slot
        setSlot(slot + 1);

        // reset positions
        if (group === 1 && slot === 3) {
            setGroup(10);
            setSlot(0);
            setIsVisible(true);
            setIsDisabled(true);
        }

        // reset marble slot and position
        if (slot === 3 && group !== 1) {
            provideFeedback();
            setSlot(0);
            setGroup(group - 1);
        }
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
