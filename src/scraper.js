const request = require('request-promise')
const $ = require('cheerio')

async function getNews(url) {
  return await request(url)
    .then(parseContentFromURL)
    .catch(catchError)

  function parseContentFromURL(body) {
    let result = Array.from($('.list-item', body))

    let news = result.map(i => ({
      title: $(i).find('.postTitle > a').text(),
      description: $(i).find('.postSummary > p').text(),
      date: $(i).find('.published').attr('title'),
      image: $(i).find('.wp-post-image').attr('src'),
      href: $(i).find('.postTitle > a').attr('href'),
    }))

    return news
  }

  function catchError(err) {
    console.error(err)
  }
}

module.exports = { getNews }