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