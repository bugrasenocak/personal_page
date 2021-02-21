import React, { Component } from "react";
import { Timeline, Follow } from "react-twitter-widgets";

class Twitter extends Component {
  render() {
    return (
      <div className="twitter-page container mr-auto ml-auto">
        <h1>Twitter Timeline</h1>
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "yigiterdev" }}
          options={{ theme: "dark", width: "1000", height: "600" }}
        />
        <Follow username="yigiterdev" options={{ size: "large" }} />
      </div>
    );
  }
}
export default Twitter;
