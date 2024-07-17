import React from "react";

const ArticleContext = React.createContext({
    articleDetails: {},
    add: (data) => {}
})

export default ArticleContext;