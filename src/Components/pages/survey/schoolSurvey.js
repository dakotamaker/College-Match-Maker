import React from 'react';
import SurveyTitle from './common/title'
import RadioGroup from './common/formElements/radioGroup'
import SurveyNavigationButton from './common/surveyNavigationButton'
import FormDivider from './common/formElements/divider'
import { Form } from "antd";
import "antd/dist/antd.css";
import * as schoolSurveyValues from './utils/schoolSurveyValues';
import "../../../Assets/css/components/pages/survey/common/common-survey.css"

class SchoolSurvey extends React.Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        return (
            <span>
                <SurveyTitle/>
                <div className="form-wrapper">
                    <Form {...layout} name="school-info">
                        <FormDivider text="School Prestige"/>
                        <RadioGroup groupLabel="School's Division" groupName="division" radioButtonMap={schoolSurveyValues.divisions} weighted={true}/>
                        <RadioGroup groupLabel="Public or Private" groupName="public-or-private" radioButtonMap={schoolSurveyValues.publicSchool} weighted={true}/>
                        <RadioGroup groupLabel="Selectivity Percentage" groupName="selectivity" radioButtonMap={schoolSurveyValues.selectivities} weighted={true}/>
                        
                        <FormDivider text="Monetary"/>
                        <RadioGroup groupLabel="Cost Per Year" groupName="cost-per-year" radioButtonMap={schoolSurveyValues.costs} weighted={true}/>
                        <RadioGroup groupLabel="Desired Salary (4 years after graduation)" groupName="salary" radioButtonMap={schoolSurveyValues.salaries} weighted={true}/>

                        <FormDivider text="School Characteristics"/>
                        <RadioGroup groupLabel="Religious Affiliation" groupName="religious-affiliation" radioButtonMap={schoolSurveyValues.religiousAffliation} weighted={true}/>
                        <RadioGroup groupLabel="Student Body Size" groupName="student-size" radioButtonMap={schoolSurveyValues.studentBodySize} weighted={true}/>
                    </Form>
                </div>
                <div className="navigation-botton-wrapper">
                    <SurveyNavigationButton to="/survey/personal" buttonText="Back"/>
                    <SurveyNavigationButton to="/survey/summary" buttonText="Next" primary={true}/>
                </div>
            </span>
        );
    }
}

export default SchoolSurvey;