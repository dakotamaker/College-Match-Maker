const alphebetizeList = function(list, sortingProperty) {
    return list.sort((a, b) => {
        return (a[sortingProperty] > b[sortingProperty]) ? 1 : -1
    })
}

const intendedMajors = alphebetizeList([
    { label: 'Mathematics', value: 'mathematics' },
    { label: 'Education', value: 'education' },
    { label: 'Business Marketing', value: 'business_marketing' },
    { label: 'Communication Technology', value: 'communication_technology' },
    { label: 'Foreign Languages', value: 'language' },
    { label: 'Performing Arts', value: 'visual_performing' },
    { label: 'Parks and Recreational Fitness', value: 'parks_recreation_fitness' },
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Security and Law Enforcement', value: 'security_law_enforcement' },
    { label: 'Information Technology', value: 'computer' },
    { label: 'Humanities', value: 'humanities' },
    { label: 'Library Sciences', value: 'library' },
    { label: 'Psychology', value: 'psychology' },
    { label: 'Social Sciences', value: 'social_science' },
    { label: 'Legal', value: 'legal' },
    { label: 'English', value: 'english' },
    { label: 'Construction', value: 'construction' },
    { label: 'Communication', value: 'communication' },
    { label: 'Social Services', value: 'public_administration_social_services' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Ethnic/Gender/Cultural Studies', value: 'ethnic_culture_gender' },
    { label: 'Natural Resources and Conservation', value: 'resources' },
    { label: 'Medical Sciences', value: 'health' },
    { label: 'Engineering', value: 'engineering' }, 
    { label: 'History', value: 'history' }, 
    { label: 'Physical Sciences', value: 'physical_science' }, 
    { label: 'Biology', value: 'biological' }, 
    { label: 'Family Consumer Science', value: 'family_consumer_science' }, 
    { label: 'Religious Philosophy', value: 'philosophy_religious' }, 
    { label: 'Culinary', value: 'personal_culinary' }, 
    { label: 'Mechanical Repair', value: 'mechanical_repair_tech' } 
], 'label');

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
    'Asian Pacific Islander': 'asian_pacific_Islander',
    'Native Hawaiian Pacific Islander': 'nhpi',
    'White': 'white',
    'Two or more': 'two_or_more',
    'Unknown': 'unknown'
}

// TODO: Map these to their values more accurately
const subjects = alphebetizeList([
    { label: 'Teaching', value: ['eduction'] },
    { label: 'Calculus', value: ['mathematics', 'engineering', 'physical_science'] },
    { label: 'Statistics', value: ['mathematics', 'engineering', 'physical_science', 'business_marketing'] },
    { label: 'Literature', value: ['communication_technology', 'library', 'language', 'english', 'communication'] },
    { label: 'Speech', value: ['communication_technology', 'library', 'language', 'english', 'communication', 'family_consumer_science', 'public_administration_social_services'] },
    { label: 'History', value: ['humanities', 'history'] },
    { label: 'Accounting/Economics', value: ['business_marketing', 'mathematics'] },
    { label: 'Foreign Language(s)', value: ['communication_technology', 'communication', 'language'] },
    { label: 'Biology', value: ['health', 'biological', 'mathematics', 'physical_science'] },
    { label: 'Chemistry', value: ['health', 'physical_science'] },
    { label: 'Physics', value: ['health', 'mathematics', 'physical_science'] },
    { label: 'Enviornmental Science', value: ['physical_science', 'resources', 'biological'] },
    { label: 'Health/Medical', value: ['health', 'communication', 'biological', 'physical_science', 'psychology', 'social_science'] },
    { label: 'Theatre', value: ['visual_performing'] },
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Music Theory', value: 'mus-th' },
    { label: 'Information Technology', value: ['computer', 'engineering'] }, 
    { label: 'U.S. Government', value: ['legal', 'security_law_enforcement'] }, 
    { label: 'Psychology', value: ['psychology', 'social_science', 'humanities', 'family_consumer_science'] }, 
    { label: 'Workshop', value: ['mechanical_repair_tech', 'construction'] }, 
    { label: 'Woodshop', value: ['construction'] }, 
    { label: 'Gym', value: ['parks_recreation_fitness'] }, 
    { label: 'Cooking', value: ['personal_culinary'] }, 
    { label: 'Theology', value: ['philosophy_religious', 'ethnic_culture_gender'] }, 
    { label: 'Sociology', value: ['ethnic_culture_gender', 'social_science'] }, 
], 'label');

module.exports = {
    intendedMajors,
    familyIncome,
    genders,
    races,
    subjects
}