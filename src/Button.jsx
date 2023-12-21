import PropTypes from "prop-types";


function Button({ page, onClick }) {
  let stylePre={  opacity: 1,}
  let styleNex={  opacity: 1,}
  if(page==1)
  {
    stylePre.opacity=0.2
  }
  else if(page==5)
  {
    styleNex.opacity=0.2
  }
  return (
   
    <div className="button">
      <button style={stylePre} onClick={() => (page > 1 ? onClick((n) => n - 1) : onClick(1))}>
        Previous
      </button>
      <button style={styleNex} onClick={() => (page < 5 ? onClick((n) => n + 1) : onClick(5))}>
        Next
      </button>
    </div>
      
  );
}
Button.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
