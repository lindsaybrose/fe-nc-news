import React from "react";
import getArticles from "../../api";
import { useState, useEffect } from "react";

function Articles() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ data }) => {
      setArticle(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (!isLoading) {
    return article.map((articleItem) => {
      return (
        <ul key={articleItem.article_id}>
          <div className='article'>
          <h5 className='article-title'>{articleItem.title}</h5>
          <img className='article-img'src={articleItem.article_img_url} />
          <p>{articleItem.body}</p>
          </div>
        </ul>
      );
    });
  }
}

export default Articles;
