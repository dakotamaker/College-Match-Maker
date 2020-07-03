import React from 'react';
import SurveyTitle from './common/title'
import RadioGroup from './common/formElements/radioGroup'
import DropDownMenu from './common/formElements/dropdownMenu'
import CheckBoxes from './common/formElements/checkBoxes'
import NumberInput from './common/formElements/numberInput'
import SurveyNavigationButton from './common/surveyNavigationButton'
import { Form } from "antd";
import "antd/dist/antd.css";
import "../../../Assets/css/components/pages/survey/common/common-survey.css"

const religiousAffliation = {
    'Yes': 1,
    'No': 0
}

const divisions = {
    'DI': 1,
    'DII': 2,
    'DIII': 3
}

const costs = {
    'Up to $5,000': '5k',
    'Up to $10,000': '10k',
    'Up to $15,000': '15k',
    'Up to $20,000': '20k',
    'Up to $25,000': '25k',
    'Up to $30,000': '30k',
    'Up to $35,000': '35k',
    'Up to $40,000': '40k',
    '$40,000 +': '40k_plus'
}

const publicSchool = {
    'Public': 1,
    'Private': 0
}

const selectivities = {
    '0-5%': '0_5_per',
    '5-10%': '5_10_per',
    '10-25%': '10_25_per',
    '25-50%': '25_50_per',
    '50-75%': '50_75_per',
    '75% +': '75_plus_per'
}

const studentBodySize = {
    'Up to 500': '500_stud',
    'Up to 1,000': '1k_stud',
    'Up to 2,000': '2k_stud',
    'Up to 3,000': '3k_stud',
    'Up to 4,000': '4k_stud',
    'Up to 5,000': '5k_stud',
    'Up to 10,000': '10k_stud',
    'Up to 15,000': '15k_stud',
    'Up to 20,000': '20k_stud',
    'Up to 25,000': '25k_stud',
    'Up to 30,000': '30k_stud',
    'Up to 35,000': '35k_stud',
    'Up to 40,000': '40k_stud',
    '40,000 +': '40k_plus_stud'
}

const graduationRates = {
    '0-20%': '0_20_grad',
    '20-40%': '20_40_grad',
    '40-60%': '40_60_grad',
    '60-80%': '60_80_grad',
    '80-90%': '80_90_grad',
    '90% +': '90_plus_grad'
}

const salraries = {
    '$31,000-40,000': '30_40_sal',
    '$41,000-50,000': '40_50_sal',
    '$51,000-60,000': '50_40_sal',
    '$61,000-70,000': '60_70_sal',
    '$71,000-80,000': '70_80_sal',
    '$81,000-90,000': '80_90_sal',
    '$91,000-100,000': '90_100_sal',
    '$100,000 +': '100_plus_sal',
}

class SchoolSurvey extends React.Component {
    render() {
        return (
            <span>
                <SurveyTitle/>
                <div className="form-wrapper">
                    <Form name="school-info">
                        <RadioGroup groupLabel="Religious Affiliation" groupName="religious-affiliation" radioButtonMap={religiousAffliation} weighted={true}/>
                        <RadioGroup groupLabel="School's Division" groupName="division" radioButtonMap={divisions} weighted={true}/>
                        <RadioGroup groupLabel="Cost Per Year" groupName="cost-per-year" radioButtonMap={costs} weighted={true}/>
                        <RadioGroup groupLabel="Public or Private" groupName="public-or-private" radioButtonMap={publicSchool} weighted={true}/>
                        <RadioGroup groupLabel="Selectivity Percentage" groupName="selectivity" radioButtonMap={selectivities} weighted={true}/>
                        <RadioGroup groupLabel="Student Body Size" groupName="student-size" radioButtonMap={studentBodySize} weighted={true}/>
                        <RadioGroup groupLabel="Graduation Rate" groupName="grad-rate" radioButtonMap={graduationRates} weighted={true}/>
                        <RadioGroup groupLabel="Salary (4 years after graduation)" groupName="student-size" radioButtonMap={salraries} weighted={true}/>
                        {/* <RadioGroup groupLabel="Family Income" groupName="fam-income" radioButtonMap={familyIncome}/>
                        <DropDownMenu menuLabel="Gender" menuName="gender" menuMap={genders} weighted={true} weightedTitle="Gender Diversity"/>
                        <DropDownMenu menuLabel="Race" menuName="race" menuMap={races} weighted={true} weightedTitle="Racial Diversity"/>
                        <NumberInput label="ACT Composite Score" name="act-comp" min={1} max={36}/>
                        <NumberInput label="ACT Math Score" name="act-mat" min={1} max={36}/>
                        <NumberInput label="ACT English Score" name="act-english" min={1} max={36}/>
                        <NumberInput label="ACT Writing Score" name="act-writing" min={2} max={12}/>
                        <NumberInput label="SAT Overall Score" name="sat-total" min={400} max={1600}/>
                        <NumberInput label="SAT Writing Score" name="sat-writing" min={200} max={800}/>
                        <NumberInput label="SAT Critical Reading Score" name="sat-reading" min={200} max={800}/>
                        <NumberInput label="SAT Math Score" name="sat-math" min={200} max={800}/> */}
                    </Form>
                </div>
                <div className="navigation-botton-wrapper">
                    <SurveyNavigationButton to="/survey/personal" buttonText="Back"/>
                    <SurveyNavigationButton to="/survey/results" buttonText="Next" primary={true}/>
                </div>
            </span>
        );
    }
}

export default SchoolSurvey;