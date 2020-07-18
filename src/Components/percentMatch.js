import _ from 'lodash'

export function roundToNearest5(value) {
    return (value % 5) < 2.5 ?  parseInt(value / 5) * 5 : parseInt(value / 5) * 5 + 5;
}

const diversityQueryKeys = [
    {storageKey: 'ethnicity', queryKey: '{value}_student_percentage', queryAlias: 'ethnicity'}
]

const rangeQueryKeys = [
    {storageKey: 'fam-income', queryKey: 'average_family_income', queryAlias: 'family_income'},
    {storageKey: 'selectivity', queryKey: 'admission_rate', queryAlias: 'admission_rate'},
    {storageKey: 'cost-per-year', queryKey: '(in_state_tuition + out_of_state_tuition) / 2', queryAlias: 'cost'},
    {storageKey: 'salary', queryKey: 'average_income_post_graduation', queryAlias: 'income'},
    {storageKey: 'student-size', queryKey: 'total_enrollment', queryAlias: 'enrollment'}
]

const absoluteEqualityQueryKeys = [
    {storageKey: 'division', queryKey: 'institutional_level', queryAlias: 'division'},
    {storageKey: 'public-or-private', queryKey: 'public_school', queryAlias: 'school_type'},
    {storageKey: 'religious-affiliation', queryKey: 'religious_affiliation', queryAlias: 'religious_affiliation'}
]

const absoluteComparisonQueryKeys = [
    {storageKey: 'gender', queryKey: '{value}_percentage', queryAlias: 'gender'},
    {storageKey: 'act-comp', queryKey: 'act_50_percentile_cumulative', queryAlias: 'act_composite'},
    {storageKey: 'act-math', queryKey: 'act_50_percentile_math', queryAlias: 'act_math'},
    {storageKey: 'act-english', queryKey: 'act_50_percentile_english', queryAlias: 'act_english'},
    {storageKey: 'act-writing', queryKey: 'act_50_percentile_writing', queryAlias: 'act_writing'},
    {storageKey: 'sat-total', queryKey: 'overall_average_sat', queryAlias: 'act_composite'},
    {storageKey: 'sat-math', queryKey: 'sat_50_percentile_math', queryAlias: 'sat_math'},
    {storageKey: 'sat-reading', queryKey: 'sat_50_percentile_critical_reading', queryAlias: 'sat_reading'},
    {storageKey: 'sat-writing', queryKey: 'sat_50_percentile_writing', queryAlias: 'sat_writing'},
]

const rangeMappings = {
    '40k_sal': {min: 0, max: 40000},
    '50k_sal': {min: 0, max: 50000},
    '60k_sal': {min: 0, max: 60000},
    '70k_sal': {min: 0, max: 70000},
    '80k_sal': {min: 0, max: 80000},
    '90k_sal': {min: 0, max: 90000},
    '100k_sal': {min: 0, max: 100000},
    '100k_plus_sal': {min: 0, max: 99999999999},
    '500_stud': {min: 0, max: 500},
    '1k_stud': {min: 0, max: 1000},
    '2k_stud': {min: 0, max: 1000},
    '3k_stud': {min: 0, max: 1000},
    '4k_stud': {min: 0, max: 1000},
    '5k_stud': {min: 0, max: 1000},
    '10k_stud': {min: 0, max: 1000},
    '15k_stud': {min: 0, max: 1000},
    '20k_stud': {min: 0, max: 1000},
    '25k_stud': {min: 0, max: 1000},
    '30k_stud': {min: 0, max: 1000},
    '35k_stud': {min: 0, max: 1000},
    '45k_stud': {min: 0, max: 1000},
    '40k_plus_stud': {min: 0, max: 99999999999},
    '0_5_per': {min: 0.0, max: 0.05},
    '5_10_per': {min: 0.05, max: 0.1},
    '10_25_per': {min: 0.1, max: 0.25},
    '25_50_per': {min: 0.25, max: 0.5},
    '50_75_per': {min: 0.5, max: 0.75},
    '75_plus_per': {min: 0.75, max: 1},
    '5k': {min: 0, max: 5000},
    '10k': {min: 0, max: 10000},
    '15k': {min: 0, max: 15000},
    '20k': {min: 0, max: 20000},
    '25k': {min: 0, max: 25000},
    '30k': {min: 0, max: 30000},
    '35k': {min: 0, max: 35000},
    '40k': {min: 0, max: 40000},
    '40k_plus': {min: 0, max: 99999999999},
    '0_25k': {min: 0, max: 25000},
    '25_50k': {min: 25000, max: 50000},
    '50_75k': {min: 50000, max: 75000},
    '75_100k': {min: 75000, max: 100000},
    '100k_plus': {min: 100000, max: 99999999999},
}

