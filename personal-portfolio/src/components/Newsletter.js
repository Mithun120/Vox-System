import { useState, useEffect,useRef } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
export const Newsletter = ({ status, message, onValidated }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x72uel8",
        "template_9d4464n",
        form.current,
        "cXL3h5JHP30j0Jdnh"
      )
      .then(() => {
        alert('Mail sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        alert('Oops! Something went wrong.');
      });
  };
  
  

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="new-email-bx">
                  <input  type="email" name="user_email" placeholder="Email Address" />
                  <button type="submit" vaule="send">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
