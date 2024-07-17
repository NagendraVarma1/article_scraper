import { useContext } from "react";
import ArticleContext from "../../Store/article-context";
import { useNavigate } from "react-router-dom";

const DisplayCards = (props) => {
    const articleCtx = useContext(ArticleContext)
    const navigate = useNavigate()
    const allData = props.data;

    const addDataHandler = (data) => {
        articleCtx.add(data)
        navigate('/ArticleDetails')
    }
    return (
        <div>
            {allData.map((data) => (
                <div key={Math.random()} style={{border: '1px solid black', width: '60%', margin: '20px 20%', padding: '10px'}}>
                <h3>{data.title}</h3>
                <div>
                <p>{data.creator}</p>
                <p>{data.pubDate}</p>
                </div>
                <p style={{cursor: 'pointer'}} onClick={() => addDataHandler(data)}>Click Here to View Full Article</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayCards;