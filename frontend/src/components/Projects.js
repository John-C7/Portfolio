import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project-1.png";
// import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/Project-3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "EV-Charging",
      description:
        "Developed an interactive website using R programming to help users find EV Charging stations in India",
      imgUrl: projImg1,
      githubUrl: "https://github.com/example/ev-charging",
    },
    {
      title: "React Mutiplayer Game",
      description: "Developed a react multiplayer game for Tic-Tac-Toe ",
      imgUrl: projImg1,
      githubUrl: "https://github.com/example/ev-charging",
    },
    {
      title: "Gramma Yojana Suchane",
      description:
        "Contributed to the development of the Farmers website for providing information about the Gram Panchayats and to keep farmers updated about the lastest government schemes and news",
      imgUrl: projImg3,
      githubUrl: "https://github.com/John-C7/grama-yojane-suchana",
    },
    {
      title: "EV-Charging",
      description:
        "Developed an interactive website using R programming to help users find EV Charging stations in India",
      imgUrl: projImg1,
      githubUrl: "https://github.com/example/ev-charging",
    },
    {
      title: "React Mutiplayer Game",
      description: "Developed a react multiplayer game for Tic-Tac-Toe ",
      imgUrl: projImg1,
      githubUrl: "https://github.com/example/ev-charging",
    },
    {
      title: "Gramma Yojana Suchane",
      description:
        "Contributed to the development of the Farmers website for providing information about the Gram Panchayats and to keep farmers updated about the lastest government schemes and news",
      imgUrl: projImg3,
      githubUrl: "https://github.com/example/ev-charging",
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
                        <Nav.Link eventKey="second">Hackathons</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Technical Events</Nav.Link>
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
                      <Tab.Pane eventKey="section">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
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
      <img className="background-image-right" src={""} alt="Image"></img>
    </section>
  );
};
