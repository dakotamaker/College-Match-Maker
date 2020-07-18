import { intendedMajors, ethnicities } from '../survey/utils/personalSurveyValues'

const findYearKeys = function(data) {
    return Object.keys(data).filter(key => !isNaN(parseInt(key))).sort((a, b) => a > b ? 1 : -1)
}

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#011627', '#FF8042', '#FFCF00', '#F283B6', '#EE6123', '#00916E', '#FA003F', '#656176', '#534D56', '#E06C9F', '#DF2935'];

export function pullAdmissionData(data) {
    let results = [];
    
    findYearKeys(data).forEach(year => {
        let admissionRate = ((data[year].admissions.admission_rate.overall || 0) * 100).toFixed(2)
        results.push({year: year, 'Admission Rate': admissionRate})
    })

    return results
}

export function pullTuitionData(data) {
    let results = [];
    
    findYearKeys(data).forEach(year => {
        let inState = data[year].cost.tuition.in_state || 0;
        let outOfState = data[year].cost.tuition.out_of_state || 0;
        results.push({year: year, 'In State Tuition': inState, 'Out Of State Tuition': outOfState})
    })

    let domain = [Math.min(...results.map(x=> x['In State Tuition'])), Math.max(...results.map(x=> x['Out Of State Tuition']))];

    return {
        results: results,
        domain: domain
    }
}

export function pullProgramEnrollmentData(data) {
    let results = [];
    let programPercentage = data.latest.academics.program_percentage;

    Object.keys(programPercentage)
    .filter(key => {
        return programPercentage[key] > 0.0 && intendedMajors.map(x => x.value).includes(key)
    })
    .forEach(key => {
        let keyPrettyName = intendedMajors.find(x => x.value === key).label

        results.push({name: keyPrettyName, value: programPercentage[key]})
    })

    return results;
}

export function pullEthnicityEnrollmentLineChartData(data) {
    let results = [];
    
    findYearKeys(data).forEach(year => {
        let resultToPush = {year: year}

        let ethnicDemographics = data[year].student.demographics.race_ethnicity

        Object.keys(ethnicDemographics)
        .filter(key => Object.values(ethnicities).includes(key) && !key.endsWith('_2000') && !key.endsWith('_2009'))
        .forEach(key => {
            let ethnicityPrettyName = Object.keys(ethnicities).find(x => ethnicities[x] === key)
            resultToPush[ethnicityPrettyName] = ((ethnicDemographics[key] || 0) * 100).toFixed(2)
        })

        results.push(resultToPush)
    })


    return results
}

export function pullGenderEnrollmentLineChartData(data) {
    let results = [];
    
    findYearKeys(data).forEach(year => {
        let menPercentage = ((data[year].student.demographics.men || 0) * 100).toFixed(2); 
        let womenPercentage = ((data[year].student.demographics.women || 0) * 100).toFixed(2);

        results.push({year: year, 'Men': menPercentage, 'Women': womenPercentage})
    });


    return results
}

export function pullAverageIncomeData(data) {
    let results = [];
    
    findYearKeys(data).forEach(year => {
        results.push({year: year, 'Average Family Income': data[year].student.demographics.avg_family_income})
    });

    let domain = [Math.min(...results.map(x=> x['Average Family Income'])), Math.max(...results.map(x=> x['Average Family Income']))];

    return {
        results: results,
        domain: domain
    }
}

export function pullEthnicityEnrollmentPieChartData(data) {
    let results = [];

    let ethnicDemographics = data.latest.student.demographics.race_ethnicity
    
     Object.keys(ethnicDemographics)
    .filter(key => Object.values(ethnicities).includes(key) && !key.endsWith('_2000') && !key.endsWith('_2009'))
    .forEach(key => {
        let ethnicityPrettyName = Object.keys(ethnicities).find(x => ethnicities[x] === key)
        results.push({name: ethnicityPrettyName, value: ethnicDemographics[key]})
    })

    return results
}

export function pullGenderEnrollmentPieChartData(data) {
    return [{
        name: 'Men',
        value: data.latest.student.demographics.men
    }, {
        name: 'Women',
        value:data.latest.student.demographics.women
    }];
}

export function pullIncomeLevelData(data) {
    let incomeData = [{
        name: 'Low Income (< $30k)',
        value: data.latest.student.share_lowincome['0_30000']
    }, {
        name: 'Low-Mid Income ($30k-48k)',
        value: data.latest.student.share_middleincome['30001_48000']
    }, {
        name: 'Middle Income ($48k-75k)',
        value: data.latest.student.share_middleincome['48001_75000']
    }, {
        name: 'High-Mid Income ($75k-110k)',
        value: data.latest.student.share_highincome['75001_110000']
    }, {
        name: 'High Income ($110k +)',
        value: data.latest.student.share_highincome['110001plus']
    }]

    return incomeData
}
