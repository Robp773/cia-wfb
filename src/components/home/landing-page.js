import React from "react";
import SearchInput from "./search-input";
import bgVideo from "../../media/landing-bg.mp4";
import axios from "axios";
import { API_BASE_URL } from "../../config";

export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.handleCountrySelect = this.handleCountrySelect.bind(this);
  }

  handleCountrySelect(e) {
    console.log(`${API_BASE_URL}/country/${e.currentTarget.innerHTML.toLowerCase()}`)
    axios.get(`${API_BASE_URL}/country/${e.currentTarget.innerHTML}`).then((res)=>{
      console.log(res)
    })
  }

  render() {
    return (
      <div className="landing-page">
        <video
          className="landing-page__bg-video"
          width="100%"
          autoPlay
          loop
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="landing-page__search-wrapper">
          <h1>Countries of the World</h1>
          <SearchInput handleCountrySelect={this.handleCountrySelect} />
        </div>
      </div>
    );
  }
}
