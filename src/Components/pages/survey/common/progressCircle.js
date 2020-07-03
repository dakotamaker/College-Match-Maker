import React from 'react';
import '../../../../Assets/css/components/pages/survey/common/survey-progress.css'

const surveyMap = {
    'personal': 1,
    'school': 2,
    'summary': 3
}

class ProgressCircle extends React.Component {
    render() {
        function determineCircleClass(surveyEndpoint) {
            let currentSurveyValue = surveyMap[window.location.pathname.replace('/survey/', '')];
            let suppliedValue = surveyMap[surveyEndpoint];

            if(currentSurveyValue === suppliedValue) {
                return 'in-progress'
            } else if (currentSurveyValue > suppliedValue) {
                return 'done'
            } else {
                return 'to-be-done'
            }
        }

        return (
            <div className="circle-container">
                <div className={`circle ${determineCircleClass(this.props.circleEndpoint)}`}>
                    {this.props.circleNumber}
                </div>
                <div className="circle-title">
                    {this.props.circleTitle}
                </div>
            </div>
        );
    }
}

export default ProgressCircle;