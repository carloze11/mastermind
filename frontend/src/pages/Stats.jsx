import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// pkg to format date
import { DateTime } from "luxon";

const Stats = () => {
    const { user } = useAuthContext();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/user/stats", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();
            setData(json);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const handleClick = async () => {
        const response = await fetch("/user/delete", {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
    };

    if (!isLoading) {
        const { email, wins, losses, joined } = data;
        const joinedDate = DateTime.fromISO(joined);
        const formattedDate = joinedDate.toFormat("MMMM dd, yyyy");

        return (
            <div className="stats">
                <div>
                    <div>Email: {email}</div>
                    <div>Joined: {formattedDate}</div>
                    <div>Wins: {wins}</div>
                    <div>Losses: {losses}</div>
                </div>
                <button className="btn delete-btn" onClick={handleClick}>
                    Delete Account
                </button>
            </div>
        );
    } else {
        return null;
    }
};

export default Stats;
