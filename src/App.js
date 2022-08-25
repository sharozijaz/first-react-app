import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.page";
import AboutPage from "./pages/about/about.page";
import Account from "./pages/account/account.page";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signUp" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default App;
