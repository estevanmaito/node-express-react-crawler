# Web Crawler

[README.md em pt-BR](README-pt_BR.md)

A simple crawler using Node, Express and NextJS to server-side render ReactJS. Beyond these 4 technologies, it uses `cheerio` and `request-promise` to fetch and parse HTML body.

The current structure is very simple, as it only scrape a single website (gizmodo.uol.com.br).

If you would like to customize it to your own needs, I would suggest starting by modifying the `URL` and the fields (usually inside `$()`) to the target website.

```javascript
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
```

Beyond that, you can change the presentation in the file `pages/index.js`.