const absoluteEqualityMappings = {
    'yes': 1,
    'no': 0,
    'public': 1,
    'private': 0,
    'd1': 1,
    'd2': 2,
    'd3': 3
}

const subjectToMajorMapping = {
    'teaching': ['eduction'],
    'math': ['mathematics', 'engineering', 'physical_science'],
    'engineering': ['mathematics', 'engineering', 'physical_science', 'computer'], 
    'literature': ['communications_technology', 'library', 'language', 'english', 'communication'],
    'speech': ['communications_technology', 'library', 'language', 'english', 'communication', 'family_consumer_science', 'public_administration_social_services'],
    'history': ['humanities', 'history'],
    'accounting': ['business_marketing', 'mathematics'],
    'foreign_lang': ['communications_technology', 'communication', 'language'],
    'biology': ['health', 'biological', 'mathematics', 'physical_science'],
    'chemistry': ['health', 'physical_science'],
    'physics': ['health', 'mathematics', 'physical_science'],
    'env_science': ['physical_science', 'resources', 'biological'],
    'health': ['health', 'communication', 'biological', 'physical_science', 'psychology', 'social_science'],
    'theatre': ['visual_performing'],
    'agriculture': ['agriculture'],
    'computer_science': ['mathematics', 'computer', 'engineering'],
    'legal': ['legal', 'security_law_enforcement'],
    'psychology': ['psychology', 'social_science', 'humanities', 'family_consumer_science'],
    'workshop': ['mechanical_repair_tech', 'construction'],
    'woodshop': ['construction'],
    'gym': ['parks_recreation_fitness'],
    'personal_culinary': ['personal_culinary'] ,
    'theology': ['philosophy_religious', 'ethnic_culture_gender'],
    'sociology': ['ethnic_culture_gender', 'social_science']
}

const determineWeight = function(key) {
    let storedWeights = JSON.parse(localStorage.getItem('surveyWeights'));
    let weight = storedWeights[`${key}-slider-value`] ? (0.25 * (storedWeights[`${key}-slider-value`] - 1)) + 0.5 : 1;

    return weight
}


const constructRangedQueryStatements = function(rangedValues, queryBuilder) {
    Object.keys(rangedValues).forEach(key => {
        let rangedQueryKey = rangeQueryKeys.find(x => x.storageKey === key)
        let keyWeight = determineWeight(key)

        queryBuilder.conditions.push(`SUM(IF(${rangedQueryKey.queryKey} > ${rangeMappings[rangedValues[key]].min} AND ${rangedQueryKey.queryKey} <= ${rangeMappings[rangedValues[key]].max}, ${keyWeight}, 0)) as ${rangedQueryKey.queryAlias}_match`)
        queryBuilder.params.push(rangeMappings[rangedValues[key]].min, rangeMappings[rangedValues[key]].max, keyWeight)
        queryBuilder.aliases.push(`${rangedQueryKey.queryAlias}_match`)
        queryBuilder.totalPossiblePoints += Math.min(keyWeight, 1)
    })
}

const constructAbsoluteEqualityQueryStatements = function(absoluteEqualityValues, queryBuilder) {
    Object.keys(absoluteEqualityValues).forEach(key => {
        let absoluteEqualityQueryKey = absoluteEqualityQueryKeys.find(x => x.storageKey === key)
        let keyWeight = determineWeight(key)

        queryBuilder.conditions.push(`SUM(IF(${absoluteEqualityQueryKey.queryKey} = ${absoluteEqualityMappings[absoluteEqualityValues[key]]}, ${keyWeight}, 0)) as ${absoluteEqualityQueryKey.queryAlias}_match`)
        queryBuilder.params.push(absoluteEqualityMappings[absoluteEqualityValues[key]], keyWeight)
        queryBuilder.aliases.push(`${absoluteEqualityQueryKey.queryAlias}_match`)
        queryBuilder.totalPossiblePoints += Math.min(keyWeight, 1)
    })
}

