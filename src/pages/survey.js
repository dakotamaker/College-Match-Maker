import React from 'react';
import { Route } from 'react-router-dom';

import Routes from '../Routes';
import PersonalSurvey from '../Components/pages/survey/personalSurvey'
import SchoolSurvey from '../Components/pages/survey/schoolSurvey'
import SurveySummary from '../Components/pages/survey/surveySummary';
import BestFitList from '../Components/pages/survey/bestFitList';

class Survey extends React.Component {
    render() {
        return (
            <span>
                <Route exact path={Routes.PERSONAL_SURVEY_PAGE} component={PersonalSurvey}/>
                <Route exact path={Routes.SCHOOL_SURVEY_PAGE} component={SchoolSurvey}/>
                <Route exact path={Routes.SURVEY_SUMMARY_PAGE} component={SurveySummary}/>
                <Route exact path={Routes.SURVEY_RESULTS_PAGE} component={BestFitList}/>
            </span>
        );
    }
}

export default Survey;