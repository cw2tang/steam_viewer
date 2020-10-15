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
    const gameId = request.params.id;
  
    // error_ctn
    try {
      const html = await fetchUserIndexPage(gameId);

      jsdom.env(
        html,
        ['https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'],
        async function(err, window) {
          const $ = window.$;
          const document = window.document;

          // Response is JSON
          response.json({
            gameId,
          });
        }
      );
    } catch (err) {
      console.error(err);
      response.status(400).json({
        error: 'unknown error'
      });
    }
  }
  
  module.exports = gameMiddleware;
  