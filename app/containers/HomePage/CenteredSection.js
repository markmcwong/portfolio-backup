import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
  text-align: center;
  height: 100vh;
  width: 100vw;
  background: #ff9d66;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
`;

export default CenteredSection;
