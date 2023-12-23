import PropTypes from "prop-types";
import { useRef,useState } from "react";
function SideBar({
  query,
  onClick,
  onLanguage,
  language,
  sort,
  onSort,
  page,
  onPage,
  date,
  onDate,
  valDate
}) {
  const[active,setActive]=useState(false)
  let calFrom = date.split("-");
  let favquery = useRef(null);
  let favqueryVal = favquery.current
    ? favquery.current.value.trim().toLowerCase().toString()
    : null;
   let style=(active ? {left:'0'} : {left:'-80%'})
  return (
    <>
    <div className="menu-icon">
    <i className="bi bi-menu-up" onClick={()=>setActive(true)}></i>
    </div>
      <div className="container-sidebar"  style={style} >
        <h3 className="filter">Filter: <i className="bi bi-x-square"  onClick={()=>setActive(false)} ></i></h3>
      <div className="inputQuery"> 
          <label htmlFor="query">Search Fav:</label>
          <input type="text" id="query" ref={favquery} autoComplete="off" placeholder={query} />
          <button
            className="btn-icon"
            onClick={() => onClick({ queryVal: favqueryVal, active: null })}
          >
            <i className="bi bi-search-heart"></i>
          </button>
        </div>
        <div className="language">
          <label htmlFor="lan">Language:</label>
          <select id="lan" value={language} onChange={onLanguage}>
            {languages.map((lan) => (
              <option key={lan.id} value={lan.value}>
                {lan.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sortBy">
          <label htmlFor="sort">SortBy:</label>
          <select id="sort" value={sort} onChange={onSort}>
            <option value="relevancy">Related to search</option>
            <option value="popularity">Popularity</option>
            <option value="publishedAt">Recent publications</option>
          </select>
        </div>
        <div className="pageSize">
          <label htmlFor="pageSize">PageSize (1 to 100):</label>
          <input
            type="number"
            value={page}
            onChange={onPage}
            id="pageSize"
            min="1"
            max="100"
          />
        </div>
        <div className="date">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            value={valDate}
            className="DateVal"
            min={`${calFrom[0]}-${calFrom[1] - 1}-${calFrom[2]}`}
            max={date}
            onChange={(e) => onDate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
//Determine props type
SideBar.propTypes = {
  query : PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // active: PropTypes.object.isRequired,
  onLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  onPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  onDate: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  valDate: PropTypes.string.isRequired,
};

//Language option
let languages = [
  { id: "en", value: "en", name: "English" },
  { id: "de", value: "de", name: "German" },
  { id: "ar", value: "ar", name: "Arabic" },
  { id: "es", value: "es", name: "Spanish" },
  { id: "fr", value: "fr", name: "French" },
  { id: "he", value: "he", name: "Hebrew" },
  { id: "it", value: "it", name: "Italian" },
  { id: "nl", value: "nl", name: "Dutch" },
  { id: "no", value: "no", name: "Norwegian" },
  { id: "pt", value: "pt", name: "Portuguese" },
  { id: "ru", value: "ru", name: "Russian" },
  { id: "sv", value: "sv", name: "Swedish" },
  { id: "zh", value: "zh", name: "Chinese" },
];

export default SideBar;
