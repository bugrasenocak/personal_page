import React from "react";
import * as FaIcons from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer container text-center p-4">
      <div className="col-md-12">
        <p>
          This Page created with{" "}
          <FaIcons.FaReact className="footer-icons mx-2" /> and{" "}
          <FaIcons.FaBootstrap className="footer-icons mx-2" /> by yigiterdev
        </p>
      </div>
    </footer>
  );
}
export default Footer;
