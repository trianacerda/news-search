export const fetchNewsArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?&apiKey=${process.env.API_KEY}`
  );
  const articles = await res.json();
  console.log('articles', articles);
  return articles;
};
