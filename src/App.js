import React from "react";
import { connect } from 'react-redux';
import "./App.css"; 
import { initializeApp } from './redux/app-reducer';
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from "./components/common/Preloader/Preloader";

 class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="page">
        <HeaderContainer />
        <Main />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp}) (App);
