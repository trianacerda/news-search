export const fetchNewsArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const articles = await res.json();
  console.log('articles', articles);
  return articles.articles;
};

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=fc5804d1f6664d5f9ea59ec356df8415
