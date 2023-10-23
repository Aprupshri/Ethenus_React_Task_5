import { useState } from "react";
import PropTypes from "prop-types";

const AgeCalculatorForm = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState("");

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      <input
        style={{ width: "25%" }}
        className="inputTag_Date"
        value={birthDate}
        type="date"
        onChange={handleChangeDate}
      />
      <button
        style={{
          display: "block",
          padding: "10px",
          margin: "auto",
          marginTop: "10px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "5px",
          boxShadow: "2px 2px 5px gray",
          backgroundColor: "rgb(0, 145, 255)",
          color: "white",
        }}
        className="submitbutton"
        disabled={!birthDate}
        type="submit"
      >
        Calculate Age
      </button>
    </form>
  );
};

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};

export default AgeCalculatorForm;
