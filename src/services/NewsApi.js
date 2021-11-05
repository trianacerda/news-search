export const fetchNewsArticles = async (title) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${title}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=5`
  );
  const articles = await res.json();
  // console.log('look here', articles);
  return articles.articles;
};
