import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import fullimage from "../assets/img/banner-bg2.png";
import bottomimg from "../assets/img/banner-bg1.png";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["MERN Stack Developer", "AI Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    const handleScroll = () => {
      const bottomImg = document.querySelector(".parallax-bottom");
      const topImg = document.querySelector(".parallax-top");
      if (bottomImg && topImg) {
        const scrollY = window.scrollY || window.pageYOffset;
        bottomImg.style.transform = `scale(${1 + scrollY * 0.00025})`;
        topImg.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div
        className="parallax parallax-bottom"
        style={{
          backgroundImage: `url(${bottomimg})`,
          transform: `scale(1)`,
        }}
      ></div>
      <div
        className="parallax parallax-top"
        style={{
          backgroundImage: `url(${fullimage})`,
          transform: `translateY(${window.scrollY * 0.15}px)`,
        }}
      ></div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome!</span>
                  <h1>{`Hello, I'm John Charles`} </h1>
                  <h2>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "MERN Stack Developer", "AI Enthusiast" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <br />
                  <p className="description">
                    <h4>
                      CSE Student at Dayananda Sagar Academy of Technology and
                      Management.
                    </h4>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Row>
      </Container>
    </section>
  );
};
