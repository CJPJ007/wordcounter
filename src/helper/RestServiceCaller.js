export const callAPI = (url, requestData, httpMethod, headers) => {
    let response = null;
    if (httpMethod !== "GET") {
      response =  fetch(url, {
        method: httpMethod,
        headers: headers,
        body: JSON.stringify(requestData),
      });
    } else {
      response = fetch(url, {
        method: httpMethod,
        headers: headers,
      });
    }
    return response;
};
