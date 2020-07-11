const storeFormValue = function(valueKey, value, weightFlag) {
    let localStorageKey = weightFlag ? 'surveyWeights' : 'surveyResults'

    let valueStored = JSON.parse(localStorage.getItem(localStorageKey))

    let valueToSet = {
        [valueKey]: value
    };

    localStorage.setItem(localStorageKey, JSON.stringify(Object.assign(valueStored, valueToSet)));
}

module.exports = { storeFormValue }