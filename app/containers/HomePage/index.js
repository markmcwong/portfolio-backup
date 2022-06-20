/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import '!file-loader?name=[name].[ext]!../../images/Staple.png';
import '!file-loader?name=[name].[ext]!../../images/TimeliNUS.png';
import '!file-loader?name=[name].[ext]!../../images/Riverr.png';
import '!file-loader?name=[name].[ext]!../../images/radio.png';
import '!file-loader?name=[name].[ext]!../../images/jobfinder.png';
import '!file-loader?name=[name].[ext]!../../images/cloudcraft.png';
import './index.scss';

import React, { memo, useEffect } from 'react';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'containers/App/selectors';

import AboutSection from './AboutSection';
import BackgroundText from './backgroundText';
import CenteredSection from './CenteredSection';
import DesktopScreen from './DesktopScreen';
import ExampleSection from './ExampleSection';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H3 from 'components/H3';
import { Helmet } from 'react-helmet';
import Img from 'components/Img';
import PortfolioSection from './PortfolioSection';
import PropTypes from 'prop-types';
import Title from 'components/Title';
import WorkSection from './WorkSection';
import { changeUsername } from './actions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadRepos } from '../App/actions';
import { makeSelectUsername } from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>Mark Wong</title>
        <meta
          name="description"
          content="Computer Science Student studying in Singapore"
        />
      </Helmet>
      <div>
        <CenteredSection className="section">
          <BackgroundText>Mark Wong</BackgroundText>
          <div data-aos="fade" data-aos-delay="500" data-aos-duration="1500">
            <H2 className="welcomeSection__me">
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <Title className="welcomeSection__title">
              <FormattedMessage {...messages.startProjectMessage} />
            </Title>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="3000"
            data-aos-duration="1500"
            style={{
              position: 'absolute',
              bottom: '10vh',
            }}
          >
            <Title
              style={{
                fontFamiily: 'Open Sans',
                color: 'white',
                fontWeight: '300',
                fontSize: '30px',
                textAlign: 'left',
                whiteSpace: 'pre-line',
                cursor: 'pointer',
              }}
              onClick={() => (location.hash = '#work')}
            >
              <i class="arrow" />
            </Title>
          </div>
        </CenteredSection>
        <WorkSection
          style={{ backgroundColor: '#3498db' }}
          className="section"
          id="work"
        >
          <div
            style={{
              flex: 2,
              textAlign: 'left',
              gap: '15px',
              display: 'flex',
              flexDirection: 'column',
              paddingRight: '3vw',
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Title
              style={{
                color: 'white',
                fontSize: '80px',
                margin: 0,
                textAlign: 'left',
                fontFamily: 'Cormorant, Helvetica, sans-serif',
                fontWeight: 600,
                lineHeight: '64px',
              }}
              className="title"
            >
              <FormattedMessage {...messages.trymeHeader} />
            </Title>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: 'white',
                fontWeight: '300',
                fontSize: '30px',
                textAlign: 'left',
                whiteSpace: 'pre-line',
                maxWidth: '40vw',
              }}
              className="workSection__title"
            >
              <FormattedMessage {...messages.trymeMessage} />
            </p>

            <a
              style={{
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'underlined',
                color: 'white',
                fontWeight: '600',
                fontSize: '30px',
                textAlign: 'left',
                whiteSpace: 'pre-line',
                borderBottom: '2px solid #FFF',
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}
              onClick={() => (location.hash = '#about')}
            >
              More about me <i class="arrow-right" />
            </a>
          </div>
          <div
            style={{
              height: '100%',
              flex: 2,
              display: 'flex',
              alignItems: 'center',
              background: 'linear-gradient(90deg, rgb(52, 152, 219) 100%)',
              padding: '7.5vw',
            }}
            className="workSection__background"
          >
            <DesktopScreen isVisible={true} />
          </div>
        </WorkSection>
        <PortfolioSection />
        {/* <ExampleSection>
          <div className="gridbox">
            <img
              style={{
                flexGrow: 1,
              }}
              src="Riverr.png"
            />
            <div
              className="gridbox-overlay"
              style={{ background: 'rgba(169, 219, 255, 0.96)' }}
            >
              <Title className="gridbox-overlay__title">
                Internship - Riverr
              </Title>
              <h3
                style={{
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  textAlign: 'left',
                }}
              >
                <li>
                  <a>
                    Redesigned the company's admin portal using Figma and
                    implemented using React + Redux and MongoDB
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Implemented Elastic Search over existing Firebase database
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Created a data analytics dashboard with visualisations with
                    React + GraphQL
                  </a>
                </li>
              </h3>
            </div>
          </div>
          <div
            className="gridbox"
            style={{
              alignSelf: 'stretch',
              alignItems: 'center',
              backgroundColor: 'rgb(250, 225, 195)',
            }}
          >
            <img
              src="TimeliNUS.png"
              style={{
                alignSelf: 'stretch',
                objectFit: 'cover',
              }}
            />
            <div
              className="gridbox-overlay"
              style={{ background: 'rgba(255, 153, 0, 0.8)' }}
            >
              <Title className="gridbox-overlay__title">
                TimeliNUS <br /> Orbital Project
              </Title>
              <h3
                style={{
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  textAlign: 'left',
                  opacity: 0.76,
                }}
              >
                <li>
                  <a>
                    Developed an{' '}
                    <a href="https://github.com/TimeliNUS/TimeliNUS-flutter-app">
                      app
                    </a>{' '}
                    using Flutter that allows users to manage projects, todos
                    and schedule, with Firebase as the backend for storing data
                    and authentication
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Setup a CI-CD system with Github and Travis CI + Codecov
                  </a>
                </li>
              </h3>
            </div>
          </div>
          <div
            className="gridbox"
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              backgroundColor: '#f7f7f7',
            }}
          >
            <img
              src="radio.png"
              style={{
                objectFit: 'contain',
                objectPosition: 'left',
                flex: 1,
                paddingLeft: '2.5vw',
                filter: 'drop-shadow(1px -10px 20px rgba(0, 0, 0, 0.1))',
              }}
            />
            <div
              className="gridbox-overlay"
              style={{ background: 'rgba(200, 200, 200, 0.975)' }}
            >
              <Title className="gridbox-overlay__title">Student Club</Title>
              <h3
                style={{
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  textAlign: 'left',
                }}
              >
                <li>
                  <a>
                    Developed the{' '}
                    <a href="https://radio.su.ust.hk/aboutus">website</a> with
                    Gatsby, React and GraphQL
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Designed the interface and animation with Sketch and
                    implemented using Framer Motion
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Make website's content to be generated from Markdown file
                    for non-technical members to update easily
                  </a>
                </li>
              </h3>
            </div>
          </div>
          <div
            className="gridbox"
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#D3FFD8',
            }}
          >
            <img
              src="jobfinder.png"
              style={{
                objectFit: 'contain',
                objectPosition: 'right',
                flex: 1,
                paddingRight: '2.5vw',
                filter: 'drop-shadow(1px -10px 100px rgba(0, 0, 0, 0.2))',
              }}
            />
            <div
              className="gridbox-overlay"
              style={{ background: 'rgba(152, 245, 162, 0.94)' }}
            >
              <Title className="gridbox-overlay__title">
                Freelance - JobFinder
              </Title>
              <h3
                style={{
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  textAlign: 'left',
                }}
              >
                <li>
                  <a>
                    Redesigned and Implemented the new design for{' '}
                    <a href="https://jobfinder.com.hk">current website</a>
                  </a>
                </li>
                <br />
              </h3>
            </div>
          </div>
          <div className="gridbox">
            <img
              style={{
                flex: 1,
              }}
              src="Staple.png"
            />
            <div
              className="gridbox-overlay"
              style={{ background: 'rgba(217, 217, 255, 0.9)' }}
            >
              <Title className="gridbox-overlay__title">
                Internship - Staple.io
              </Title>
              <h3
                style={{
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  textAlign: 'left',
                }}
              >
                <li>
                  <a>
                    Developed the <a href="https://staple.io">website’s</a>{' '}
                    subscription and billing page using Stripe, React and
                    GraphQL with Apollo.
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Implemented a Jenkins server in Docker for CI/CD pipeline.{' '}
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Collaborated with oversea remote teams with Scrum Agile
                    Methodology.
                  </a>
                </li>
              </h3>
            </div>
          </div>
          <div
            className="gridbox"
            style={{
              alignSelf: 'stretch',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              style={{
                flex: 1,
                alignSelf: 'center',
                padding: '2vw',
                objectFit: 'contain',
              }}
              src="cloudcraft.png"
            />
            <div
              className="gridbox-overlay"
              style={{ background: 'rgba(200, 200, 200, 0.975)' }}
            >
              <Title className="gridbox-overlay__title">
                Freelance Project
              </Title>
              <h3
                style={{
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  textAlign: 'left',
                }}
              >
                <li>
                  <a>
                    Involved in developing a third-party Oracle service
                    management web portal using React under an Oracle Manager
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Implemented a system creating 3D architecture diagrams from
                    drag-and-drop or data using three.js & JQuery
                  </a>
                </li>
                <br />
                <li>
                  <a>
                    Setup frontend and backend with user register and login
                    interface to Passport.js & MongoDB.
                  </a>
                </li>
                <br />
              </h3>
            </div>
          </div>
        </ExampleSection> */}
        <AboutSection />
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
