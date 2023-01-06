import { useEffect } from "react";

export default function Countdown({ time, setTime }) {
    useEffect(() => {
        if (time > 0) {
            const interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [time, setTime]);

    const mins = Math.floor(time / 60)
        .toString()
        .padStart(1, "0");
    const seconds = (time % 60).toString().padStart(2, "0");

    return (
        <div className={time <= 15 ? "time times-up" : "time"}>
            Time: {mins}:{seconds}
        </div>
    );
}
