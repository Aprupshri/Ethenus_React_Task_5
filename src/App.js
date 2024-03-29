import { useState } from "react";
import "./App.css";
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12;
    const ageDays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
    );

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  return (
    <div className="App">
      <h1 className="Heading">Age Calculator</h1>
      <p className="sub-heading">Enter your data of birth</p>
      <AgeCalculatorForm calculateAge={calculateAge} />
      {age && <AgeResult age={age} />}
    </div>
  );
}

export default App;
