# Web Crawler

[README.md em pt-BR](README-pt_BR.md)

Todo o código desse projeto foi criado e explicado [nesse vídeo](https://youtube.com/estevanmaito)

Esse é um crawler simples que usa Node, Express e NextJS pra renderizar ReactJS no servidor. Além dessas 4 tecnologias, também são usados `cheerio` e `request-promise` pra capturar e extrair as informações do HTML.

## Instalar

```
git clone https://github.com/estevanmaito/node-express-react-crawler.git
cd node-express-react-crawler
npm install
npm run dev
```

## Modificar

A estrutura atual é muito simples, já que está configurada para apenas um site (gizmodo.uol.com.br).

Se você quiser customizar o código pras suas necessidades, eu sugiro que comece modificando a `URL` e os campos (geralmente dentro de um `$()`) do site alvo, no arquivo `src/scraper.js`.

Fora isso, você pode mudar a apresentação no arquivo `pages/index.js`.