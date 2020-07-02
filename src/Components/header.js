import React from 'react';
import '../Assets/css/header.css'


// TODO: Fix hrefs, finish styling obvs
function Header() {
  return (
      <header className="header">
          <div className="header-title" href="/">Personalized College Match Maker</div>
          <div className="page-link" href="/">Find Your Colleges</div>
          <div className="page-link empty-space" href="/">Knowledge Center</div>
      </header>
  );
}

export default Header;