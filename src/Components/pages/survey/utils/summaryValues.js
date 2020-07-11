import _ from 'lodash';
import * as personalSurvey from './personalSurveyValues';
import * as schoolSurvey from './schoolSurveyValues';

const singleStringSurveyValues = Object.assign({},
    personalSurvey.races,
    personalSurvey.genders,
    personalSurvey.familyIncome,
    schoolSurvey.publicSchool,
    schoolSurvey.selectivities,
    schoolSurvey.salaries,
    schoolSurvey.graduationRates,
    schoolSurvey.religiousAffliation,
    schoolSurvey.studentBodySize,
    schoolSurvey.costs,
    schoolSurvey.divisions,
);

const arraySurveyValues = personalSurvey.intendedMajors.concat(personalSurvey.subjects)

const personalKeys = [
    'fav-subjs',
    'int-major',
    'fam-income',
    'gender',
    'race',
    'gender-slider-value',
    'race-slider-value',
    'act-comp',
    'act-math',
    'act-writing',
    'act-english',
    'sat-total',
    'sat-writing',
    'sat-reading',
    'sat-math'
];

const schoolKeys = [
    'division',
    'public-or-private',
    'selectivity',
    'grad-rate',
    'cost-per-year',
    'salary',
    'religious-affiliation',
    'student-size',
    'division-slider-value',
    'public-or-private-slider-value',
    'selectivity-slider-value',
    'grad-rate-slider-value',
    'cost-per-year-slider-value',
    'salary-slider-value',
    'religious-affiliation-slider-value',
    'student-size-slider-value'
];

const formFieldNameMapping = {
    'sat-total': 'Total SAT Score',
    'sat-math': 'SAT Math Score',
    'sat-writing': 'SAT Writing Score',
    'sat-reading': 'SAT Critical Reading Score',
    'act-comp': 'Composite ACT Score',
    'act-english': 'ACT English Score',
    'act-math': 'ACT Math Score',
    'act-writing': 'ACT Writing Score',
    'fav-subjs': 'Favorite Subjects',
    'fam-income': 'Family Income',
    'gender': 'Gender',
    'race': 'Race',
    'int-major': 'Intended Major(s)',
    'division': 'Preferred School Division',
    'public-or-private': 'Preferred School Type',
    'selectivity': 'Preferred School Selectivity',
    'grad-rate': 'Preferred School Grautaion Rate',
    'cost-per-year': 'Preferred Cost Per Year',
    'salary': 'Preferred Salary After Graduation',
    'religious-affiliation': 'Preferment Towards School Having a Religious Affiliation',
    'student-size': 'Preferred Student Body Size',
}

const importance = {
    1: 'None',
    2: 'Not Very Important',
    3: 'Neutral',
    4: 'Somewhat Important',
    5: 'Crucial'
}

const transformRawDataToListData = function(rawData) {
    let results = Object.keys(rawData).filter(key => !key.includes('slider-value')).map(key => {
        return {
            title: formFieldNameMapping[key],
            value: findPrettyValueText(rawData, key) || 0
        }
    });

    return results
}

const findPrettyValueText = function(rawData, key) {
    let result = '';

    if (typeof(rawData[key]) === 'number') {
        result = rawData[key];
    } else if (typeof(rawData[key]) === 'string') {
        result = Object.keys(singleStringSurveyValues).find(x => singleStringSurveyValues[x] === rawData[key])
    } else {
        result = arraySurveyValues.filter(x => rawData[key].includes(x.value)).map(x => x.label).join(', ');
    }

    return rawData[`${key}-slider-value`] ?  `${result} - (${importance[rawData[`${key}-slider-value`]]})`: result
}

export function getValues() {
    let storedResults = JSON.parse(localStorage.getItem('surveyResults')); 
    let storedWeights = JSON.parse(localStorage.getItem('surveyWeights'));

    let combinedStoredValues = Object.assign({}, storedResults, storedWeights)

    let rawPersonalData = _.pick(combinedStoredValues, personalKeys)
    let rawSchoolData = _.pick(combinedStoredValues, schoolKeys)

    return {
        personalData: transformRawDataToListData(rawPersonalData),
        schoolData: transformRawDataToListData(rawSchoolData)
    }
}