const constructAbsoluteComparisonQueryStatements = function(absoluteComparisonValues, queryBuilder) {
    Object.keys(absoluteComparisonValues).forEach(key => {
        if(absoluteComparisonValues[key]) {
            let absoluteComparisonQueryKey = absoluteComparisonQueryKeys.find(x => x.storageKey === key)
            let keyWeight = determineWeight(key)
    
            queryBuilder.conditions.push(`SUM(IF(${absoluteComparisonQueryKey.queryKey.replace('{value}', absoluteComparisonValues[key])} > ${typeof(absoluteComparisonValues[key]) === 'number' ? absoluteComparisonValues[key]: 0.3}, ${keyWeight}, 0)) as ${absoluteComparisonQueryKey.queryAlias}_match`)
            queryBuilder.params.push(absoluteComparisonValues[key], keyWeight)
            queryBuilder.aliases.push(`${absoluteComparisonQueryKey.queryAlias}_match`)
            queryBuilder.totalPossiblePoints += Math.min(keyWeight, 1)
        }
    })
}

const constructDiversityComparisonQueryStatements = function(diversityValues, queryBuilder) {
    Object.keys(diversityValues).forEach(key => {
        let diversityQueryKey = diversityQueryKeys.find(x=> x.storageKey === key);
        let keyWeight = determineWeight(key)

        queryBuilder.conditions.push(`SUM(IF(${diversityQueryKey.queryKey.replace('{value}', diversityValues[key])} > 0.3, 1, 0)) as ${diversityQueryKey.queryAlias}_match`)
        queryBuilder.conditions.push(`SUM(IF(white_student_percentage < 0.3, ${keyWeight}, 0)) as ethnical_diversity_match`);
        queryBuilder.params.push(keyWeight)
        queryBuilder.aliases.push(`${diversityQueryKey.queryAlias}_match`, 'ethnical_diversity_match')
        queryBuilder.totalPossiblePoints += Math.min(1 + keyWeight, 2)
    })
}

const constructMajorQueryStatements = function(majorValues, queryBuilder) {
    let flatSubjectMajorEquivalents = majorValues['fav-subjs'].map(x=> subjectToMajorMapping[x]).flat();
    let majorList = [...new Set(flatSubjectMajorEquivalents.concat(majorValues['int-major']))];

    majorList.forEach(major => {
        queryBuilder.conditions.push(`SUM(IF(${major}_offered, 1, 0)) as ${major}_offered_match`);
        queryBuilder.conditions.push(`SUM(IF(${major}_percentage > 0.2, 1, 0)) as ${major}_popular_match`);
        queryBuilder.aliases.push(`${major}_offered_match`, `${major}_popular_match`)
        queryBuilder.totalPossiblePoints += 1
    })
}

export function constructBestFitQuery(collegeId) {
    let queryBuilder = {
        conditions: [],
        params: [],
        aliases: [],
        totalPossiblePoints: 0
    }

    let storedResults = JSON.parse(localStorage.getItem('surveyResults')); 

    let rangedValues = _.pick(storedResults, rangeQueryKeys.map(x => x.storageKey));
    let absoluteEqualityValues = _.pick(storedResults, absoluteEqualityQueryKeys.map(x => x.storageKey));
    let absoluteComparisonValues = _.pick(storedResults, absoluteComparisonQueryKeys.map(x => x.storageKey));
    let diversityValues = _.pick(storedResults, diversityQueryKeys.map(x => x.storageKey));
    let majorValues = _.pick(storedResults, ['int-major', 'fav-subjs']);

    constructRangedQueryStatements(rangedValues, queryBuilder);
    constructAbsoluteEqualityQueryStatements(absoluteEqualityValues, queryBuilder)
    constructAbsoluteComparisonQueryStatements(absoluteComparisonValues, queryBuilder)
    constructDiversityComparisonQueryStatements(diversityValues, queryBuilder)
    constructMajorQueryStatements(majorValues, queryBuilder)

    let query = `SELECT 
                    college_id,
                    school_name,
                    school_url,
                    school_alias,
                    city,
                    state,
                    longitude,
                    latitude,
                    ROUND((${queryBuilder.aliases.join(' + ')}) / ${queryBuilder.totalPossiblePoints}, 3) * 100 as match_points 
                FROM (
                    SELECT
                        college_id,
                        school_name,
                        school_url,
                        school_alias,
                        city,
                        state,
                        longitude,
                        latitude,
                        ${queryBuilder.conditions.join(',\n')}
                    FROM college_scorecard_data 
                    ${collegeId ? 'WHERE college_id=' + collegeId : ''}
                    group by college_id) as T
                ORDER BY match_points DESC, school_name ASC
                LIMIT ${collegeId ? '1' : '50'};
                `

    return {
        query: query,
        params: queryBuilder.params
    }
}
