import "./App.css";
import Footer from "./components/Footer/Footer";
import { FreshAndNew } from "./components/Fresh&New/FreshAndNew";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <>
      <Header />
      <Title title="Fresh & New" />
      <FreshAndNew />
      <Title title="Most Popular Recipes" />
      <Footer />
    </>
  );
}

export default App;
