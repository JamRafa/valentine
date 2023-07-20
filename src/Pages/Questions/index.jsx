import { useState } from "react";
import Home from "../../Component/QuizEstruture";
import questionsData from "../../Data/questions.json"
export default function Question(){
    
    const [question, setQuestion] = useState(1)
    const [currrentPage, setCurremtPage] = useState(0)
    
    const numberOfquestions =  questionsData.length - 1
    const startIndex = currrentPage * question
    const endIndex = startIndex + question
    const [currentQuestion] = questionsData.slice(startIndex, endIndex)


    return(
        <Home
            id={currentQuestion.id}
            title={currentQuestion.title}
            questions ={currentQuestion.questions}
            numberQuest={numberOfquestions}
            currentPage={currrentPage}
            setQuestion={setQuestion}
            setCurremtPage={setCurremtPage}
        ></Home>
    )
}