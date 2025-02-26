import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import rikalogo from "../assets/img/logo.jpg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={10} sm={5}>
            {/* <img src={rikalogo} alt="Logo" className="footerlogo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mararika-piseth-03155b353"><img src={navIcon1} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/maa_rika69?igsh=anJrdmJlNmV5MGpu&utm_source=qr"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© 2025 Piseth Mararika. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
