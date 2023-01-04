const Marbles = ({ handleClick, isDisabled }) => {
    const colors = [
        "",
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

    for (let i = 1; i < 9; i++) {
        marbles.push(
            <div
                className={`marble ${colors[i]}-marble`}
                id={`${i}`}
                disabled={isDisabled}
                key={i}
                onClick={isDisabled ? null : handleClick}
            ></div>
        );
    }

    return <div className="marble-container">{marbles}</div>;
};

export default Marbles;
