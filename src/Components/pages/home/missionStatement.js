import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/css/components/pages/home/mission-satement.css'
import logo from '../../../Assets/images/magnifier_with_print.png';

class MissionStatement extends React.Component {
    render() {
        return (
            <div className="statement">
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
                            <Link to="/survey/personal" className="mission-button">
                                Find your best college matches
                            </Link>
                            <Link to="/knowledgeBase" className="mission-button">
                                Go to our college knowledge base
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}

export default MissionStatement;