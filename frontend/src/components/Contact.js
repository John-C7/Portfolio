import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={5} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={5} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <br />
                  <br />
                  <span className="contacts-text">
                    <div className="hexagon-container">
                      <div className="hexagon-icon">
                        <a href="https://linkedin.com/in/john-charles-jt">
                          <img
                            className="logo-container"
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"
                            alt="John-charles-jt"
                          />
                        </a>
                      </div>
                      <div className="hexagon-icon">
                        <a href="https://github.com/John-C7">
                          <img
                            className="logo-container"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                            alt="Github: John-C7"
                          />
                        </a>
                      </div>
                      <div className="hexagon-icon">
                        <a href="https://www.leetcode.com/johnc8">
                          <img
                            className="logo-container"
                            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                            alt="Johnc8"
                          />
                        </a>
                      </div>
                      <div className="hexagon-icon">
                        <a href="https://www.instagram.com/john_charles003/">
                          <img
                            className="logo-container"
                            src="https://img.icons8.com/fluency/48/instagram-new.png"
                            alt="instagram-new"
                          />
                        </a>
                      </div>
                      <div className="hexagon-icon">
                        <a href="https://www.kaggle.com/johnc710">
                          <img
                            className="logo-container"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original-wordmark.svg"
                            alt="Johnc8"
                          />
                        </a>
                      </div>
                      <div className="hexagon-icon">
                        <a href="https://codepen.io/John-Charles-the-scripter">
                          <img
                            className="logo-container"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codepen/codepen-original-wordmark.svg"
                            alt="Johnc8"
                          />
                        </a>
                      </div>
                    </div>
                  </span>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
