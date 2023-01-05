import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useUpdateStats = () => {
    const { user } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const addResult = async (result) => {
        setError(null);
        setIsLoading(true);

        const response = await fetch("/user/update-stats", {
            method: "POST",
            body: JSON.stringify({ result }),
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        setIsLoading(false);
    };

    return { addResult };
};
