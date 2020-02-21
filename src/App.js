import React from "react";
import LandingPage from "./components/home/landing-page";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: "Home",
    };
  }

  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}
