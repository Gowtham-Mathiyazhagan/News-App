import img from "./assets/news.jpg";
import PropTypes from "prop-types";
function Contant({ fetchData }) {
  return (
    <div className="container-contant">
       {  fetchData.map((data, index) => {
          let icon = data.url.split("http//").pop().split("/");
          let date = data.publishedAt.replace("T", " ");
          let time = date.replace("Z", "");
          let length = data.description
            ? data.description.length
            : data.description;
          let description = data.description
            ? data.description.slice(0, 150)
            : data.description;
          let titlelength = data.title ? data.title.length : data.title;
          let title = data.title ? data.title.slice(0, 70) : data.title;

          return (
            <>
              <a
                key={index.toString()}
                href={data.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="article-card">
                  <div className="article-img">
                    <img
                      src={data.urlToImage ? data.urlToImage : img}
                      alt={data.source.name}
                    />
                  </div>
                  <div className="article-id">
                    <img
                      src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http%3A%2F%2F${icon}&size=16`}
                      alt="#"
                    />
                    <span>{data.source.name}</span>
                  </div>
                  <div className="article-title">
                    {titlelength < 71 ? data.title : title + "....."}
                  </div>
                  <div className="article-description">
                    {length < 150 ? data.description : description + "......"}
                  </div>
                  <div className="article-publish">
                    <span>publishedAt : </span>
                    <span>{time}</span>
                  </div>
                </div>
              </a>
            </>
          );
        })
      }
    </div>
  );
}
// Specifies 'fetchData' prop as an array and it's required
Contant.propTypes = {
  fetchData: PropTypes.array.isRequired,
};

export default Contant;
