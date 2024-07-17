import { useContext } from "react";
import ArticleContext from "../../Store/article-context";
import { useNavigate } from "react-router-dom";

const ArticleDetails = () => {
  const articleCtx = useContext(ArticleContext);
  const navigate = useNavigate()

  const data = articleCtx.articleDetails;
  console.log(data);
  return (
    <>
    <button onClick={() => navigate('/')}>X</button>
      <div>
        <h1>{data.title}</h1>
        <p>{data.full_description}</p>
      </div>
    </>
  );
};

export default ArticleDetails;
