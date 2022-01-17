import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="footersection bg-dark">
        <div className="row col-12 text-light py-3">
          <div className="col-4">
            <h6 className="mx-5 py-2">Get In Touch</h6>
            <div>
              <FontAwesomeIcon className="mx-4" icon={faPhoneSquare} />  01119410240
            </div>
            <div>
              <FontAwesomeIcon className="mx-4" icon={faEnvelope} /> 
                sashsadel7@gmail.com
            </div>
          </div>
          <div className="col-4 text-center py-4">
          <button type="button" className="btn btn-outline-light btn-lg">Contact Me</button>
          </div>
          <div className="col-4 text-end py-3">
            <div>
                <FontAwesomeIcon className="m-2" icon={faFacebook} />
                <FontAwesomeIcon className="m-2" icon={faTwitter} />
                <FontAwesomeIcon className="m-2" icon={faLinkedin} />
              </div>
              <p>CopyRight © 2022 Reserved</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
