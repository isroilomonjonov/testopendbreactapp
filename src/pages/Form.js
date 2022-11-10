import axios from "axios";
import { useContext, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import {  useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInput from "../hooks/useInput";
const Form = () => {
  const { value: select, changeHandler: selectChangeHandler } = useInput(
    (value) => !value
  );
  const { value: selectCaregory, changeHandler: selectCategoryChangeHandler } =
    useInput((value) => !value);
  const { value: selectAmount, changeHandler: selectAmountChangeHandler } =
    useInput((value) => !value);
  const [loader, setLoader] = useState(false);
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  const getTests = async (selectAmount, selectCaregory, select) => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${+selectAmount || 10}&category=${
        +selectCaregory || 23
      }&difficulty=${select || "easy"}&type=multiple&encode=url3986`
    );
    ctx.setAppData({
      tests: res.data.results,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    await getTests(selectAmount, selectCaregory, select);
    setLoader(false);
    navigate("/tests");
  };
  return (
    <div className="App">
      {!loader ? (
        <form onSubmit={submitHandler}>
          <h1>Test</h1>
          <div className="div-select">    <select className="select" value={select} onChange={selectChangeHandler}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select></div>
        <div className="div-select">
            <select
            className="select"
            value={selectAmount}
            onChange={selectAmountChangeHandler}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="div-select">
            <select
            className="select"
            value={selectCaregory}
            onChange={selectCategoryChangeHandler}
          >
            <option value={23}>History</option>
            <option value={21}>Sports</option>
            <option value={22}>Politics</option>
          </select>
        </div>
        <div className="div-select"> <button className="button-23">Submit</button></div>
         
        </form>
      ) : (
        <div
          style={{
            position: 'absolute',
            top:"50%",
            left:"50%",
            transform: 'translate(-50%,-50%)'
          }}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            height="50%"
            visible={true}
          />
        </div>
      )}
 
    </div>
  );
};

export default Form;
