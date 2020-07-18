export async function query(queryString, queryParams) { 
    return await fetch('https://omscs6460-cmm-server.herokuapp.com/api/query', { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sql: queryString,
        sqlParams: queryParams
      }) 
    }).then(async respose => {
        return await respose.json();
    }).catch(err => {
        console.error(err);
        throw err;
    });
}

export async function getCollegeDataByID(collegeId) {
  console.log(process.env.SCORECARD_API_KEY)
  return await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools.json?id=${collegeId}&api_key=${process.env.SCORECARD_API_KEY}&keys_nested=true`, {
    method: 'GET'
  }).then(async response => {
    return await response.json();
  }).catch(err => {
    console.error(err);
    throw err;
  })
}