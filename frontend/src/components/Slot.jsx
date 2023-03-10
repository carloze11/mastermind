const Slot = ({ id }) => {
    // create slots for guesses
    const largeMarbleSlots = [];
    for (let i = 0; i < 4; i++) {
        largeMarbleSlots.push(
            <div key={i} className="large-hole hole" id={`slot-${i}`}></div>
        );
    }

    // create slots for feedback
    const smallMarbleSlots = [];
    for (let i = 1; i < 5; i++) {
        smallMarbleSlots.push(
            <div key={i} className="small-marble" id={`feedback-${i}`}></div>
        );
    }

    return (
        <div className="slot" id={`${id}`}>
            <div className="guess-slot">{largeMarbleSlots}</div>
            <div className="feedback-slot">{smallMarbleSlots}</div>
        </div>
    );
};

export default Slot;
