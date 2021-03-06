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
    admission_rate_match: 'Admission Rate',
    mathematics_offered_match: 'Mathematics Major Offered',
    education_offered_match: 'Education Major Offered',
    business_marketing_offered_match: 'Business Marketing Major Offered',
    communications_technology_offered_match: 'Communication Technology Major Offered',
    language_offered_match: 'Foreign Languages Major Offered',
    visual_performing_offered_match: 'Performing Arts Major Offered',
    parks_recreation_fitness_offered_match: 'Parks and Recreational Fitness Major Offered',
    agriculture_offered_match: 'Agriculture Major Offered',
    security_law_enforcement_offered_match: 'Security and Law Enforcement Major Offered',
    computer_offered_match: 'Information Technology Major Offered',
    humanities_offered_match: 'Humanities Major Offered',
    library_offered_match: 'Library Sciences Major Offered',
    psychology_offered_match: 'Psychology Major Offered',
    social_science_offered_match: 'Social Sciences Major Offered',
    legal_offered_match: 'Legal Major Offered',
    english_offered_match: 'English Major Offered',
    construction_offered_match: 'Construction Major Offered',
    communication_offered_match: 'Communication Major Offered',
    public_administration_social_services_offered_match: 'Social Services Major Offered',
    architecture_offered_match: 'Architecture Major Offered',
    ethnic_culture_gender_offered_match: 'Ethnic/Gender/Cultural Studies Major Offered',
    resources_offered_match: 'Natural Resources and Conservation Major Offered',
    health_offered_match: 'Medical Sciences Major Offered',
    engineering_offered_match: 'Engineering Major Offered',
    history_offered_match: 'History Major Offered',
    physical_science_offered_match: 'Physical Sciences Major Offered',
    biological_offered_match: 'Biology Major Offered',
    family_consumer_science_offered_match: 'Family Consumer Science Major Offered',
    philosophy_religious_offered_match: 'Religious Philosophy Major Offered',
    personal_culinary_offered_match: 'Culinary Major Offered',
    mechanical_repair_tech_offered_match: 'Mechanical Repair Major Offered',
}

export function getDisplayNameForMatchBullet(value) {
    return matchPrettyNameMapping[value] || value;
}