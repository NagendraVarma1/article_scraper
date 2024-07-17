const DisplayCards = (props) => {
    const allData = props.data;
    return (
        <div>
            {allData.map((data) => (
                <div style={{border: '1px solid black', width: '60%', margin: '20px 20%', padding: '10px'}}>
                <h3>{data.title}</h3>
                <div>
                <p>{data.creator}</p>
                <p>{data.pubDate}</p>
                </div>
                <a href={data.link}>Click Here to View Full Article</a>
                </div>
            ))}
        </div>
    )
}

export default DisplayCards;