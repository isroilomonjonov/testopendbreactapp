import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppContext";

const TestOption = ({correctAnswer,incorrectAnswers}) => {
    const ctx = useContext(AppContext);
    const [options,setOptions] =useState([correctAnswer,...incorrectAnswers].sort(()=>Math.random()-0.5))
    
    useEffect(()=>{
        setOptions([correctAnswer,...incorrectAnswers].sort(()=>Math.random()-0.5))
    },[correctAnswer,incorrectAnswers])
    const optionChangeHandler=(option)=>{
        if(option===correctAnswer){
            ctx.setResult()
        }
        ctx.setSelectedOption({selectedOption:option})
    }

    const classNameOption=(option)=>{
        if(ctx.selectedOption?.some(r=> options.indexOf(r) >= 0)){
         if(correctAnswer===option){
           return "btn succes"
         }
         else if(incorrectAnswers.includes(option)){
            return "btn fail "
         }
        }
        return "btn"
       }
    return (   options.map((option,index) =><button disabled={ctx.selectedOption?.some(r=> options.indexOf(r) >= 0)} className={classNameOption(option)} key={index++} onClick={()=>optionChangeHandler(option)} >{decodeURI(option)} {ctx.selectedOption.filter(e=>e===option)[0]?<p>your option</p>:""}</button>) );
}
export default TestOption;