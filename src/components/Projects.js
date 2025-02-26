import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import sellbike from "../assets/img/bikepro.jpg";
import weather from "../assets/img/weather.jpg";
import fairy from "../assets/img/fairy.jpg";
import mini from "../assets/img/mini.jpg";
import agromarket from "../assets/img/agro.jpg";
import surveyform from "../assets/img/survey.jpg";
import kshpj from "../assets/img/ksh.jpg";
import roadmap from "../assets/img/roadmap.jpg";
import mart from "../assets/img/mart.jpg";
import hulkgym from "../assets/img/hulkgym.jpg";
import football from "../assets/img/football.jpg";
import payment from "../assets/img/payment.jpg";
import agriculture from "../assets/img/agriculture.jpg";

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Website",
      description: "Selling Bikecycle",
      imgUrl: sellbike,
    },
    {
      title: "Agency Website",
      description: "For daily weather viewing",
      imgUrl: weather,
    },
    {
      title: "Fairy Tales",
      description: "Fot the children listen the fairy tale",
      imgUrl: fairy,
    },
    {
      title: "Minimal Blog",
      description: "Sharing information about trend technology",
      imgUrl: mini,
    },
    
  ];

  const projects1 = [
    {
      title: "E-commerce Website",
      description: "Selling the Agriculture product",
      imgUrl: agromarket,
    },
    {
      title: "Survey Form",
      description: "For work on survey from students",
      imgUrl: surveyform,
    },
    {
      title: "KSH Management System",
      description: "For control the students daily activities",
      imgUrl: kshpj,
    },
    {
      title: "Payment System",
      description: "Develop Point of Sale Web Based System for Efficient Mart Management",
      imgUrl: mart,
    },
   
  ];

  const projects2 = [
    {
      title: "Telegram Bot",
      description: "Launching The Hulk Gym: Innovative Membership Registration",
      imgUrl: hulkgym,
    },
    {
      title: "Website and CMS for Football Club",
      description: "To show all the information about the match day",
      imgUrl: football,
    },
    {
      title: "E-commerce Website",
      description: "Payment Processing online",
      imgUrl: payment,
    },
    {
      title: "Admin dashboard",
      description: "Develop an agriculture admin dashboard",
      imgUrl: agriculture,
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
                <p>These are all the projects I did while studying at PSE-Institute.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project1, index1) => {
                            return (
                              <ProjectCard
                                key={index1}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects2.map((projects2, index2) => {
                            return (
                              <ProjectCard
                                key={index2}
                                {...projects2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    </Tab.Content>
                    </Tab.Content>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
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
