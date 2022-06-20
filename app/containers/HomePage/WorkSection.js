import styled from 'styled-components';
import Section from './Section';

const WorkSection = styled(Section)`
  text-align: center;
  min-height: 100vh;
  width: 100vw;
  background: #ff9d66;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 !important;
  padding-left: 5vw;
  /* padding-right: 5vw; */
  p {
    font-size: 72px;
  }
`;

export default WorkSection;
