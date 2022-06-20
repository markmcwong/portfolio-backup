import '!file-loader?name=[name].[ext]!../../images/Staplev2.png';
import '!file-loader?name=[name].[ext]!../../images/TimeliNUS.png';
import '!file-loader?name=[name].[ext]!../../images/Riverrv2.png';
import '!file-loader?name=[name].[ext]!../../images/radio.png';
import '!file-loader?name=[name].[ext]!../../images/jobfinder.png';
import '!file-loader?name=[name].[ext]!../../images/cloudcraft.png';
import '!file-loader?name=[name].[ext]!../../images/Shopeev2.png';
import '!file-loader?name=[name].[ext]!../../images/Matchub.png';
import '!file-loader?name=[name].[ext]!../../images/matchub-model.png';
import '!file-loader?name=[name].[ext]!../../images/numpy.png';
import '!file-loader?name=[name].[ext]!../../images/pandas.ico';
import '!file-loader?name=[name].[ext]!../../images/pyspark.png';
import '!file-loader?name=[name].[ext]!../../images/scikit-learn.png';
import '!file-loader?name=[name].[ext]!../../images/flask.png';
import '!file-loader?name=[name].[ext]!../../images/Tensorflow.svg';
import '!file-loader?name=[name].[ext]!../../images/sql.svg';
import '!file-loader?name=[name].[ext]!../../images/apollo.svg';
import '!file-loader?name=[name].[ext]!../../images/graphql.png';
import '!file-loader?name=[name].[ext]!../../images/figma.png';
import '!file-loader?name=[name].[ext]!../../images/react.png';
import '!file-loader?name=[name].[ext]!../../images/mongodb.png';

import { motion, useAnimation } from 'framer-motion';

import { Icon } from '@iconify/react';
import React from 'react';
import Section from './Section';
import Title from 'components/Title';
import apachesparkIcon from '@iconify/icons-simple-icons/apachespark';
import apollographqlIcon from '@iconify/icons-simple-icons/apollographql';
import codecovIcon from '@iconify/icons-simple-icons/codecov';
import dartIcon from '@iconify/icons-simple-icons/dart';
import dockerIcon from '@iconify/icons-simple-icons/docker';
import figmaIcon from '@iconify/icons-simple-icons/figma';
import firebaseIcon from '@iconify/icons-simple-icons/firebase';
import flaskIcon from '@iconify/icons-simple-icons/flask';
import flutterIcon from '@iconify/icons-simple-icons/flutter';
import graphqlIcon from '@iconify/icons-simple-icons/graphql';
import jenkinsIcon from '@iconify/icons-simple-icons/jenkins';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import numpyIcon from '@iconify/icons-simple-icons/numpy';
import pandasIcon from '@iconify/icons-simple-icons/pandas';
import postgresqlIcon from '@iconify/icons-simple-icons/postgresql';
import reactIcon from '@iconify/icons-simple-icons/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import scikitlearnIcon from '@iconify/icons-simple-icons/scikitlearn';
import stripeIcon from '@iconify/icons-simple-icons/stripe';
import styled from 'styled-components';
import tensorflowIcon from '@iconify/icons-simple-icons/tensorflow';
import travisciIcon from '@iconify/icons-simple-icons/travisci';

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

