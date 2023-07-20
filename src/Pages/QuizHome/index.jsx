import { Button } from '@mui/material'
import './index.css'
import { Link } from 'react-router-dom'

export default function QuizHome() {
    return (
        <div className="back">
            <div className='homeCard'>
                <div className='homeCardData'>
                    <div className='homeCardImg'></div>
                    <div className='homeCardDataText'>
                        <h2>Feliz dia dos namorados amor!</h2>
                        <h4>Fiz esse quiz em forma de presente dos dia dos namorados</h4>
                        <div className='homeCardDataButton'>
                            <Link to='/quiz'>
                                <Button
                                    style={{backgroundColor:'#B3005E'}}
                                    variant='contained'
                                >Comecar</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}