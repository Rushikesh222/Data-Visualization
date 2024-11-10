import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Filter = () => {
  const sales = useSelector((state) => state.salesData);
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [startFrom, setStartFrom] = useState("");
  const [endFrom, setEndFrom] = useState("");
  const fromStartDate = startFrom.split("-").join("/");

  const endStartDate = endFrom.split("-").join("/");

  const filterData = {
    Gender: gender,
    Age: age,
    StartFrom: fromStartDate.split("/").reverse().join("/"),
    EndFrom: endStartDate.split("/").reverse().join("/"),
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filterSalesByGender = sales.filter(
      ({ Gender }) => Gender === filterData.Gender
    );
    const filterSalesByAge = filterSalesByGender.filter(
      ({ Age }) => Age === filterData.Age
    );
    const filterSalesByDate = filterSalesByAge.filter(
      ({ Day }) => Day >= filterData.StartFrom && Day <= filterData.EndFrom
    );

    dispatch({ type: "FILTER_SALES", payload: filterSalesByDate });
  };

  return (
    <div>
      <form onSubmit={handleFilter}>
        <label>
          Gender
          <select name="gender" onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          age
          <select name="gender" onChange={(e) => setAge(e.target.value)}>
            <option value="">Select Age</option>
            <option value=">25">{">25"}</option>
            <option value="15-25">15-25</option>
          </select>
        </label>
        <label>
          Start From
          <input type="date" onChange={(e) => setStartFrom(e.target.value)} />
        </label>
        <label>
          End From
          <input type="date" onChange={(e) => setEndFrom(e.target.value)} />
        </label>
        <button type="submit">Apply Filter</button>
      </form>
    </div>
  );
};
