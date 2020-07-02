import React from 'react';
import '../../Assets/css/mission-satement.css'
import logo from '../../Assets/images/magnifier_with_print.png';

// TODO: Fix hrefs, finish styling obvs
function MissionStatement() {
  return (
    <div className="mission-statement-wrapper">
        <div className="logo-wrapper">
            <img src={logo} className="big-logo" alt="logo" />
        </div>
        <div className="mission-statment">
            <div className="mission-statement-text">
                The Personalized College Match Maker aims to help you find a college that fits 
                your preferences and academic performance to make your college search process easier.
            </div>
            <div className="mission-button-wrapper">
                <button className="mission-button">
                    Find your best college matches
                </button>
                <button className="mission-button">
                    Go to our knowledge base
                </button>
            </div>
        </div>
    </div>
  );
}

export default MissionStatement;