import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project-1.jpg";
import projImg3 from "../assets/img/Project-3.jpg";
import webtutor from "../assets/img/Web_Tutor.png";
import automated from "../assets/img/Dbms_Project.jpg";
import asl_web from "../assets/img/ASL_Web.jpg";
import react_game from "../assets/img/tic-tac.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "EV-Charging",
      description:
        "Developed an interactive website using R programming to help users find EV Charging stations in India using Kaggle Dataset having the coordinates of the chargers",
      imgUrl: projImg1,
      githubUrl: "https://github.com/John-C7/EV-Charging-Stations",
    },
    {
      title: "React Mutiplayer Game",
      description:
        "Developed a react multiplayer game for Tic-Tac-Toe by using Socket-IO connections",
      imgUrl: react_game,
      githubUrl: "https://github.com/John-C7/Multiplayer-React-Game-1",
    },
    {
      title: "Automated-Attendance",
      description:
        "Face-Recognition based system for adding students attendance, using React, Nodejs and Mysql on AWS RDS",
      imgUrl: automated,
      githubUrl: "https://github.com/John-C7/Automated-Attendance",
    },
    {
      title: "Gramma Yojana Suchane",
      description:
        "Contributed to the development of the Farmers website for providing information about the Gram Panchayats and to keep farmers updated about the lastest government schemes and news",
      imgUrl: projImg3,
      githubUrl: "https://github.com/John-C7/grama-yojane-suchana",
    },
    {
      title: "Web-Tutor",
      description:
        "Online Learning Platform built for one-on-one tutoring , which secured price in The best report generation category in Enigma Hackathon in JIT",
      imgUrl: webtutor,
      githubUrl: "https://github.com/John-C7/Web-Tutor",
    },
    {
      title: "ASL-Web",
      description:
        "Worked on building the web part of the ASL Detection platform using Mediapipe's Model for hand landmark detection which ouptuts a set of coordinates ,which secured First Place the Hack-a-League in Global Academy of Technology",
      imgUrl: asl_web,
      githubUrl: "https://github.com/H4cktivists/asl-web",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    List of various Projects, Hackathons , and Techical Events .
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Technical Events</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <p>
                            <h4>
                              Won 1st Price in Hack-A-League a 24 hours
                              Hackathon organized in Global Academy of
                              Technology.
                            </h4>
                            <br />
                            <h4>
                              Secured 3rd Place in IISc Open Tech Hunt, a
                              Cybersecurity and Encryption event conducted by
                              IISC Bangalore in February 2024.
                            </h4>
                            <br />
                            <h4>
                              Co-organized and Hosted CTF Catputure the Flag , a
                              Cybersecurity Event in DSATM , which had over 50
                              participants.
                            </h4>
                            <br />
                            <h4>
                              Secured price for the domain "Best Report
                              Generation" in Enigma a 24 hour Hackathon
                              conducted by Jyothi Institude of Technology.
                            </h4>
                            <br />
                            <h4>
                              Won 1st and 2nd place in Quiz competitions
                              conducted in DSATM and MS Ramiah College
                              respectively.
                            </h4>
                          </p>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-full" src={""} alt="Image"></img> */}
    </section>
  );
};
