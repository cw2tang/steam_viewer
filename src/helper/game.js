const requestPromise = require('request-promise');

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
      response.json(response);
  
      // Passing HTML string into JSDOM

    } catch (err) {
      console.error(err);
      response.status(400).json({
        error: 'unknown error'
      });
    }
  }
  
  module.exports = gameMiddleware;
  