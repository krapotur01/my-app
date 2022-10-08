import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = (props) => {
  // debugger

  return (
    <div className="page">
      <Header />
      <Main store={props.store} />
      <Footer />
    </div>
  );
};

export default App;
