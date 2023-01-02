import Slot from "../components/Slot";
import Marbles from "../components/Marbles";
import { useState } from "react";

const Mastermind = () => {
    const [group, setGroup] = useState(10);
    const [slot, setSlot] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    // create slots for marbles
    const slots = [];
    for (let i = 0; i < 11; i++) {
        slots.push(<Slot id={`group-${i}`} key={i} />);
    }

    const playAgain = () => {
        const allMarbles = document.querySelectorAll(".large-marble");
        allMarbles.forEach((marble) => {
            marble.className = `large-marble`;
        });
        setIsVisible(false);
        setIsDisabled(false);
    };

    // set marbles on board
    const handleClick = (e) => {
        console.log(e.target.id);
        let currentGroup = document.getElementById(`group-${group}`);
        let currentSlot = currentGroup.querySelector(`#slot-${slot}`);
        currentSlot.className = `large-marble ${e.target.classList.item(1)}`;

        // move onto next slot
        setSlot(slot + 1);

        // reset board
        if (group === 0 && slot === 3) {
            setGroup(10);
            setSlot(0);
            setIsVisible(true);
            setIsDisabled(true);
        }

        // reset marble slot and position
        if (slot === 3 && group !== 0) {
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
                    <button className="play-again" onClick={playAgain}>
                        Play Again?
                    </button>
                )}
            </div>
        </>
    );
};

export default Mastermind;
