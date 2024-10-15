import { HomePage } from "./pages/homePage/home";
import { LoginPage } from "./pages/loginPage/login";
import { RegisterPage } from "./pages/registerPage/register";
import { SupportPage } from "./pages/supportPage/support";
// AboutusPage

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/support" element={<SupportPage />}></Route>
            </Routes>
        </Router>
    );
}