import { useState, useEffect } from "react";
import "./App.css";
import Contant from "./Contant";
import SideBar from "./SideBar";
import Title from "./Title";
import TopHeadLine from "./TopHeadLine";
import Button from "./Button";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Footer";
function App() {
  // setting query
  const [query, setquery] = useState({ queryVal: "general", active: 1 });
  // console.log(query.queryVal)

  // fetched data
  const [val, setVal] = useState(null);
  // page count
  const [page, setPage] = useState(1);
  //Select Language
  const [language, setLanguage] = useState("en");
  //SortBy
  const [sort, setSort] = useState("popularity");
  //pageSize
  const [pageSize, setpageSize] = useState(15);
  //handlePage function
  function handlePage(e) {
    let pageVal = e.target.value;
    pageVal < 101 && pageVal > 0
      ? setpageSize(pageVal)
      : alert("Please provide valid value!");
  }
  //yestarday
  let newDate = new Date();
  let yestarday = new Date();
  yestarday.setDate(newDate.getDate() - 1);
  let isoFormattedDate = yestarday.toISOString().split("T")[0];
  //date
  const [date, setDate] = useState(isoFormattedDate);
  //loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    async function fetchData() {
      let convert = await fetch(
       `https://newsapi.org/v2/everything?q=${query.queryVal}&from=${date}&to=${date}&sortBy=${sort}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=9fb1101e44974897a2becf24e588d7d6`
      );
      let data = await convert.json();
      setVal(data.articles ? data.articles : null);
    }
    fetchData();
  }, [query, page, date, sort, language, pageSize]);

  return (
    <>
      <div className="main-container">
        <Title />
        <TopHeadLine
          onClick={(headVal) => setquery(headVal)}
          active={query.active}
        />
        <SideBar
          onClick={(headVal) => setquery(headVal)}
          onLanguage={(e) => setLanguage(e.target.value)}
          language={language}
          onSort={(e) => setSort(e.target.value)}
          sort={sort}
          onPage={handlePage}
          page={pageSize}
          date={isoFormattedDate}
          onDate={(dateVal) => setDate(dateVal)}
          valDate={date}
        />
        {loading ? (
          <span className="loader"></span>
        ) : val ? (
          <Contant fetchData={val} />
        ) : (
          <div className="deer">
            <div className="load"></div>
            <div className="sorry">Sorry Not Found !!</div>
          </div>
        )}
        <Button page={page} onClick={(val) => setPage(val)} />
      <Footer/>
      </div>
    </>
  );
}

export default App;
