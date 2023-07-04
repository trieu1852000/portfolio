import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import morganStanley from "../assets/img/ctg.gif"
import comming from "../assets/img/comming.jpg"
import fitness from "../assets/img/fit.gif"
import ecommerce from "../assets/img/ecommerce.gif"
import tideGuard from "../assets/img/tideGuard.gif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import swamHack from "../assets/img/swamhack.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Morgan Stanley Hackathon",
      description: "Design & Development a route website",
      imgUrl: morganStanley,
    },
    {
      title: "Fitness App",
      description: "Design & Development a mobile app for fitness.",
      imgUrl: fitness,
    },
    {
      title: "Hackabull 2023, Red Tire Scanner",
      description: "Design & Development a mobile app aimed at predicting red tide occurrences based on environmental factors and historical data.",
      imgUrl: tideGuard,
    },
    {
      title: "SwamHack 2023, Advanture Roulette",
      description: "Design & Development an app that takes in the user's location and generates a place that is nearby to allow them to try out and explore possibilities.",
      imgUrl: swamHack,
    },
    {
      title: "Business Startup",
      description: "Design & Development a e-commerce website toy store.",
      imgUrl: ecommerce,
    },
    {
      title: "It will comming sooon",
      description: "I'm doing it",
      imgUrl: comming,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
