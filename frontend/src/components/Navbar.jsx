import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const handleClick = () => {
        logout();
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
                            <span>{user.email}</span>
                            <button>Stats</button>
                            <button
                                className="logout-btn"
                                onClick={handleClick}
                            >
                                Log out
                            </button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <button>
                                <Link to="/login">Login</Link>
                            </button>
                            <button>
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
