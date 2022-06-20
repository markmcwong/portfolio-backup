import '!file-loader?name=[name].[ext]!../../images/me.jpeg';
import '!file-loader?name=[name].[ext]!../../images/me.jpg';

import { Icon } from '@iconify/react';
import React from 'react';
import Section from './Section';
import Title from 'components/Title';
import githubIcon from '@iconify/icons-simple-icons/github';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
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
          I was born in Hong Kong and spent my childhood year there, then grew
          up in UAE and now studying in Singapore! <br />
          For the last few years, I've worked for different sizes of data
          science and web/app projects, both remotely and in office environment.
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
            <a style={{ whiteSpace: 'pre-line' }}>
              {
                'Building and Integrating Apps with AWS Services\nincluding Lambda, S3, DynamoDB, AppSync, Textract, etc'
              }
            </a>
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
            <a style={{ whiteSpace: 'pre-line' }}>
              {
                'Creating devOps pipelines using \ne.g. Travis-CI, Jenkins+Docker, AWS Amplify'
              }
            </a>
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
            <a>Mobile App Development in React Native & Flutter</a>
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
            <a>UI/UX Design with Figma, Sketch & Photoshop</a>
          </div>
        </div>
      </div>
      <div className="column">
        <img
          style={{ borderRadius: '50%', width: '25vw', margin: 'auto' }}
          src="me.jpeg"
          border="0"
          alt=""
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '50%',
            alignSelf: 'center',
          }}
        >
          <Icon
            onClick={() => window.open('https://linkedin.com/in/markmcwong')}
            icon={linkedinIcon}
            height={75}
            style={{ margin: '25px' }}
          />
          <Icon
            onClick={() => window.open('https://github.com/markmcwong')}
            icon={githubIcon}
            height={75}
            style={{ margin: '25px' }}
          />
        </div>
      </div>
    </About>
  );
};

export default AboutSection;
