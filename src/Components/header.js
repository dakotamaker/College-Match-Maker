import React from 'react';
import '../Assets/css/components/header.css'

import Icon from 'react-icons-kit';
import { ic_fingerprint } from 'react-icons-kit/md/ic_fingerprint'

class Header extends React.Component {
  render() {
    const surveySelected = window.location.href.includes('survey');
    const knowledgeBaseSelected  = window.location.href.includes('knowledgeBase');

    return (
      <header className="header">
          <a className="header-title" href="/"><Icon icon={ic_fingerprint} size={40}/> Personalized College Match Maker</a>
          <a className={`page-link ${surveySelected ? "selected-link" : "unselcted-link"}`} href="/survey/personal">Find Your Colleges</a>
          <a className={`page-link empty-space ${knowledgeBaseSelected ? "selected-link" : "unselcted-link"}`} href="/knowledgeBase">Knowledge Center</a>
      </header>
    );
  }
}

export default Header;