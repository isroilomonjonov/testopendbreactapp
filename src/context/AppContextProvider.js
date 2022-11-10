import { useReducer } from "react";
import AppContext from "./AppContext";
import appReducer from "./appReducer";

const defaultAppState = {
  tests: [],
  selectedOption:[],
  totalResults:0
};

const AppContextProvider = (props) => {
  const [appState, dispatch] = useReducer(appReducer, defaultAppState);

  const setAppDataHandler = (item) => {
    dispatch({ type: "TESTSET", item });
  };
  const setResult= () => {
    dispatch({ type: "SETRESULT"});
  };
  const setSelectedOption= (item) => {
    dispatch({ type: "SETSELECTEDOPTION", item });
  };
  const restart = () => {
    dispatch({ type: "RESET" });
  };
  const context = {
    tests: appState.tests,
    totalResults:appState.totalResults,
    setResult:setResult,
    setSelectedOption:setSelectedOption,
    selectedOption:appState.selectedOption,
    setAppData: setAppDataHandler,
    onReset: restart,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
