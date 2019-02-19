const rp = require('request-promise')
const $ = require('cheerio')

const URL = 'https://gizmodo.uol.com.br'

async function getNews() {
  return await rp(URL)
    .then(function(body) {
      let result = Array.from($('.list-item', body))

      let news = result.map(i => ({
        title: $(i).find('.postTitle > a').text(),
        description: $(i).find('.postSummary > p').text(),
        author: $(i).find('.postMeta--author-author > a').text(),
        date: $(i).find('.published').attr('title'),
        image: $(i).find('.wp-post-image').attr('src'),
        href: $(i).find('.postTitle > a').attr('href'),
      }))

      return news
    })
    .catch(function(err) {
      console.log(err)
    })
}

module.exports = { getNews }