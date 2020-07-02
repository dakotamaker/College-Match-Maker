import React from 'react';
import '../Assets/css/header.css'

import Icon from 'react-icons-kit';
import { ic_fingerprint } from 'react-icons-kit/md/ic_fingerprint'


// TODO: Fix hrefs, finish styling obvs
function Header() {
  return (
      <header className="header">
          <div className="header-title" href="/"><Icon icon={ic_fingerprint} size={40}/> Personalized College Match Maker</div>
          <div className="page-link" href="/">Find Your Colleges</div>
          <div className="page-link empty-space" href="/">Knowledge Center</div>
      </header>
  );
}

export default Header;