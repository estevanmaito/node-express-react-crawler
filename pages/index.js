import Head from 'next/head'
import '../static/css/card.css'

const Index = ({news}) => (
  <div className="container">
    <Head>
      <meta name="viewport" content="initial-scale=1 width=device-width" />
    </Head>
    {
      news.map(n => (
        <a href={n.href} target="_blank" rel="noopener noreferrer" className="card" key={n.title} style={{ backgroundImage: `url(${n.image})` }}>
          <h3 className="card__title">{n.title}</h3>
          <small className="card__date">{n.date}</small>
          <p className="card__desc">{n.description}</p>
          <div className="overlay"></div>
        </a>
      ))
    }
  </div>
)

Index.getInitialProps = ({ req, query }) => {
  const news = query.news
  return {
    news
  }
}

export default Index
