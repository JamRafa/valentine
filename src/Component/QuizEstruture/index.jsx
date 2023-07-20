import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import './question.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import foto from '../../assets/primeiro.jpg'

export default function Home({ id, title, questions, numberQuest, currentPage, setQuestion, setCurremtPage }) {


    const [resposta, setResposta] = useState('')
    const [isChecked, setIsChecked] = useState(new Array(questions.length).fill(false));
    const [acerto, setAcerto] = useState(0)

    console.log(currentPage)
    console.log(numberQuest)
    function handleChange(ev, position) {

        const updatedCheckedState = isChecked.map((item, index) =>
            index === position ? !item : false

        );
        setIsChecked(updatedCheckedState)

        if (ev.target.checked) {
            setResposta(ev.target.value);
        } else {
            setResposta(0)
        }
    }

    function handleNext() {
        if (currentPage !== numberQuest) {

            if (resposta === 'true') {
                setAcerto(acerto + 1)
            }
            let newPage = currentPage + 1
            setCurremtPage(newPage)
        }
        setIsChecked(new Array(questions.length).fill(false))
    }

    return (

        <div className="back">
            <div className='questionCard'>
                <div>
                    {currentPage === 1 ?
                        <div className="quest">
                            <img src={foto} alt="aa"></img>
                        </div>
                        :
                        <div></div>
                    }
                </div>
                <div className="conteudo">
                    <p className="questionTitle">{id}. {title}</p>
                    <FormGroup className="checkQuestions">
                        {questions.map((question, index) =>
                            <FormControlLabel
                                style={{ marginLeft: 0, marginRight: 0 }}
                                className={`labelsCheck-${isChecked[index]}`}
                                key={question.id}

                                control={<Checkbox
                                    className='checkBox'
                                    checked={isChecked[index]}
                                    name="itens"
                                    value={question.value}
                                    onChange={(ev) => handleChange(ev, index)}
                                />}
                                label={question.question} />

                        )}
                    </FormGroup>

                    <div className="buttonNext">

                        {currentPage === numberQuest
                            ?
                            isChecked.includes(true)

                                ?
                                <Button
                                    className="buttonActive"
                                    variant="contained"
                                    value={currentPage}
                                    onClick={handleNext}
                                >
                                    <Link to={`/respostas/${acerto}`}>Finalizar</Link>
                                </Button>
                                :
                                <Button variant="outlined" disabled>
                                    Finalizar
                                </Button>
                            :

                            isChecked.includes(true)
                                ?
                                <Button
                                    className="buttonActive"
                                    variant="contained"
                                    value={currentPage}
                                    onClick={handleNext}
                                >
                                    proxima
                                </Button>
                                :
                                <Button variant="outlined" disabled>
                                    proxima
                                </Button>

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}