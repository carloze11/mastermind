import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import Mastermind from "./pages/Mastermind";
import Stats from "./pages/Stats";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
    const { user } = useAuthContext();
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={user ? <Home /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/mastermind"
                        element={
                            user ? <Mastermind /> : <Navigate to="/login" />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            !user ? <Login /> : <Navigate to="/mastermind" />
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            !user ? <Signup /> : <Navigate to="/mastermind" />
                        }
                    />
                    <Route
                        path="/stats"
                        element={user ? <Stats /> : <Navigate to="/login" />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
