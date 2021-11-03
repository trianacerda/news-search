export const fetchNewsArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const articles = await res.json();
  console.log('articles', articles);
  return articles.articles;
};
