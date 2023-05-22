// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import axios from "axios"
// import { useState,useEffect } from "react";
// export const Projects = (props) => {
//   const [userProfiles, setUserProfiles] = useState([]);
//   // const {setOption, setProfile}=props

//   useEffect(() => {
//     axios
//       .get('http://localhost:4000/api/api/user-profiles')
//       .then((res) => {
//         const userProfiles = res.data;
//         setUserProfiles(userProfiles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   var projects = []

//   userProfiles.map((p)=>{
//     projects.push({ _id:p._id,profileImg:p.profileImg,title:p.title,desc:p.desc,githublink:p.githublink })
//   })


//   return (
//     <section className="project" id="project">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Our web development projects are designed to provide an immersive user experience, leveraging the latest trends in design and technology. From responsive websites to custom web applications, our portfolio showcases a diverse range of solutions that cater to the unique needs of our clients. We prioritize creating clean, maintainable code and ensuring optimal performance and scalability for every project we undertake.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard style={{ height: "250px", width: "300px" }}
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/api/user-profiles')
      .then((res) => {
        const userProfiles = res.data;
        setUserProfiles(userProfiles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredProjects = userProfiles.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  ).map((p) => ({
    _id: p._id,
    profileImg: p.profileImg,
    title: p.title,
    desc: p.desc,
    githublink: p.githublink
  }));


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Projects</h2>
                <p>Our web development projects are designed to provide an immersive user experience, leveraging the latest trends in design and technology. From responsive websites to custom web applications, our portfolio showcases a diverse range of solutions that cater to the unique needs of our clients. We prioritize creating clean, maintainable code and ensuring optimal performance and scalability for every project we undertake.</p>
                <Form>
  <Form.Group controlId="filterInput" style={{ marginBottom: "1rem" }} className="text-center">
    <Form.Label style={{ marginRight: "0.5rem" }}>Filter by title:</Form.Label>
    <Form.Control type="text" placeholder="Enter filter value" value={filter} onChange={(e) => setFilter(e.target.value)} style={{ width: "300px", display: "block", margin: "0 auto" }} />
  </Form.Group>
</Form>
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
                          filteredProjects.map((project, index) => {
                            return (
                              <ProjectCard style={{ height: "250px", width: "300px" }}
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                       <p>Stay updated for our new projects!..</p>
                    </Tab.Pane>
                     <Tab.Pane eventKey="third">
                      <p>New clients are approaching...</p>
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

  )}