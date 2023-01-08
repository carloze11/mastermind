import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// darkmode icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const handleClick = () => {
        logout();
    };

    const changeTheme = () => {
        if (!darkMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
        document.body.classList.toggle("dark-mode");
    };
    return (
        <header>
            <div className="container">
                <Link to="/mastermind">
                    <h1>Mastermind</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            {/* <span>{user.email}</span> */}
                            <button className="icon" onClick={changeTheme}>
                                <FontAwesomeIcon
                                    icon={darkMode ? faSun : faMoon}
                                />
                            </button>
                            <button className="btn">
                                <Link to="/stats">Stats</Link>
                            </button>
                            <button className="btn" onClick={handleClick}>
                                Log out
                            </button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <button className="icon" onClick={changeTheme}>
                                <FontAwesomeIcon
                                    icon={darkMode ? faSun : faMoon}
                                />
                            </button>
                            <button className="btn">
                                <Link to="/login">Login</Link>
                            </button>
                            <button className="btn">
                                <Link to="/signup">Signup</Link>
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
