import getNews from '../src/scraper.js'

const news = getNews()

const Index = () => (
  <div>
    {
      news.map(n => (
        <h1>n.title</h1>
      ))
    }
  </div>
)

export default Index
