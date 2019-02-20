# Web Crawler

[README.md em pt-BR](README-pt_BR.md)

A simple crawler using Node, Express and NextJS to server-side render ReactJS. Beyond these 4 technologies, it uses `cheerio` and `request-promise` to fetch and parse HTML body.

## Install

```
git clone https://github.com/estevanmaito/node-express-react-crawler.git
cd node-express-react-crawler
npm install
npm run dev
```

## Modifying

The current structure is very simple, as it only scrape a single website (gizmodo.uol.com.br).

If you would like to customize it to your own needs, I would suggest starting by modifying the `URL` and the fields (usually inside `$()`) to the target website, in the file `src/scraper.js`.

Beyond that, you can change the presentation in the file `pages/index.js`.