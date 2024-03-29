import PropTypes from "prop-types";

const AgeResult = ({ age }) => {
  return (
    <h4 style={{ fontWeight: "bold", textAlign: "center" }} className="Result">
      You are {age.years} years old.
    </h4>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default AgeResult;
