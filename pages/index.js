const Index = ({news}) => (
  <div>
    {
      news.map(n => (
        <h1 key={n.title}>{n.title}</h1>
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
