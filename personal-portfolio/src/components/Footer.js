import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer  mt-5">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h2>Vox System</h2>
            <h6>Head Office:</h6>
            <p>#2b, Jeeva street, TVS TollGate, Trichy-20</p>
            <h6>Branch Office:</h6>
            <p>No-1004,1st Floor,30th Main,Nursery road,Poornaprajna nagar, Uttrahalli,Subramaniyapura, Bangalore-560061</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/quick-postrichy/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/people/Quick-POS/100075954615431/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/quick_pos/?__coig_restricted=1"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
