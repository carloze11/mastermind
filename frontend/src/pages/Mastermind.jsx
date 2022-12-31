import Slot from "../components/Slot";
import Marbles from "../components/Marbles";

const Mastermind = () => {
    return (
        <>
            <h1 className="game-title">Mastermind</h1>
            <div className="game-container">
                <div className="board">
                    <div className="slot-container">
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                        <Slot />
                    </div>
                    <Marbles />
                </div>
            </div>
        </>
    );
};

export default Mastermind;
