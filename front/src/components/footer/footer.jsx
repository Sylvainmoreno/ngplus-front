import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../../css/Footer.css';
import Kefka from '../../images/kefka.gif';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">New Game Plus</h5>
            <p className="present">
              Le site où tout le monde peut recommencer sa vie de gamer.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Liens</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Liens d'affiliation</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            <img className="Kefka" src={Kefka} alt="" />
          &copy; {new Date().getFullYear()} Copyright: <a href="/">New Game Plus</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;