const requestPromise = require('request-promise');
const jsdom = require('jsdom');


async function fetchUserIndexPage(gameId) {
    const idBasedUrl = `https://store.steampowered.com/api/appdetails?appids=${gameId}`;
  
    // Fetching HTML from id-based url at first
    let html = null;
    html = await requestPromise({
      uri: idBasedUrl
    });
  
    return html;
}

async function gameMiddleware(request, response) {

    const req = require('request');

    const gameId = request.params.id;

    let url = await fetchUserIndexPage(gameId);
    url = 'https://store.steampowered.com/api/appdetails?appids=1073123';

    let options = {json: true};



    req(url, options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };

        if (!error && res.statusCode == 200) {
            // do something with JSON, using the 'body' variable
        };
    });

    /*
    const fetch = require('node-fetch');

    let url = await fetchUserIndexPage(gameId);
    
    let settings = { method: "Get" };
    
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            // do something with JSON
            response.json(gameId);
    });
    */
  }
  
  module.exports = gameMiddleware;
  