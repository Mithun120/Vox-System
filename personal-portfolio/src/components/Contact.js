import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";
export const Contact = () => {
  const [formData, setFormData] = useState({
    fname:"",
    lname:"",
    from: "",
    phone: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:4000/api/email/",
        formData
      );
      console.log(res.data);
      setFormData({
        fname:"",
        lname:"",
        from: "",
        phone: "",
        text: "",
      });
      alert("Your message has been sent!");
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <section className="contact mt-5" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input
          type="text"
          name="fname"
          id="fname"
          value={formData.fname}
          placeholder="First Name"
          onChange={handleChange}
          required
        />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input
          type="text"
          name="lname"
          id="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                    <input
          type="email"
          name="from"
          id="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="Email"
          required
        />                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />                    </Col>
                    <Col size={12} className="px-1">
                    <textarea
          name="text"
          id="text"
          placeholder="Message"

          value={formData.text}
          onChange={handleChange}
          required
        />                      <button type="submit">Send</button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                  {/* <button type="submit" style={{ marginLeft: "15px", padding: "5px 10px", borderRadius: "5px", border: "none", backgroundColor: "#4CAF50", color: "white" }}>Send</button> */}

                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
