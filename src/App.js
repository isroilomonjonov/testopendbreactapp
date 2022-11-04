import axios from "axios";
import Form from "./components/Form";
import "./App.css";
import {useEffect, useState } from "react"; 


function App() {
  const [showFinnalResult, setFinnalResult] = useState(false);
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score,setScore] = useState(0);
  const [options,setOptions]=useState([])
  const [question,setQuestion] = useState(0)
  const [changeQ,setChangeQ] = useState([])
 let allIndex=0
 useEffect(()=>{
    if(changeQ.length===question.length){
      setFinnalResult(true)
    }
 })
 const b=(a)=>{
    setOptions(randomQuestions([...a.incorrect_answers,a.correct_answer],a))
 }
 const randomQuestions=(optionss)=>{
  return optionss.sort(()=>Math.random()-0.5)
 }
  const getTests = async (selectAmount, selectCaregory, select) => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${+selectAmount || 10}&category=${
        +selectCaregory || 23
      }&difficulty=${select || "easy"}&type=multiple&encode=url3986`
    );
    // const filterQuestion=res.data.results.filter(q=>q)
    // const mySet=new Set(...res.data.results)
    console.log(res.data.results);
   setQuestion(res.data.results);
    b(res.data.results[currentQuestion])
  };
 
  const classNameOption=(option)=>{
   if(changeQ.some(r=> options.indexOf(r) >= 0)){
    if(question[currentQuestion].correct_answer===option){
      return "li-success btn"
    }
    else if(question[currentQuestion].incorrect_answers.includes(option)){
       return "li-fail btn"
    }
   }
   return "btn"
  }
  const restart=()=>{
    setQuestion(0)
    setFinnalResult(false)
    setScore(0)
    setCurrentQuestion(0)
    setOptions([])
    setChangeQ([])
  }
  const btn=(test,i)=>{
  if(currentQuestion===question.length-1){
  setCurrentQuestion(i)
  const a=question.filter((q)=>q===test)
  b(a[0])
  }else{
    setCurrentQuestion(i)
   const a=question.filter((q)=>q===test)
   b(a[0])}
  }
 const next=()=>{
  if(currentQuestion===question.length-1){
    return
  }else{
     setCurrentQuestion((currentQuestion)=>currentQuestion+1)
     b(question[currentQuestion+1]);
  }
 }
 const back=()=>{
  if(currentQuestion===0){
    return
  }else{
     setCurrentQuestion((currentQuestion)=>currentQuestion-1)
     b(question[currentQuestion-1]);
  }
 }
  const optionClicked =(bool,option)=>{
  if(bool){
    setScore(score+1)
  }
  setChangeQ((changeQ)=>[...changeQ,option])
  }
  return (
    <div className="App">
      <h1>Multiple Quiz</h1>
    {!question?<Form getTests={getTests}/>:""}
    {question?question.map((test,i)=>{
   allIndex++
   return <button className="button-current" key={i} onClick={()=>btn(test,i)}>{allIndex}</button>}):""} 
{question[0]?(<div className="question-card">
          <h2>{currentQuestion+1} out of {question.length}</h2>
          <h3 className="question-text">{decodeURI(question[currentQuestion].question.replaceAll("%3F",""))}</h3>
          <ul>
       
          {options.map((option,i)=><button className={classNameOption(option)} disabled={changeQ.some(r=> options.indexOf(r) >= 0)}  onClick={()=>optionClicked(option===question[currentQuestion].correct_answer,option)} key={i}>{decodeURI(option)} {changeQ.includes(option)?<span>🏳️</span>:""}</button>)}
          </ul>
          <button  className="button" style={{backgroundColor:"red"}} onClick={back}>Prev</button>
          <button className="button" style={{backgroundColor:"green"}} onClick={()=>setFinnalResult(true)}>Finish</button>
          <button  className="button" style={{backgroundColor:"blue"}} onClick={next}>Next</button>
        </div>
      ):""}
    {showFinnalResult? (
        <div className="final-results">
         
          {question[0]?<><h1>Final Results</h1><h2>{score} out of {question.length} correct</h2></> :<h1>404 Not Found</h1>}
          <button className="button"  onClick={restart}>Ok</button>
        </div>)  :""}
    </div>
  );

}
export default App;
