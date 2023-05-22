import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  margin-top: 20px;
  animation: updown 4s linear infinite;

`;

const About = () => {
  return (
    <div>
      <Container>
        <Heading>About Us</Heading>
        <Text>Vox System is a startup web development company that offers innovative solutions to businesses seeking to establish a strong online presence. The company is focused on creating unique, customized websites that are user-friendly and easy to navigate. With a team of skilled developers, designers, and project managers, Vox System strives to deliver high-quality web development services that meet the needs and expectations of its clients. The company uses the latest technologies and best practices to create websites that are responsive, scalable, and secure. Vox System's mission is to help businesses of all sizes reach their full potential by providing them with the tools and resources they need to succeed in the digital world. The company believes that a well-designed website is essential for building brand awareness, engaging with customers, and driving sales. The company's services include web design, web development, e-commerce solutions, content management systems, and mobile application development. Vox System also provides digital marketing services, such as search engine optimization, social media management, and email marketing. Vox System is committed to delivering exceptional customer service and support. The company works closely with its clients to understand their goals and objectives and develops a customized strategy that aligns with their business needs. As a startup, Vox System is constantly exploring new opportunities and technologies to improve its services and stay ahead of the competition. The company is focused on building long-term relationships with its clients and delivering measurable results that help them achieve their business objectives.</Text>
      </Container>
    </div>
  );
}

export default About;
