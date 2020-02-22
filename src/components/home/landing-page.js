import React from "react";
import SearchInput from "./search-input";
import bgVideo from "../../media/landing-bg.mp4";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <video className="landing-page__bg-video"  width="100%" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="landing-page__search-wrapper">
          <h1>Countries of the World</h1>
          <SearchInput />
        </div>
      </div>
    );
  }
}
