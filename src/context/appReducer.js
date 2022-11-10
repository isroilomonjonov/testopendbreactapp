const appReducer = (state, action) => {
  switch (action.type) {
    case "TESTSET":
      return {
        tests: action.item.tests,
        totalResults:state.totalResults,
        selectedOption:state.selectedOption
      };
      case "SETRESULT":
        return {
          totalResults: ++state.totalResults,
          tests:state.tests,
          selectedOption:state.selectedOption
        };
        case "SETSELECTEDOPTION":
          return {
            selectedOption:[ ...state.selectedOption||"",action.item.selectedOption],
            tests:state.tests,
            totalResults:state.totalResults
          };
    case "RESET":
      return {
        tests: [],
        totalResults:0,
        setSelectedOption:[]
      };
    default:
      return state;
  }
};

export default appReducer;
