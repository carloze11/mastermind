import Slot from "../components/Slot";
import Marbles from "../components/Marbles";
import { useIntAPI } from "../hooks/useIntAPI";
import { useState } from "react";

const Mastermind = () => {
    const [group, setGroup] = useState(10);
    const [slot, setSlot] = useState(0);
    const [value, setValue] = useState("");
    const [color, setColor] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const { fetchData, data, isLoading } = useIntAPI();

    // start the game and fetch API data
    const playGame = async () => {
        if (!isLoading) {
            await fetchData();
            console.log("Data:", data);
        }
        if (data) {
            let answerColumn = document.getElementById(`group-0`);
            let answerSlots = answerColumn.querySelectorAll(".large-marble");
            answerSlots.forEach((slot, i) => {
                let marble = document.getElementById(data[i]);
                slot.className = `large-marble ${marble.classList.item(1)}`;
                console.log(marble.classList.item(1));
                console.log(slot.classList);
            });
        }
    };

    // create slots for marbles
    const slots = [];
    for (let i = 0; i < 11; i++) {
        slots.push(<Slot id={`group-${i}`} key={i} />);
    }

    const playAgain = async () => {
        const allMarbles = document.querySelectorAll(".large-marble");
        allMarbles.forEach((marble) => {
            marble.className = `large-marble`;
        });
        if (!isLoading) {
            await fetchData();
            console.log("Data:", data);
        }
        setIsVisible(false);
        setIsDisabled(false);
    };

    // set marbles on board
    const handleClick = (e) => {
        setValue(e.target.id);
        setColor(e.target.classList.item(1));
        console.log(color);
        let currentGroup = document.getElementById(`group-${group}`);
        let currentSlot = currentGroup.querySelector(`#slot-${slot}`);
        currentSlot.className = `large-marble ${e.target.classList.item(1)}`;

        // move onto next slot
        setSlot(slot + 1);

        // reset board
        if (group === 1 && slot === 3) {
            setGroup(10);
            setSlot(0);
            setIsVisible(true);
            setIsDisabled(true);
        }

        // reset marble slot and position
        if (slot === 3 && group !== 1) {
            setSlot(0);
            setGroup(group - 1);
        }
    };

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
