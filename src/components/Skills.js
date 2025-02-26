import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import htmlpic from "../assets/img/html.png";
import csspic from "../assets/img/css.jpg";
import jspic from "../assets/img/js.jpg";
import tspic from "../assets/img/ts.png";
import pgadminpic from "../assets/img/pgadmin.webp";
import githubpic from "../assets/img/github.webp";
import trellopic from "../assets/img/trello.png";
import figmapic from "../assets/img/figma.png";
import postmanpic from "../assets/img/postman.png";
import mysql from "../assets/img/sql.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have learned and can work with various web development technologies</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlpic} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={csspic} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={jspic} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={pgadminpic} alt="Image" />
                                <h5>pgAdmin</h5>
                            </div>
                            <div className="item">
                                <img src={githubpic} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={trellopic} alt="Image" />
                                <h5>Trello</h5>
                            </div>
                            <div className="item">
                                <img src={figmapic} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={postmanpic} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL Workbench</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
