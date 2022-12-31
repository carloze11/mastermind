export const useLogout = () => {
    const logout = () => {
        // remove user from local storage
        localStorage.removeItem("user");
    };

    return { logout };
};
