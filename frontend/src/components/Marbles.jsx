const Marbles = ({ handleClick }) => {
    const colors = [
        "red",
        "purple",
        "green",
        "yellow",
        "blue",
        "orange",
        "pink",
        "light-green",
    ];

    const marbles = [];

    for (let i = 0; i < 8; i++) {
        marbles.push(
            <div
                onClick={handleClick}
                className={`marble ${colors[i]}-marble`}
                id={`marble-${i}`}
            ></div>
        );
    }

    return <div className="marble-container">{marbles}</div>;
};

export default Marbles;
