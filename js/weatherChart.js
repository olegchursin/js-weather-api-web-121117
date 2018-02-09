function getFahrenheits(result) {
  return result.hourly_forecast.map(resultInstance => {
    return resultInstance["temp"]["english"];
  });
}

function getHours(result) {
  return result.hourly_forecast.map(resultInstance => {
    return resultInstance["FCTTIME"]["hour"];
  });
}

function generateDataSet(labels, data) {
  return { labels: labels, datasets: [{ data: data }] };
}

function makeRequest(endpoint, success) {
  return fetch(endpoint)
    .then(res => res.json())
    .then(json => success(json));
}
