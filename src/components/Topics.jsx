import React from "react";
import { useEffect, useState } from "react";
import { getTopics } from "../../api";

import { Link } from "react-router-dom";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then(({ data }) => {
      setTopics(data.topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <p> Topics on their way! </p>
        <img
          src="https://media.tenor.com/HoocNDDrUKgAAAAj/rexx.gif"
          alt="cartoon on phone gif"
        />
      </>
    );
  }

  if (!isLoading) {
    return topics.map((topicItem) => {
      return (
        <ul key={topicItem.slug}>
          <div className="topic">
            <Link to={`/topics/${topicItem.slug}`}>
              <button className="topic-button" value={topicItem.slug}>
                {topicItem.slug}
              </button>
            </Link>
          </div>
        </ul>
      );
    });
  }
}
export default Topics;
