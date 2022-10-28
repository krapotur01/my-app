import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="page">
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
