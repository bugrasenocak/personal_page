import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
class Social extends Component {
  render() {
    return (
      <div className="container social text-center">
        <h1>You can feel free to contact me from these accounts</h1>
        <div className="mt-5">
          <a href="https://www.linkedin.com/in/yigiterbugra/">
            <FaIcons.FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ahmetbugrayigiter/">
            <FaIcons.FaInstagram />
          </a>

          <a href="https://twitter.com/yigiterdev">
            <FaIcons.FaTwitter />
          </a>

          <a href="https://github.com/yigiterdev">
            <FaIcons.FaGithub />
          </a>
          <a href="mailto:yigiterahmetbugra@gmail.com">
            <FaIcons.FaEnvelope />
          </a>
        </div>
      </div>
    );
  }
}
export default Social;
