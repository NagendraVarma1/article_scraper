import { useState } from "react";
import ArticleContext from "./article-context";

const ArticleProvider = (props) => {
    const [details, setDetails] = useState({})

    const addArticleDetails = (data) => {
        setDetails(data)
    }

    const articleContext = {
        articleDetails: details,
        add: addArticleDetails
    }
  return <ArticleContext.Provider value={articleContext}>{props.children}</ArticleContext.Provider>;
};

export default ArticleProvider;
