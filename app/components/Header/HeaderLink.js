import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  /* padding: 0.25em 2em; */
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 16px;
  /* border: 2px solid #41addd; */
  color: #000;
  text-transform: uppercase;
  /* &:active {
    background: #41addd;
    color: #fff;
  } */
  span {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  }
`;
