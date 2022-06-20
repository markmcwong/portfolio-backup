import A from './A';
import Banner from './banner.jpg';
import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink';
import Img from './Img';
import NavBar from './NavBar';
import React from 'react';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink onClick={() => (location.hash = '#portfolio')}>
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
