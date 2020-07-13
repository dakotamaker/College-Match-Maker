const alphebetizeList = function(list, sortingProperty) {
    return list.sort((a, b) => {
        return (a[sortingProperty] > b[sortingProperty]) ? 1 : -1
    })
}

const intendedMajors = alphebetizeList([
    { label: 'Mathematics', value: 'mathematics' },
    { label: 'Education', value: 'education' },
    { label: 'Business Marketing', value: 'business_marketing' },
    { label: 'Communication Technology', value: 'communications_technology' },
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
    'Male': 'men',
    'Female': 'women',
    'N/A': null
}

const ethnicities = {
    'Black': 'black',
    'Hispanic': 'hispanic',
    'Asian': 'asian',
    'Asian Pacific Islander': 'asian_pacific_Islander',
    'Native Hawaiian Pacific Islander': 'nhpi',
    'White': 'white',
    'Two or more': 'two_or_more',
    'Unknown': 'unknown'
}

const subjects = alphebetizeList([
    { label: 'Teaching', value: 'teaching' },
    { label: 'Math', value: 'math' },
    { label: 'Engineering', value: 'engineering' },
    { label: 'Literature', value: 'literature' },
    { label: 'Speech', value: 'speech' },
    { label: 'History', value: 'history' },
    { label: 'Accounting/Economics', value: 'accounting' },
    { label: 'Foreign Language(s)', value: 'foreign_lang' },
    { label: 'Biology', value: 'biology' },
    { label: 'Chemistry', value: 'chemistry' },
    { label: 'Physics', value: 'physics' },
    { label: 'Enviornmental Science', value: 'env_science' },
    { label: 'Health/Medical', value: 'health' },
    { label: 'Theatre', value: 'theatre' },
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Computer Science', value: 'computer_science' }, 
    { label: 'U.S. Government', value: 'legal' }, 
    { label: 'Psychology', value: 'psychology' }, 
    { label: 'Workshop', value: 'workshop' }, 
    { label: 'Woodshop', value: 'woodshop' }, 
    { label: 'Gym', value: 'gym' }, 
    { label: 'Cooking', value: 'personal_culinary' }, 
    { label: 'Theology', value: 'theology' }, 
    { label: 'Sociology', value: 'sociology' }, 
], 'label');

module.exports = {
    intendedMajors,
    familyIncome,
    genders,
    ethnicities,
    subjects
}