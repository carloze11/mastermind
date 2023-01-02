import Slot from "../components/Slot";
import Marbles from "../components/Marbles";
import { useState } from "react";

const Mastermind = () => {
    const [group, setGroup] = useState(10);
    const [slot, setSlot] = useState(0);

    // create the guessing slots
    const slots = [];
    for (let i = 0; i < 11; i++) {
        slots.push(<Slot id={`group-${i}`} key={i} />);
    }

    const handleClick = (e) => {
        console.log(e.target.id);
        let currentGroup = document.getElementById(`group-${group}`);
        console.log(currentGroup);
        let currentSlot = currentGroup.querySelector(`#slot-${slot}`);
        console.log(currentSlot);
        currentSlot.className = `large-marble ${e.target.classList.item(1)}`;

        console.log(group);
        setSlot(slot + 1);
        if (slot === 3) {
            setSlot(0);
            setGroup(group - 1);
        }
        console.log(slot);
    };

    return (
        <>
            <h1 className="game-title">Mastermind</h1>
            <div className="game-container">
                <div className="board">
                    <div className="slot-container">{slots}</div>
                    <Marbles handleClick={handleClick} />
                </div>
            </div>
        </>
    );
};

export default Mastermind;
