import { useParams } from "react-router-dom"
import './index.css'
import foto from '../../assets/final.jpg'

export default function Resposta() {
    const param = useParams()
    return (
        <div className="back">
            <div className='homeCard'>
                
                <div className="total">
                    <h2 className="respostasTotal">Parabens!! voce acertou: </h2>
                    <h1>{param.id}</h1>
                    <p className="premio">Pelo seu desempenho no quiz voce merece as sua recompença!!!</p>
                    <p className="premio-text">Te amo muito nao gosto quando voce está mal, quero te fazer feliz todos os dias</p>
                    <p className="premio-text">Dessa vez não pude te dar tanto, mas espero que tenha gostado TE AMO</p>
                    <img src={foto} alt="foto"></img>
                </div>
            </div>
        </div>
    )
}