import React from 'react';
import '../../../../Assets/css/components/pages/survey/common/survey-progress.css'
import ProgressCircle from './progressCircle'

class SurveyTitle extends React.Component {
    render() {
        return (
            <div className="survey-status-area">
                <div className="progress-line">
                    <ProgressCircle circleNumber={1} circleTitle="Personal Information" circleEndpoint="personal"/>
                    <ProgressCircle circleNumber={2} circleTitle="School Preferences" circleEndpoint="school"/>
                    <ProgressCircle circleNumber={3} circleTitle="Summary and Review" circleEndpoint="summary"/>
                </div>
            </div>
        );
    }
}

export default SurveyTitle;