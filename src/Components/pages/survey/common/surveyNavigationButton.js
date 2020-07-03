import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../Assets/css/components/pages/survey/common/survey-navigation-button.css'

class SurveyNavigationButton extends React.Component {
    render() {
        return (
            <Link to={this.props.to} className={`navigation-button ${this.props.primary ? 'primary' : 'secondary'}`}>
                {this.props.buttonText}
            </Link>
        );
    }
}

export default SurveyNavigationButton;