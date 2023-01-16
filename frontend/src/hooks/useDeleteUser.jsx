import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

const useDeleteUser = () => {
    const { user } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const deleteUser = async () => {
        const response = fetch("api/user/delete-user", {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
                body: JSON.stringify({ user }),
            },
        });

        if (!response.ok) {
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    return { deleteUser, isLoading, error };
};

export default useDeleteUser;
