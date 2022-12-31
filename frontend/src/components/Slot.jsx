const Slot = () => {
    const handleClick = () => {};

    return (
        <div className="slot">
            <div className="guess-slot">
                <div className="large-marble" onClick={handleClick}></div>
                <div className="large-marble" onClick={handleClick}></div>
                <div className="large-marble" onClick={handleClick}></div>
                <div className="large-marble" onClick={handleClick}></div>
            </div>
            <div className="feedback-slot">
                <div className="small-marble"></div>
                <div className="small-marble"></div>
                <div className="small-marble"></div>
                <div className="small-marble"></div>
            </div>
        </div>
    );
};

export default Slot;
