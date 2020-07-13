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