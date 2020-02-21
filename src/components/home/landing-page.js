import React from "react";
import SearchInput from "./search-input";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div className='landing-page__search-wrapper'>
          <SearchInput />
        </div>
      </div>
    );
  }
}
