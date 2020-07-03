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
import "../../../Assets/css/components/pages/survey/common/common-survey.css"

const intendedMajors = {
    'Math': 'math',
    'Art': 'art'
}

const familyIncome = {
    '$0-25,000': '0_25k',
    '$25,001-50,000': '25_50k',
    '$50,001-75,000': '50_75k',
    '$75,001-100,000': '75_100k',
    '$100,000 +': '100k_plus'
}

const genders = {
    'Male': 'male',
    'Female': 'female',
    'N/A': null
}

const races = {
    'Black': 'black',
    'Hispanic': 'hispanic',
    'Asian': 'asian',
    'Two or more': 'two_or_more',
    'Asian Pacific Islander': 'asian_pacific_Islander',
    'Native Hawaiian Pacific Islander': 'nhpi',
    'White': 'white',
    'Unkown': 'unknown'
}

// TODO: Map these to their values more accurately
const subjects = [
    { label: 'Math', value: 'Math' },
    { label: 'Statistics', value: 'Statistics' },
    { label: 'English', value: 'English' },
    { label: 'Literature', value: 'Literature' },
    { label: 'Writing', value: 'Writing' },
    { label: 'Speech', value: 'Speech' },
    { label: 'U.S. History', value: 'us_his' },
    { label: 'World History', value: 'world-his' },
    { label: 'U.S. Government', value: 'us-gov' },
    { label: 'Business', value: 'bus' },
    { label: 'Accounting', value: 'acct' },
    { label: 'Microeconomics', value: 'micec' },
    { label: 'Macroeconomics', value: 'macec' },
    { label: 'Georgraphy', value: 'geo' },
    { label: 'Spanish', value: 'span' },
    { label: 'French', value: 'french' },
    { label: 'German', value: 'germ' },
    { label: 'Biology', value: 'bio' },
    { label: 'Chemistry', value: 'chem' },
    { label: 'Physics', value: 'phys' },
    { label: 'Enviornmental Science', value: 'env-sci' },
    { label: 'Health', value: 'health' },
    { label: 'Art', value: 'art' },
    { label: 'Art History', value: 'raul' },
    { label: 'Music Theory', value: 'mus-th' },
    { label: 'Computer Science', value: 'cs' }, 
  ];
  

class PersonalSurvey extends React.Component {
    render() {

        return (
            <span>
                <SurveyTitle/>
                <div className="form-wrapper">
                    <Form name="test">
                        <CheckBoxes options={subjects} groupLabel="Favorite Subjects" groupName="Favorite Subjects"/>
                        {/* TODO: Add majors here when mapping out */}
                        <RadioGroup groupLabel="Intended Major" groupName="int-major" radioButtonMap={intendedMajors}/>
                        <RadioGroup groupLabel="Family Income" groupName="fam-income" radioButtonMap={familyIncome}/>
                        <DropDownMenu menuLabel="Gender" menuName="gender" menuMap={genders} weighted={true} weightedTitle="Gender Diversity"/>
                        <DropDownMenu menuLabel="Race" menuName="race" menuMap={races} weighted={true} weightedTitle="Racial Diversity"/>
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