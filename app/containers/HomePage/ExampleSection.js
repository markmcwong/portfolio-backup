import styled from 'styled-components';
import Section from './Section';

const ExampleSection = styled(Section)`
  text-align: center;
  /* min-height: 100vh; */
  width: 100vw;
  background: #FFF;
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 !important;
`;

export default ExampleSection;
