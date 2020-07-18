const matchPrettyNameMapping = {
    family_income_match: 'Family Income',
    cost_match: 'Yearly Cost',
    income_match: 'Average Post Graduation Income',
    division_match: 'School Division',
    school_type_match: 'School Type',
    religious_affiliation_match: 'Religious Affiliation Status',
    act_composite_match: 'Average ACT Composite Score',
    act_math_match: 'Average ACT Math Score',
    act_english_match: 'Average ACT English Score',
    act_writing_match: 'Average ACT Writing Score',
    sat_composite_match: 'Average Overall SAT Score',
    sat_math_match: 'Average SAT Score',
    sat_reading_match: 'Average SAT Reading Score',
    sat_writing_match: 'Average SAT Writing Score',
    enrollment_match: 'Total Enrollment Size',
    admission_rate_match: 'Admission Rate'
}

export function getDisplayNameForMatchBullet(value) {
    return matchPrettyNameMapping[value] || value;
}