const content = [
  {
    title: 'Shopee',
    content: [
      'Create python scripts to perform data aggregation and processing from raw data order records with Pyspark, SQL and Pandas',
      "Develop models in Python to conduct demand forecasting for the E-commerce platform's selling products using historical data",
      'Upgraded and Migrated the SQL queries on current Python scripts to using the new systems',
    ],
    img: 'Shopeev2.png',
    job:
      'Data Analyst,\nRegional Business Development Intern\n\nMay 2022 - Aug 2022',
    skills: ['Spark', 'Pandas', 'SQL'],
    skills_icon: [apachesparkIcon, pandasIcon, postgresqlIcon],
  },
  {
    title: 'MatcHub',
    content: [
      'Developed Machine Learning models on predicting soft skills requirement from job descriptions using Scikit-Learn and TensorFlow, achieving accuracy over 85% with the best performing model on classifying characteristics.',
      'Utilised Pandas, NLTK, NumPy for data pre-processing on CSVs, and exploratory data analysis with Seaborn and Matplotlib.',
      'Implemented a Python Flask application to serve data and Machine Learning models as API endpoints',
    ],
    img: 'matchub-model.png',
    job: 'Machine Learning & Data Engineering Intern\n\nAug 2021 - May 2022',
    skills: ['Scikit-Learn', 'Flask', 'Numpy', 'Pandas', 'Tensorflow'],
    skills_icon: [
      scikitlearnIcon,
      flaskIcon,
      numpyIcon,
      pandasIcon,
      tensorflowIcon,
    ],
  },
  {
    title: 'Riverr',
    content: [
      'Built highly available API for data analytics dashboard and admin portal with Mongoose, Apollo and GraphQL.',
      'Designed analytics dashboard with Figma and developed in React, Redux and Recharts to display usage statistics for >100 clinics.',
      'Redesigned admin portal with Figma and implemented new features such as drag-and-drop upload using React and Redux.',
    ],
    img: 'Riverrv2.png',
    job: 'Frontend Developer Intern\n\nMay 2021 - Aug 2021',
    skills: ['React', 'Redux', 'MongoDB', 'Apollo', 'GraphQL', 'Figma'],
    skills_icon: [
      reactIcon,
      reduxIcon,
      mongodbIcon,
      apollographqlIcon,
      graphqlIcon,
      figmaIcon,
    ],
  },
  {
    title: 'Staple',
    content: [
      'Utilized Stripe, React, Redux and GraphQL with Apollo for building the website’s subscription and billing page.',
      'Implemented a Docker Jenkins server from scratch for Cl/CD pipeline for automated quality assurance.',
      'Collaborated with teams in India and Vietnam using Scrum Agile Methodology and participated in daily stand-ups.',
    ],
    img: 'Staplev2.png',
    job: 'Web Development Intern\n\nDec 2020 - Jan 2021',
    skills: [
      'React',
      'Redux',
      'Apollo',
      'GraphQL',
      'Docker',
      'Jenkins',
      'Stripe',
    ],
    skills_icon: [
      reactIcon,
      reduxIcon,
      apollographqlIcon,
      graphqlIcon,
      dockerIcon,
      jenkinsIcon,
      stripeIcon,
    ],
  },

  {
    title: 'Orbital\nProject',
    content: [
      'Developed an app using Flutter that allows users to manage projects, todos and schedule, with Firebase as the backend for storing data and authentication',
      'Setup a CI-CD system with Github and Travis CI + Codecov',
    ],
    img: 'TimeliNUS.png',
    job: 'Artemis Level\n(Highest)\n\nMay 2021 - Aug 2021',
    skills: ['Flutter', 'Firebase', 'Dart', 'TravisCI', 'Codecov'],
    skills_icon: [
      flutterIcon,
      firebaseIcon,
      dartIcon,
      travisciIcon,
      codecovIcon,
    ],
  },
];

const PortfolioSection = () => (
  <div id="portfolio">
    <h1 className="portfolio-pagetitle">Experiences</h1>
    <h6 className="portfolio-subtitle">(Hover image for more details)</h6>
    <About className="portfolio-column">
      {content.map(item => (
        <div className="portfolio-item">
          <div className="portfolio-image">
            <img
              className="portfolio"
              alt={item.title}
              src={item.img}
              data-aos="fade-up"
            />
            <div className="img__description">
              {item.content.map(t => (
                <li>{t}</li>
              ))}
              <div className="portfolio-icons">
                {/* {item.skills &&
                  item.skills.map(t => (
                    <img
                      alt={t}
                      width="auto"
                      height={50}
                      src={t}
                      // style={{ marginRight: '10px' }}
                    />
                  ))} */}
                {item.skills_icon &&
                  item.skills_icon.map((t, i) => (
                    <div className="tooltip whatsapp">
                      <span className="tooltipText wa">
                        {item.skills && item.skills[i]}
                      </span>
                      <Icon
                        icon={t}
                        className="portfolio-mapped-icon"
                        style={{
                          width: 'auto',
                          height: 50,
                          marginRight: '10px',
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="portfolio-text"
          >
            <a className="portfolio-title">{item.title}</a>
            <a className="portfolio-job">{item.job}</a>
          </div>
        </div>
      ))}
    </About>
  </div>
);

export default PortfolioSection;
