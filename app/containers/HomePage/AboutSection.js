import '!file-loader?name=[name].[ext]!../../images/me.jpeg';
import '!file-loader?name=[name].[ext]!../../images/me.jpg';

import React from 'react';
import Section from './Section';
import Title from 'components/Title';
import styled from 'styled-components';

const About = styled(Section)`
  text-align: center;
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 !important;
  .column {
    height: 100%;
    flex: 1;
    justify-items: center;
    padding: 5vw;
  }
  p {
    text-align: left;
    br {
      content: ' ';
      display: block;
      margin: 15px 0;
    }
  }
`;

const AboutSection = () => {
  return (
    <About className="aboutSection" id="about">
      <div className="column">
        <Title
          className="title"
          style={{
            fontWeight: 600,
            color: 'Black',
            fontSize: '64px',
            textAlign: 'left',
            marginLeft: 0,
          }}
        >
          MORE ABOUT ME!
        </Title>
        <p style={{ fontFamily: 'Open Sans', fontSize: 24, fontWeight: 300 }}>
          I was born in Hong Kong, grew up in UAE and now studying in Singapore!{' '}
          <br />
          For the last few years, I've worked for different sizes of web
          projects using React + Redux, both remotely and in office environment.
          <br /> With experience also in:
        </p>
        <div className="aboutSection__experience">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontFamily: 'Open Sans',
              fontSize: 24,
              fontWeight: 300,
              textAlign: 'left',
            }}
          >
            <div className="promise-number">1</div>
            <a>Using GraphQL with React + Redux</a>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontFamily: 'Open Sans',
              fontSize: 24,
              paddingTop: '15px',
              fontWeight: 300,
              textAlign: 'left',
            }}
          >
            <div className="promise-number">2</div>
            <a>Deploying CI-CD systems (with Travis-CI, Jenkins)</a>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontFamily: 'Open Sans',
              fontSize: 24,
              paddingTop: '15px',
              fontWeight: 300,
              textAlign: 'left',
            }}
          >
            <div className="promise-number">3</div>
            <a>Developing mobile app in React Native and Flutter</a>
          </div>
          <div
            style={{
              alignItems: 'flex-start',
              fontFamily: 'Open Sans',
              fontSize: 24,
              paddingTop: '15px',
              fontWeight: 300,
              textAlign: 'left',
            }}
          >
            <div className="promise-number">4</div>
            <a>
              Designing user interfaces for mobile and web apps, with Figma,
              Sketch and Photoshop
            </a>
          </div>
        </div>
      </div>
      <div className="column">
        <img
          style={{ borderRadius: '50%', width: '25vw' }}
          src="me.jpg"
          border="0"
          alt=""
        />
      </div>
    </About>
  );
};

export default AboutSection;
