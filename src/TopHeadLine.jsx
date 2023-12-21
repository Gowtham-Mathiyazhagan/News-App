import PropTypes from "prop-types";
function TopHeadLine({ onClick, active }) {
  return (
    <>
    <div className="container-header">
      {topHeadLines.map((data) => {
        return (
          <div
            key={data.id}
            className={active == data.id ? "head-line active" : "head-line"}
            onClick={() => onClick({ queryVal: data.name, active: data.id })}
          >
            {data.name}
          </div>
        );
      })}
    </div>
    </>
  );
}
TopHeadLine.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};
//Head-Lines
let topHeadLines = [
  { id: 1, name: "general" },
  { id: 2, name: "technology" },
  { id: 3, name: "business" },
  { id: 4, name: "health" },
  { id: 5, name: "science" },
  { id: 6, name: "entertainment" },
];
export default TopHeadLine;
