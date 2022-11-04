import useInput from "../hooks/useInput"
const Form = ({getTests}) => {
    const {value:select,changeHandler:selectChangeHandler,isValid:selectIsValid,setValue:selectSetValue,blur:selectBlur} =useInput((value)=>!value)
    const {value:selectCaregory,changeHandler:selectCategoryChangeHandler,isValid:selectCategoryIsValid,setValue:selectCategorySetValue,blur:selectCategoryBlur} =useInput((value)=>!value)
    const {value:selectAmount,changeHandler:selectAmountChangeHandler,isValid:selectAmountIsValid,setValue:selectAmountSetValue,blur:selectAmountBlur} =useInput((value)=>!value)  
    const submitHandler = (e) => {
        e.preventDefault();
        getTests(selectAmount,selectCaregory,select)
      }
    return ( 
        <form onSubmit={submitHandler}>
            <h1>Test</h1>
         <select className="" value={select} onChange={selectChangeHandler}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
         </select>
         {selectIsValid&&selectBlur&&<p>Hato</p>}
         <select className="" value={selectAmount} onChange={selectAmountChangeHandler}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
         </select>
         {selectAmountIsValid&&selectAmountBlur&&<p>Hato</p>}
         <select className="" value={selectCaregory} onChange={selectCategoryChangeHandler}>
              <option value={23}>History</option>
              <option value={21}>Sports</option>
              <option value={22}>Politics</option>
         </select>
         {selectCategoryIsValid&&selectCategoryBlur&&<p>Hato</p>}
        <button className="button">Submit</button>
        </form>
     );
}
 
export default Form;