import React from "react";
import { useState } from "react";

function Topics() {
  const [topic, setTopic] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((categoriesData) => {
        setCategories(categoriesData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);


  return <div className="topics"></div>;
}

export default Topics;
