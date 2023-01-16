import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import useDeleteUser from "../hooks/useDeleteUser";
import useLogout from "../hooks/useLogout";

// pkg to format date
import { DateTime } from "luxon";

const Stats = () => {
    const { user } = useAuthContext();
    const { deleteUser } = useDeleteUser();
    const { logout } = useLogout();
    const [data, setData] = useState(null);
    const [warning, setWarning] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("api/user/stats", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();
            setData(json);
            setIsLoading(false);
        };
        fetchData();
    }, [user.token]);

    const handleClick = async () => {
        if (!warning) {
            setWarning(true);
        } else {
            setWarning(false);
        }
    };

    const confirmClick = async () => {
        deleteUser();
        logout();
    };

    const [darkMode, setDarkMode] = useState(false);

    const bodyClasses = document.body.classList.item(0);

    useEffect(() => {
        if (bodyClasses === "dark-mode") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    });

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
                {warning && (
                    <div
                        className={darkMode ? ".dark-mode warning" : "warning"}
                    >
                        <h5>
                            WARNING: This action is irreversible! Please confirm
                            account deletion.
                        </h5>
                        <div className="options">
                            <button
                                className="btn confirm-btn"
                                onClick={confirmClick}
                            >
                                Confirm
                            </button>
                            <button
                                className="btn cancel-btn"
                                onClick={handleClick}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        return null;
    }
};

export default Stats;
