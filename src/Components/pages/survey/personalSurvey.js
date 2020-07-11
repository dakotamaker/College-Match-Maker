import React from 'react';
import SurveyTitle from './common/title'
import RadioGroup from './common/formElements/radioGroup'
import DropDownMenu from './common/formElements/dropdownMenu'
import CheckBoxes from './common/formElements/checkBoxes'
import NumberInput from './common/formElements/numberInput'
import SurveyNavigationButton from './common/surveyNavigationButton'
import FormDivider from './common/formElements/divider'
import { Form } from "antd";
import * as personalSurveyValues from './utils/personalSurveyValues';
import "antd/dist/antd.css";
import "../../../Assets/css/components/pages/survey/common/common-survey.css"

class PersonalSurvey extends React.Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        return (
            <span>
                <SurveyTitle/>
                <div className="form-wrapper">
                    <Form {...layout} name="personal-info">
                        <FormDivider text="School Subjects"/>
                        <CheckBoxes groupLabel="Subjects That Interest You" groupName="fav-subjs" options={personalSurveyValues.subjects}/>
                        <CheckBoxes groupLabel="Intended Major(s)" groupName="int-major" options={personalSurveyValues.intendedMajors} limitChoices={3}/>
                        
                        <FormDivider text="Personal Information"/>
                        <RadioGroup groupLabel="Family Income" groupName="fam-income" radioButtonMap={personalSurveyValues.familyIncome}/>
                        <DropDownMenu menuLabel="Gender" menuName="gender" menuMap={personalSurveyValues.genders} weighted={true} weightedTitle="Gender Diversity"/>
                        <DropDownMenu menuLabel="Race" menuName="race" menuMap={personalSurveyValues.races} weighted={true} weightedTitle="Racial Diversity"/>
                        
                        <FormDivider text="Test Scores"/>
                        <NumberInput label="ACT Composite Score" name="act-comp" min={1} max={36}/>
                        <NumberInput label="ACT Math Score" name="act-mat" min={1} max={36}/>
                        <NumberInput label="ACT English Score" name="act-english" min={1} max={36}/>
                        <NumberInput label="ACT Writing Score" name="act-writing" min={2} max={12}/>
                        <NumberInput label="SAT Overall Score" name="sat-total" min={400} max={1600}/>
                        <NumberInput label="SAT Writing Score" name="sat-writing" min={200} max={800}/>
                        <NumberInput label="SAT Critical Reading Score" name="sat-reading" min={200} max={800}/>
                        <NumberInput label="SAT Math Score" name="sat-math" min={200} max={800}/>
                    </Form>
                </div>
                <div className="navigation-botton-wrapper">
                    <SurveyNavigationButton to="/survey/school" buttonText="Next"primary={true}/>
                </div>
            </span>
        );
    }
}

export default PersonalSurvey;