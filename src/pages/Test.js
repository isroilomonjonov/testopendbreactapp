import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Finish from "./Finish";
import TestInnner from "./TestInner";

const Test = () => {
  const ctx = useContext(AppContext);
  const [info, setInfo] = useState(false);
  const [tests, setTests] = useState(
    ctx.tests.map((test, i) => {
      return {
        id: ++i,
        content: <TestInnner test={test} id={test.question + i} />,
      };
    })
  );
  const [currentTest, setCurrentTest] = useState(1);
  return (
    <>
      <div className="div-select">
        {tests.map((test) => (
          <button
            disabled={currentTest === test.id}
            className="button-23"
            style={{ width: "auto" }}
            onClick={() => setCurrentTest(test.id)}
          >
            {test.id}
          </button>
        ))}
      </div>
      {tests.filter((test) => test.id === currentTest)[0].content}
      <br />
      {info && <Finish onClose={() => setInfo(false)} />}
      <div className="div-select">
        <button
          className="button-23"
          style={{ width: "auto" }}
          disabled={currentTest === 1}
          onClick={() => setCurrentTest((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          className="button-23"
          style={{ width: "auto" }}
          onClick={() => setInfo(true)}
        >
          Finish
        </button>
        <button
          className="button-23"
          style={{ width: "auto" }}
          disabled={currentTest === tests.length}
          onClick={() => setCurrentTest((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Test;
