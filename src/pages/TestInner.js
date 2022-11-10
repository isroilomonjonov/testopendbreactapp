import { useEffect, useState } from "react";
import TestOption from "./TestOption";

const TestInnner = ({test,id}) => {

    return (<>
    <h3 key={id} style={{textAlign: 'center'}}>{decodeURI(test.question).replaceAll("%3F","").replaceAll("%2C","").replaceAll("%2F","")}</h3>
    <TestOption correctAnswer={test.correct_answer} incorrectAnswers={test.incorrect_answers}/>
        </>
    );
}
 
export default TestInnner;