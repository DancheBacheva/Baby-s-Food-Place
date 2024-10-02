import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CreateAccountPage } from "./pages/CreateAccountPage/CreateAccountPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { AllRecipes } from "./components/AllRecipes/AllRecipes";
import { Route, Routes } from "react-router-dom";
import { MyProfilePage } from "./pages/MyProfilePage/MyProfilePage";
import { MyRecipes } from "./components/MyRecipes/MyRecipes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
        <Route path="/recipes/:type" element={<AllRecipes />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
