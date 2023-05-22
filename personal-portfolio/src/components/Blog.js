import React from 'react';
import styled from 'styled-components';

const Blog = () => {
  return (
    <Wrapper>
      <Title>Latest News from Vox System</Title>
      <PostContainer>
        <Post>
          <Content>
            <Date>May 1, 2023</Date>
            <Heading color="#28a745">Introducing Our New E-Commerce Solution</Heading>
            <Text color="#333">We're excited to announce our new e-commerce solution! With our latest offering, you can now easily set up and manage your online store, from product listings to payment processing. Check out our post to learn more.</Text>
            <ReadMore href="#">Read More</ReadMore>
          </Content>
        </Post>
        <Post>
          <Content>
            <Date>April 15, 2023</Date>
            <Heading color="#007bff">The Importance of Responsive Web Design</Heading>
            <Text color="#333">As more and more users access websites on a variety of devices, it's essential to create sites that adapt to different screen sizes and orientations. Responsive design ensures a consistent user experience and improves accessibility.</Text>
            <ReadMore href="#">Read More</ReadMore>
          </Content>
        </Post>
        <Post>
          <Content>
            <Date>April 1, 2023</Date>
            <Heading color="#28a745">The Benefits of Social Media Marketing</Heading>
            <Text color="#333">Social media marketing can help businesses build brand awareness, engage with customers, and drive sales. By leveraging the power of social media platforms can connect with their target audience and establish a loyal following. </Text>
            <ReadMore href="#">Read More</ReadMore>
          </Content>
        </Post>
      </PostContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  animation: updown 10s linear infinite;
  
`;

const Post = styled.div`
  width: 32%;
  height: 400px;
  margin-bottom: 50px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 48%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 20px;
  background-color: transparent;
  height: 100%;
`;

const Date = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${props => props.color};
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ReadMore =styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0062cc;
  }
`;

export default Blog;
