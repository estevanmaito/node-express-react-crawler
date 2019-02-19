# Web Crawler

[README.md em pt-BR](README-pt_BR.md)

Esse é um crawler simples que usa Node, Express e NextJS pra renderizar ReactJS no servidor. Além dessas 4 tecnologias, também são usados `cheerio` e `request-promise` pra capturar e extrair as informações do HTML.

A estrutura atual é muito simples, já que está configurada para apenas um site (gizmodo.uol.com.br).

Se você quiser customizar o código pras suas necessidades, eu sugiro que comece modificando a `URL` e os campos (geralmente dentro de um `$()`) do site alvo.

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

Fora isso, você pode mudar a apresentação no arquivo `pages/index.js`.